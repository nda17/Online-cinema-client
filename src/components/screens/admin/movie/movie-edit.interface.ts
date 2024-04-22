import { IMovie } from '@/shared/types/movie.types'

export interface IMovieEditInput
	extends Omit<IMovie, '_id' | 'countOpened' | 'genres' | 'actors'> {
	genres: string[]
	actors: string[]
}
