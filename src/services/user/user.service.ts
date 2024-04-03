import { PUBLIC_PATH } from '@/configs/api.config'
import { IUser } from '@/shared/types/user.types'
import axiosInterceptorsRequest from 'api/interceptors'

export const UserService = {
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

	async deleteUser(_id: string) {
		console.log(PUBLIC_PATH.usersUrl(`/${_id}`));
		
		return axiosInterceptorsRequest.delete<string>(
			PUBLIC_PATH.usersUrl(`/${_id}`)
		)
		
	}
}
