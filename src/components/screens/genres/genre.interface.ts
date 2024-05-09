import { IGenre, IMovie } from '@/shared/types/movie.types'

export interface IGenrePage {
	movies: IMovie[] | undefined
	genre: IGenre
}
