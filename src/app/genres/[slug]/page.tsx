import Error404 from '@/app/not-found'
import Genre from '@/components/screens/genres/Genre'
import { GenreService } from '@/services/genre/genre.service'
import { MovieService } from '@/services/movie/movie.service'
import { errorCatch } from 'api/api.helpers'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Genres | Online-Cinema'
}

const GenrePage = async ({ params }: { params: { slug: string } }) => {
	const data = await staticContent(params)

	const genre = data?.genre
	const movies = data?.movies

	return genre ? <Genre genre={genre} movies={movies} /> : <Error404 />
}

//Genres fetch
export const staticContent = async (params: any) => {
	try {
		const { data: genre } = await GenreService.getGenreBySlug(
			String(params?.slug)
		)

		const { data: movies } = await MovieService.getByGenres([genre._id])

		return {
			movies,
			genre
		}
	} catch (error) {
		console.log(errorCatch(error))
	}
}

export default GenrePage
