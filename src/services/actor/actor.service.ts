import { getActorsUrl } from '@/configs/api.config'
import { IActorEditInput } from '@/screens/admin/actor/actor-edit.interface'
import { IActor } from '@/shared/types/movie.types'
import axiosInterceptorsRequest, {
	axiosClassicRequest
} from 'api/interceptors'

export const ActorService = {
	async getActorsList(searchTerm?: string) {
		return axiosClassicRequest.get<IActor[]>(getActorsUrl(``), {
			params: searchTerm
				? {
						searchTerm
				  }
				: {}
		})
	},

	async getActorBySlug(slug: string) {
		return axiosClassicRequest.get<IActor>(
			getActorsUrl(`/by-slug/${slug}`)
		)
	},

	async getActorById(_id: string) {
		return axiosInterceptorsRequest.get<IActorEditInput>(
			getActorsUrl(`/${_id}`)
		)
	},

	async createActor() {
		return axiosInterceptorsRequest.post<string>(getActorsUrl(`/`))
	},

	async updateActor(_id: string, data: IActorEditInput) {
		return axiosInterceptorsRequest.put<string>(
			getActorsUrl(`/${_id}`),
			data
		)
	},

	async deleteActor(_id: string) {
		return axiosInterceptorsRequest.delete<string>(getActorsUrl(`/${_id}`))
	}
}
