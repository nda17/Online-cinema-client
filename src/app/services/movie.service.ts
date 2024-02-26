import { axiosWithoutAuth } from '../api/interceptors'
import { getMoviesUrl } from '../configs/api.config'
import { IMovie } from '../shared/types/movie.types'

export const MovieService = {
	async getAll(searchTerm?: string) {
		return axiosWithoutAuth.get<IMovie[]>(getMoviesUrl(``), {
			params: searchTerm
				? {
						searchTerm
					}
				: {}
		})
	}
}
