import { IMovie } from '@/shared/types/movie.types'

export interface ICatalogMovies {
	title?: string
	description?: string
	movies: IMovie[]
	device?: string
}
