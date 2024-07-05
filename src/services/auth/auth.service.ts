import { PUBLIC_PAGES } from '@/configs/pages/public.config'
import { IEmailСonfirmation } from '@/screens/auth/email-confirmation/email-confirmation.interface'
import { IEmail } from '@/screens/auth/restore-password/restore-password.interface'
import { IAuthResponse } from '@/store/user/user.interface'
import { axiosClassicRequest } from 'api/interceptors'
import Cookies from 'js-cookie'
import {
	removeTokensFromStorage,
	removeUserFromStorage,
	saveTokenToStorage,
	saveUserToStorage
} from './auth.helper'

export const AuthService = {
	async restore(email: string) {
		const response = await axiosClassicRequest.post<IEmail>(
			`${PUBLIC_PAGES.AUTH}/restore-password`,
			{ email }
		)

		return response
	},

	async getById(_id: string) {
		const response = await axiosClassicRequest.post<IEmailСonfirmation>(
			`${PUBLIC_PAGES.AUTH}/confirmation-email/${_id}`,
			{ _id }
		)
		return response
	},

	async confirmationEmail(_id: string) {
		const response = await axiosClassicRequest.patch<IEmailСonfirmation>(
			`${PUBLIC_PAGES.AUTH}/confirmation-email/${_id}`,
			{ _id }
		)
		return response
	},

	async register(email: string, password: string) {
		const response = await axiosClassicRequest.post<IAuthResponse>(
			`${PUBLIC_PAGES.AUTH}/register`,
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
			`${PUBLIC_PAGES.AUTH}/login`,
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
			`${PUBLIC_PAGES.AUTH}/login/access-token`,
			{ refreshToken },
			{
				headers: {
					'Content-Type': 'application/json'
				}
			}
		)

		if (response.data.accessToken) {
			saveTokenToStorage(response.data)
			saveUserToStorage(response.data)
		}

		return response
	}
}
