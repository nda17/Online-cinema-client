import GenreCollection from '@/screens/genre-collection/GenreCollection'
import { GenreService } from '@/services/genre/genre.service'
import { errorCatch } from 'api/api.helpers'
import { Metadata } from 'next'
import Error404 from '../not-found'

export const metadata: Metadata = {
	title: 'Genre collection | Online-Cinema'
}

export const revalidate = 60

const GenreCollectionPage = async () => {
	const data = await staticContent()

	const genres = data?.genres

	return genres ? <GenreCollection genres={genres || []} /> : <Error404 />
}

const staticContent = async () => {
	try {
		const { data: genres } = await GenreService.getCollections()

		return {
			genres
		}
	} catch (error) {
		console.log(errorCatch(error))
	}
}

export default GenreCollectionPage
