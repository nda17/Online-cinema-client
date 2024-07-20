import { getGenresUrl } from '@/configs/api.config'
import { IGenreEditInput } from '@/screens/admin/genre/genre-edit.interface'
import { IGenre } from '@/shared/types/movie.types'
import axiosInterceptorsRequest, {
	axiosClassicRequest
} from 'api/interceptors'

export const GenreService = {
	async getGenresList(searchTerm?: string) {
		return axiosClassicRequest.get<IGenre[]>(getGenresUrl(``), {
			params: searchTerm
				? {
						searchTerm
				  }
				: {}
		})
	},

	async getGenreBySlug(slug: string) {
		return axiosClassicRequest.get<IGenre>(
			getGenresUrl(`/by-slug/${slug}`)
		)
	},

	async getGenreById(_id: string) {
		return axiosInterceptorsRequest.get<IGenreEditInput>(
			getGenresUrl(`/${_id}`)
		)
	},

	async getCollections() {
		return axiosClassicRequest.get(getGenresUrl('/collections'))
	},

	async createGenre() {
		return axiosInterceptorsRequest.post<string>(getGenresUrl('/'))
	},

	async updateGenre(_id: string, data: IGenreEditInput) {
		return axiosInterceptorsRequest.put<string>(
			getGenresUrl(`/${_id}`),
			data
		)
	},

	async deleteGenre(_id: string) {
		return axiosInterceptorsRequest.delete<string>(getGenresUrl(`/${_id}`))
	}
}
