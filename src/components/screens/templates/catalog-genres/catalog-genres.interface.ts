import { IGenresCollection } from '@/shared/types/collection.types'

export interface ICatalogGenres {
	title: string
	description?: string
	genres: IGenresCollection[]
}
