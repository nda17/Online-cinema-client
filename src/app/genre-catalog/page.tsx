import Collection from '@/screens/collection/Collection'
import { GenreService } from '@/services/genre/genre.service'
import { errorCatch } from 'api/api.helpers'
import { Metadata } from 'next'
import Error404 from '../not-found'

export const metadata: Metadata = {
	title: 'Genre catalog | Online-Cinema'
}

const GenreCatalogPage = async () => {
	const data = await staticContent()

	const collection = data?.collection

	return collection ? (
		<Collection collection={collection || []} />
	) : (
		<Error404 />
	)
}

const staticContent = async () => {
	try {
		const response = await GenreService.getCollections()

		const collection = response.data.map((item) => ({
			_id: item._id,
			image: item.image,
			title: item.title,
			slug: item.slug
		}))

		return {
			collection
		}
	} catch (error) {
		console.log(errorCatch(error))
	}
}

export default GenreCatalogPage
