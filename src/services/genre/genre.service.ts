import { getGenresUrl } from '@/configs/api.config'
import { IGenre } from '@/shared/types/movie.types'
import { axiosClassicRequest } from 'api/interceptors'

export const GenreService = {
	async getAll(searchTerm?: string) {
		return axiosClassicRequest.get<IGenre[]>(getGenresUrl(``), {
			params: searchTerm
				? {
						searchTerm
				  }
				: {}
		})
	}
}
