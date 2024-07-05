import { PUBLIC_PAGES } from '@/configs/pages/public.config'
import { IMovieEditInput } from '@/screens/admin/movie/movie-edit.interface'
import { IMovie } from '@/shared/types/movie.types'
import axiosInterceptorsRequest, {
	axiosClassicRequest
} from 'api/interceptors'

export const MovieService = {
	async getMoviesList(searchTerm?: string) {
		return axiosClassicRequest.get<IMovie[]>(`${PUBLIC_PAGES.MOVIES}`, {
			params: searchTerm
				? {
						searchTerm
				  }
				: {}
		})
	},

	async getMostPopularMovies() {
		return axiosClassicRequest.get<IMovie[]>(
			`${PUBLIC_PAGES.MOVIES}/most-popular`
		)
	},

	async getByGenres(genreIds: string[]) {
		return axiosClassicRequest.post<IMovie[]>(
			`${PUBLIC_PAGES.MOVIES}/by-genres`,
			{ genreIds }
		)
	},

	async getBySlug(slug: string) {
		return axiosClassicRequest.get<IMovie>(
			`${PUBLIC_PAGES.MOVIES}/by-slug/${slug}`
		)
	},

	async getByActor(actorId: string) {
		return axiosClassicRequest.get<IMovie[]>(
			`${PUBLIC_PAGES.MOVIES}/by-actor/${actorId}`
		)
	},

	async getMovieById(_id: string) {
		return axiosInterceptorsRequest.get<IMovieEditInput>(
			`${PUBLIC_PAGES.MOVIES}/${_id}`
		)
	},

	async createMovie() {
		return axiosInterceptorsRequest.post<string>(`${PUBLIC_PAGES.MOVIES}/`)
	},

	async updateCountOpened(slug: string) {
		return axiosClassicRequest.put(
			`${PUBLIC_PAGES.MOVIES}/update-count-opened`,
			{
				slug
			}
		)
	},

	async updateMovie(_id: string, data: IMovieEditInput) {
		return axiosInterceptorsRequest.put<string>(
			`${PUBLIC_PAGES.MOVIES}/${_id}`,
			data
		)
	},

	async deleteMovie(_id: string) {
		return axiosInterceptorsRequest.delete<string>(
			`${PUBLIC_PAGES.MOVIES}/${_id}`
		)
	}
}
