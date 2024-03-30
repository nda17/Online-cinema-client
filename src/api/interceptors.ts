import { EnumTokens } from '@/configs/enum.tokens'
import { removeTokensFromStorage } from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'
import axios from 'axios'
import Cookies from 'js-cookie'
import { API_URL } from '../configs/api.config'
import { errorCatch } from './api.helpers'

// Default requests without authorization:
export const axiosClassicRequest = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json'
	}
})

// Requests using axios interceptors to update accessToken:
const axiosInterceptorsRequest = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json'
	}
})

axiosInterceptorsRequest.interceptors.request.use((config) => {
	const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})

axiosInterceptorsRequest.interceptors.response.use(
	(config) => config,
	async (error) => {
		const originalRequest = error.config

		if (
			(error.response.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				await AuthService.getNewTokens()

				return axiosInterceptorsRequest.request(originalRequest)
			} catch (e) {
				if (errorCatch(e) === 'jwt expired') {
					removeTokensFromStorage()
				}
			}
		}

		throw error
	}
)

export default axiosInterceptorsRequest
