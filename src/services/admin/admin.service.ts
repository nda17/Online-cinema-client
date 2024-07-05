import { USER_PAGES } from '@/configs/pages/profile.config'
import axiosInterceptorsRequest from 'api/interceptors'

export const AdminService = {
	async getCountUsers() {
		return axiosInterceptorsRequest.get<number>(
			`${USER_PAGES.USERS}/count`
		)
	}
}
