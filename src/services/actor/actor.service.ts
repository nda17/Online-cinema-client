import { PUBLIC_PATH } from '@/configs/api.config'
import { IActorEditInput } from '@/screens/admin/actor/actor-edit.interface'
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

	async getActorBySlug(slug: string) {
		return axiosClassicRequest.get<IActor>(
			PUBLIC_PATH.actorsUrl(`/by-slug/${slug}`)
		)
	},

	async getActorById(_id: string) {
		return axiosInterceptorsRequest.get<IActorEditInput>(
			PUBLIC_PATH.actorsUrl(`/${_id}`)
		)
	},

	async createActor() {
		return axiosInterceptorsRequest.post<string>(
			PUBLIC_PATH.actorsUrl('/')
		)
	},

	async updateActor(_id: string, data: IActorEditInput) {
		return axiosInterceptorsRequest.put<string>(
			PUBLIC_PATH.actorsUrl(`/${_id}`),
			data
		)
	},

	async deleteActor(_id: string) {
		return axiosInterceptorsRequest.delete<string>(
			PUBLIC_PATH.actorsUrl(`/${_id}`)
		)
	}
}
