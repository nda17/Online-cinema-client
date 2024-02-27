import { getGenresUrl } from '@configs/api.config'
import { IGenre } from '@shared/types/movie.types'
import { axiosWithoutAuth } from '../api/interceptors'

export const GenreService = {
	async getAll() {
		return axiosWithoutAuth.get<IGenre[]>(getGenresUrl(``))
	}
}
