import { getGenresUrl } from '@/configs/api.config'
import { IGenre } from '@/shared/types/movie.types'
import { axiosWithoutAuth } from '../../api/interceptors'

export const GenreService = {
	async getAll(searchTerm?: string) {
		return axiosWithoutAuth.get<IGenre[]>(getGenresUrl(``), {
			params: searchTerm
				? {
						searchTerm
				  }
				: {}
		})
	}
}
