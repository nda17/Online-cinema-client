import { PUBLIC_PATH } from '@/configs/api.config'
import { IGenre } from '@/shared/types/movie.types'
import axiosInterceptorsRequest, {
	axiosClassicRequest
} from 'api/interceptors'

export const GenreService = {
	async getGenresList(searchTerm?: string) {
		return axiosClassicRequest.get<IGenre[]>(PUBLIC_PATH.genresUrl(``), {
			params: searchTerm
				? {
						searchTerm
				  }
				: {}
		})
	},

	async deleteGenre(_id: string) {
		return axiosInterceptorsRequest.delete<string>(
			PUBLIC_PATH.usersUrl(`/${_id}`)
		)
	}
}
