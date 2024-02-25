import { axiosWithoutAuth } from '../api/interceptors'
import { getGenresUrl } from '../configs/api.config'
import { IGenre } from '../shared/types/movie.types'

export const GenreService = {
    async getAll() {
        return axiosWithoutAuth.get<IGenre[]>(getGenresUrl(``))
    },
}

