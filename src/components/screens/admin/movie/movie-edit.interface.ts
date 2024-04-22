import { IMovie } from '@/shared/types/movie.types'

export interface IMovieEditInput
	extends Omit<
		IMovie,
		'_id' | 'rating' | 'countOpened' | 'genres' | 'actors'
	> {
	genres: string[]
	actors: string[]
}
