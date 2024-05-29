import { IGenreCollection } from '@/shared/types/movie.types'

export interface ICatalogGenres {
	title: string
	description?: string
	genres: IGenreCollection[]
}
