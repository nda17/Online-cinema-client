import { PUBLIC_PATH } from '@/configs/api.config'
import { IGenre } from '@/shared/types/movie.types'
import { axiosClassicRequest } from 'api/interceptors'

export const GenreService = {
	async getGenres(searchTerm?: string) {
		return axiosClassicRequest.get<IGenre[]>(PUBLIC_PATH.genresUrl(``), {
			params: searchTerm
				? {
						searchTerm
				  }
				: {}
		})
	}
}
