import Error404 from '@/app/not-found'
import Actor from '@/screens/actors/Actor'
import { ActorService } from '@/services/actor/actor.service'
import { MovieService } from '@/services/movie/movie.service'
import { errorCatch } from 'api/api.helpers'
import { Metadata } from 'next'

export const generateMetadata = async ({
	params
}: {
	params: { slug: string }
}): Promise<Metadata> => {
	const { data: actor } = await ActorService.getActorBySlug(
		String(params?.slug)
	)

	return {
		title: `${actor.name} | Online-Cinema`
	}
}

const ActorPage = async ({ params }: { params: { slug: string } }) => {
	const data = await staticContent(params)

	const actor = data?.actor
	const movies = data?.movies

	return actor ? <Actor actor={actor} movies={movies} /> : <Error404 />
}

const staticContent = async (params: { slug: string }) => {
	try {
		const { data: actor } = await ActorService.getActorBySlug(params?.slug)

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
