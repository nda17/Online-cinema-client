import { getUsersUrl } from '@/configs/api.config'
import { IUserEditInput } from '@/screens/admin/user/user-edit.interface'
import { IProfileInput } from '@/screens/profile/profile.interface'
import { IMovie } from '@/shared/types/movie.types'
import { IUser } from '@/shared/types/user.types'
import axiosInterceptorsRequest from 'api/interceptors'

export const UserService = {
	async getProfile() {
		return axiosInterceptorsRequest.get<IUser>(`${getUsersUrl('profile')}`)
	},

	async updateProfile(data: IProfileInput) {
		return axiosInterceptorsRequest.put<string>(
			`${getUsersUrl('profile')}`,
			data
		)
	},

	async resendingEmailConfirmationLink() {
		return axiosInterceptorsRequest.patch<IUser>(
			getUsersUrl('/profile/resending-email-confirmation-link')
		)
	},

	async getUsersList(searchTerm?: string) {
		return axiosInterceptorsRequest.get<IUser[]>(getUsersUrl(``), {
			params: searchTerm
				? {
						searchTerm
				  }
				: {}
		})
	},

	async getUserById(_id: string) {
		return axiosInterceptorsRequest.get<IUserEditInput>(
			getUsersUrl(`/${_id}`)
		)
	},

	async updateUser(_id: string, data: IUserEditInput) {
		return axiosInterceptorsRequest.put<string>(
			getUsersUrl(`/${_id}`),
			data
		)
	},

	async deleteUser(_id: string) {
		return axiosInterceptorsRequest.delete<string>(getUsersUrl(`/${_id}`))
	},

	async getFavorites() {
		return axiosInterceptorsRequest.get<IMovie[]>(
			getUsersUrl('/profile/favorites')
		)
	},

	async toggleFavorite(movieId: string) {
		return axiosInterceptorsRequest.put(
			getUsersUrl('/profile/favorites'),
			{
				movieId
			}
		)
	}
}
