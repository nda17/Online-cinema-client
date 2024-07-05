import { PUBLIC_PAGES } from '@/configs/pages/public.config'
import { IActorEditInput } from '@/screens/admin/actor/actor-edit.interface'
import { IActor } from '@/shared/types/movie.types'
import axiosInterceptorsRequest, {
	axiosClassicRequest
} from 'api/interceptors'

export const ActorService = {
	async getActorsList(searchTerm?: string) {
		return axiosClassicRequest.get<IActor[]>(PUBLIC_PAGES.ACTORS, {
			params: searchTerm
				? {
						searchTerm
				  }
				: {}
		})
	},

	async getActorBySlug(slug: string) {
		return axiosClassicRequest.get<IActor>(
			`${PUBLIC_PAGES.ACTORS}/by-slug/${slug}`
		)
	},

	async getActorById(_id: string) {
		return axiosInterceptorsRequest.get<IActorEditInput>(
			`${PUBLIC_PAGES.ACTORS}/${_id}`
		)
	},

	async createActor() {
		return axiosInterceptorsRequest.post<string>(`${PUBLIC_PAGES.ACTORS}/`)
	},

	async updateActor(_id: string, data: IActorEditInput) {
		return axiosInterceptorsRequest.put<string>(
			`${PUBLIC_PAGES.ACTORS}/${_id}`,
			data
		)
	},

	async deleteActor(_id: string) {
		return axiosInterceptorsRequest.delete<string>(
			`${PUBLIC_PAGES.ACTORS}/${_id}`
		)
	}
}
