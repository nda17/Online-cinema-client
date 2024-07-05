import { PUBLIC_PAGES } from '@/configs/pages/public.config'
import { IGenreEditInput } from '@/screens/admin/genre/genre-edit.interface'
import { IGenre } from '@/shared/types/movie.types'
import axiosInterceptorsRequest, {
	axiosClassicRequest
} from 'api/interceptors'

export const GenreService = {
	async getGenresList(searchTerm?: string) {
		return axiosClassicRequest.get<IGenre[]>(`${PUBLIC_PAGES.GENRES}`, {
			params: searchTerm
				? {
						searchTerm
				  }
				: {}
		})
	},

	async getGenreBySlug(slug: string) {
		return axiosClassicRequest.get<IGenre>(
			`${PUBLIC_PAGES.GENRES}/by-slug/${slug}`
		)
	},

	async getGenreById(_id: string) {
		return axiosInterceptorsRequest.get<IGenreEditInput>(
			`${PUBLIC_PAGES.GENRES}/${_id}`
		)
	},

	async getCollections() {
		return axiosClassicRequest.get(`${PUBLIC_PAGES.GENRES}/collections`)
	},

	async createGenre() {
		return axiosInterceptorsRequest.post<string>(`${PUBLIC_PAGES.GENRES}/`)
	},

	async updateGenre(_id: string, data: IGenreEditInput) {
		return axiosInterceptorsRequest.put<string>(
			`${PUBLIC_PAGES.GENRES}/${_id}`,
			data
		)
	},

	async deleteGenre(_id: string) {
		return axiosInterceptorsRequest.delete<string>(
			`${PUBLIC_PAGES.GENRES}/${_id}`
		)
	}
}
