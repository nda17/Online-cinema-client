import { ICollectionPage } from '@/screens/collection/collection.interface'

export interface IGenresCollection {
	title: string
	description?: string
	_id: string
	image: string
	slug: string
	genres?: ICollectionPage[]
}
