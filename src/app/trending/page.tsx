import Trending from '@/screens/trending/Trending'
import { API_URL } from '@/configs/api.config'
import { PUBLIC_URL } from '@/configs/url.config'
import { errorCatch } from 'api/api.helpers'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Trending movies | Online-Cinema'
}

const TrendingPage = async () => {
	const { props: content } = await staticContent()

	return <Trending {...content} />
}

export const staticContent = async () => {
	try {
		const movies = await fetch(
			`${API_URL}${PUBLIC_URL.moviesUrl('most-popular')}`,
			{
				cache: 'force-cache'
			}
		)
			.then((response) => response.json())
			.then((data) => data)

		return {
			props: { movies }
		}
	} catch (error) {
		console.log(errorCatch(error))

		return {
			props: {
				movies: []
			}
		}
	}
}

export default TrendingPage
