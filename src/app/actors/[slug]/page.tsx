import Error404 from '@/app/not-found'
import Actor from '@/screens/actors/Actor'
import { ActorService } from '@/services/actor/actor.service'
import { MovieService } from '@/services/movie/movie.service'
import { errorCatch } from 'api/api.helpers'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Actor | Online-Cinema'
}

const ActorPage = async ({ params }: { params: { slug: string } }) => {
	const data = await staticContent(params)

	const actor = data?.actor
	const movies = data?.movies

	return actor ? <Actor actor={actor} movies={movies} /> : <Error404 />
}

//Actors fetch
export const staticContent = async (params: any) => {
	try {
		const { data: actor } = await ActorService.getActorBySlug(
			String(params?.slug)
		)

		const { data: movies } = await MovieService.getByActor(actor._id)

		return {
			movies,
			actor
		}
	} catch (error) {
		console.log(errorCatch(error))
	}
}

export default ActorPage
