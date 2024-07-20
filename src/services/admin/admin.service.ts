import { getUsersUrl } from '@/configs/api.config'
import axiosInterceptorsRequest from 'api/interceptors'

export const AdminService = {
	async getCountUsers() {
		return axiosInterceptorsRequest.get<number>(getUsersUrl('/count'))
	}
}
