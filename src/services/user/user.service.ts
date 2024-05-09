import { PUBLIC_PATH } from '@/configs/api.config'
import { IUserEditInput } from '@/screens/admin/user/user-edit.interface'
import { IProfileInput } from '@/screens/profile/profile.interface'
import { IUser } from '@/shared/types/user.types'
import axiosInterceptorsRequest from 'api/interceptors'

export const UserService = {
	async getProfile() {
		return axiosInterceptorsRequest.get<IUser>(
			PUBLIC_PATH.usersUrl('/profile')
		)
	},

	async updateProfile(data: IProfileInput) {
		return axiosInterceptorsRequest.put<string>(
			PUBLIC_PATH.usersUrl('/profile'),
			data
		)
	},

	async getUsersList(searchTerm?: string) {
		return axiosInterceptorsRequest.get<IUser[]>(
			PUBLIC_PATH.usersUrl(``),
			{
				params: searchTerm
					? {
							searchTerm
					  }
					: {}
			}
		)
	},

	async getUserById(_id: string) {
		return axiosInterceptorsRequest.get<IUserEditInput>(
			PUBLIC_PATH.usersUrl(`/${_id}`)
		)
	},

	async updateUser(_id: string, data: IUserEditInput) {
		return axiosInterceptorsRequest.put<string>(
			PUBLIC_PATH.usersUrl(`/${_id}`),
			data
		)
	},

	async deleteUser(_id: string) {
		return axiosInterceptorsRequest.delete<string>(
			PUBLIC_PATH.usersUrl(`/${_id}`)
		)
	}
}
