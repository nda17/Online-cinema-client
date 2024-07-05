import { USER_PAGES } from '@/configs/pages/profile.config'
import { IUserEditInput } from '@/screens/admin/user/user-edit.interface'
import { IProfileInput } from '@/screens/profile/profile.interface'
import { IMovie } from '@/shared/types/movie.types'
import { IUser } from '@/shared/types/user.types'
import axiosInterceptorsRequest from 'api/interceptors'

export const UserService = {
	async getProfile() {
		return axiosInterceptorsRequest.get<IUser>(
			`${USER_PAGES.USERS}${USER_PAGES.PROFILE}`
		)
	},

	async updateProfile(data: IProfileInput) {
		return axiosInterceptorsRequest.put<string>(
			`${USER_PAGES.USERS}${USER_PAGES.PROFILE}`,
			data
		)
	},

	async resendingEmailConfirmationLink() {
		return axiosInterceptorsRequest.patch<IUser>(
			`${USER_PAGES.USERS}/profile/resending-email-confirmation-link`
		)
	},

	async getUsersList(searchTerm?: string) {
		return axiosInterceptorsRequest.get<IUser[]>(`${USER_PAGES.USERS}`, {
			params: searchTerm
				? {
						searchTerm
				  }
				: {}
		})
	},

	async getUserById(_id: string) {
		return axiosInterceptorsRequest.get<IUserEditInput>(
			`${USER_PAGES.USERS}/${_id}`
		)
	},

	async updateUser(_id: string, data: IUserEditInput) {
		return axiosInterceptorsRequest.put<string>(
			`${USER_PAGES.USERS}/${_id}`,
			data
		)
	},

	async deleteUser(_id: string) {
		return axiosInterceptorsRequest.delete<string>(
			`${USER_PAGES.USERS}/${_id}`
		)
	},

	async getFavorites() {
		return axiosInterceptorsRequest.get<IMovie[]>(
			`${USER_PAGES.USERS}/profile/favorites`
		)
	},

	async toggleFavorite(movieId: string) {
		return axiosInterceptorsRequest.put(
			`${USER_PAGES.USERS}/profile/favorites`,
			{
				movieId
			}
		)
	}
}
