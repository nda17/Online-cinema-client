import { PUBLIC_PATH } from '@/configs/api.config'
import { IGenreEditInput } from '@/screens/admin/genre/genre-edit.interface'
import { IGenre } from '@/shared/types/movie.types'
import axiosInterceptorsRequest, {
	axiosClassicRequest
} from 'api/interceptors'

export const GenreService = {
	async getGenresList(searchTerm?: string) {
		return axiosClassicRequest.get<IGenre[]>(PUBLIC_PATH.genresUrl(``), {
			params: searchTerm
				? {
						searchTerm
				  }
				: {}
		})
	},

	async getGenreBySlug(slug: string) {
		return (
			axiosClassicRequest.get<IGenre>(
				PUBLIC_PATH.genresUrl(`/by-slug/${slug}`)
			)
		)
	},

	async getGenreById(_id: string) {
		return axiosInterceptorsRequest.get<IGenreEditInput>(
			PUBLIC_PATH.genresUrl(`/${_id}`)
		)
	},

	async createGenre() {
		return axiosInterceptorsRequest.post<string>(
			PUBLIC_PATH.genresUrl('/')
		)
	},

	async updateGenre(_id: string, data: IGenreEditInput) {
		return axiosInterceptorsRequest.put<string>(
			PUBLIC_PATH.genresUrl(`/${_id}`),
			data
		)
	},

	async deleteGenre(_id: string) {
		return axiosInterceptorsRequest.delete<string>(
			PUBLIC_PATH.genresUrl(`/${_id}`)
		)
	}
}
