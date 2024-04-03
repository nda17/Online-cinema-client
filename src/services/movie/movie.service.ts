import { PUBLIC_PATH } from '@/configs/api.config'
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

	async deleteMovie(_id: string) {
		return axiosInterceptorsRequest.delete<string>(
			PUBLIC_PATH.usersUrl(`/${_id}`)
		)
	}
}
