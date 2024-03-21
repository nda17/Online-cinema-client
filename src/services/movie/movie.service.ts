import { getMoviesUrl } from '@/configs/api.config'
import { IMovie } from '@/shared/types/movie.types'
import { axiosClassicRequest } from 'api/interceptors'

export const MovieService = {
	async getMovies(searchTerm?: string) {
		return axiosClassicRequest.get<IMovie[]>(getMoviesUrl(``), {
			params: searchTerm
				? {
						searchTerm
				  }
				: {}
		})
	},

	async getMostPopularMovies() {
		const { data: movies } = await axiosClassicRequest.get<IMovie[]>(
			getMoviesUrl('/most-popular')
		)
		return movies
	}
}
