import { getMoviesUrl } from '@configs/api.config'
import { IMovie } from '@shared/types/movie.types'
import { axiosWithoutAuth } from '../api/interceptors'

export const MovieService = {
	async getAll(searchTerm?: string) {
		return axiosWithoutAuth.get<IMovie[]>(getMoviesUrl(``), {
			params: searchTerm
				? {
						searchTerm
					}
				: {}
		})
	},

	async getMostPopularMovies() {
		const { data: movies } = await axiosWithoutAuth.get<IMovie[]>(
			getMoviesUrl('/most-popular')
		)
		return movies
	}
}
