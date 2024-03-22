import { getAuthUrl } from '@/configs/api.config'
import { IAuthResponse } from '@/store/user/user.interface'
import { getContentType } from 'api/api.helpers'
import { axiosClassicRequest } from 'api/interceptors'
import Cookies from 'js-cookie'
import {
	removeTokensFromStorage,
	removeUserFromStorage,
	saveTokenToStorage,
	saveUserToStorage
} from './auth.helper'

export const AuthService = {
	async register(email: string, password: string) {
		const response = await axiosClassicRequest.post<IAuthResponse>(
			getAuthUrl('/register'),
			{ email, password }
		)

		if (response.data.accessToken) {
			saveTokenToStorage(response.data)
			saveUserToStorage(response.data)
		}

		return response
	},

	async login(email: string, password: string) {
		const response = await axiosClassicRequest.post<IAuthResponse>(
			getAuthUrl('/login'),
			{ email, password }
		)

		if (response.data.accessToken) {
			saveTokenToStorage(response.data)
			saveUserToStorage(response.data)
		}

		return response
	},

	logout() {
		removeTokensFromStorage()
		removeUserFromStorage()
	},

	async getNewTokens() {
		const refreshToken = Cookies.get('refreshToken')
		const response = await axiosClassicRequest.post<IAuthResponse>(
			getAuthUrl('/login/access-token'),
			{ refreshToken },
			{ headers: getContentType() }
		)

		if (response.data.accessToken) {
			saveTokenToStorage(response.data)
			saveUserToStorage(response.data)
		}

		return response
	}
}
