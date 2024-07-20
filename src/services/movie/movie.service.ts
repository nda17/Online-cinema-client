import { getMoviesUrl } from '@/configs/api.config'
import { IMovieEditInput } from '@/screens/admin/movie/movie-edit.interface'
import { IMovie } from '@/shared/types/movie.types'
import axiosInterceptorsRequest, {
	axiosClassicRequest
} from 'api/interceptors'

export const MovieService = {
	async getMoviesList(searchTerm?: string) {
		return axiosClassicRequest.get<IMovie[]>(getMoviesUrl(``), {
			params: searchTerm
				? {
						searchTerm
				  }
				: {}
		})
	},

	async getMostPopularMovies() {
		return axiosClassicRequest.get<IMovie[]>(getMoviesUrl('/most-popular'))
	},

	async getByGenres(genreIds: string[]) {
		return axiosClassicRequest.post<IMovie[]>(getMoviesUrl('/by-genres'), {
			genreIds
		})
	},

	async getBySlug(slug: string) {
		return axiosClassicRequest.get<IMovie>(
			getMoviesUrl(`/by-slug/${slug}`)
		)
	},

	async getByActor(actorId: string) {
		return axiosClassicRequest.get<IMovie[]>(
			getMoviesUrl(`/by-actor/${actorId}`)
		)
	},

	async getMovieById(_id: string) {
		return axiosInterceptorsRequest.get<IMovieEditInput>(
			getMoviesUrl(`/${_id}`)
		)
	},

	async createMovie() {
		return axiosInterceptorsRequest.post<string>(getMoviesUrl('/'))
	},

	async updateCountOpened(slug: string) {
		return axiosClassicRequest.put(getMoviesUrl('/update-count-opened'), {
			slug
		})
	},

	async updateMovie(_id: string, data: IMovieEditInput) {
		return axiosInterceptorsRequest.put<string>(
			getMoviesUrl(`/${_id}`),
			data
		)
	},

	async deleteMovie(_id: string) {
		return axiosInterceptorsRequest.delete<string>(getMoviesUrl(`/${_id}`))
	}
}
