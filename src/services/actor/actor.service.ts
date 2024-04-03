import { PUBLIC_PATH } from '@/configs/api.config'
import { IActor } from '@/shared/types/movie.types'
import axiosInterceptorsRequest, {
	axiosClassicRequest
} from 'api/interceptors'

export const ActorService = {
	async getActorsList(searchTerm?: string) {
		return axiosClassicRequest.get<IActor[]>(PUBLIC_PATH.actorsUrl(``), {
			params: searchTerm
				? {
						searchTerm
				  }
				: {}
		})
	},

	async deleteActor(_id: string) {
		return axiosInterceptorsRequest.delete<string>(
			PUBLIC_PATH.usersUrl(`/${_id}`)
		)
	}
}
