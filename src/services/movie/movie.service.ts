import { PUBLIC_PATH } from '@/configs/api.config'
import { IMovieEditInput } from '@/screens/admin/movie/movie-edit.interface'
import { IMovie } from '@/shared/types/movie.types'
import axiosInterceptorsRequest, {
	axiosClassicRequest
} from 'api/interceptors'

export const MovieService = {
	async getMoviesList(searchTerm?: string) {
		return axiosClassicRequest.get<IMovie[]>(PUBLIC_PATH.moviesUrl(``), {
			params: searchTerm
				? {
						searchTerm
				  }
				: {}
		})
	},

	async getMostPopularMovies() {
		const { data: movies } = await axiosClassicRequest.get<IMovie[]>(
			PUBLIC_PATH.moviesUrl('/most-popular')
		)
		return movies
	},

	async getByGenres(genreIds: string[]) {
		return axiosClassicRequest.post<IMovie[]>(
			PUBLIC_PATH.moviesUrl('/by-genres'),
			{ genreIds }
		)
	},

	async getBySlug(slug: string) {
		return axiosClassicRequest.get<IMovie>(
			PUBLIC_PATH.moviesUrl(`/by-slug/${slug}`)
		)
	},

	async getByActor(actorId: string) {
		return axiosClassicRequest.get<IMovie[]>(
			PUBLIC_PATH.moviesUrl(`/by-actor/${actorId}`)
		)
	},

	async getMovieById(_id: string) {
		return axiosInterceptorsRequest.get<IMovieEditInput>(
			PUBLIC_PATH.moviesUrl(`/${_id}`)
		)
	},

	async createMovie() {
		return axiosInterceptorsRequest.post<string>(
			PUBLIC_PATH.moviesUrl('/')
		)
	},

	async updateMovie(_id: string, data: IMovieEditInput) {
		return axiosInterceptorsRequest.put<string>(
			PUBLIC_PATH.moviesUrl(`/${_id}`),
			data
		)
	},

	async deleteMovie(_id: string) {
		return axiosInterceptorsRequest.delete<string>(
			PUBLIC_PATH.moviesUrl(`/${_id}`)
		)
	}
}
