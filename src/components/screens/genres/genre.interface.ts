import { IGenre, IMovie } from '@/shared/types/movie.types'

export interface IGenres {
	movies: IMovie[] | undefined
	genre: IGenre 
}
