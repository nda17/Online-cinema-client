import { PUBLIC_PATH } from '@/configs/api.config'
import axiosInterceptorsRequest from 'api/interceptors'

export const AdminService = {
	async getCountUsers() {
		return axiosInterceptorsRequest.get<number>(
			PUBLIC_PATH.usersUrl('/count')
		)
	}
}
