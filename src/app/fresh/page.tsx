import { API_URL } from '@/configs/api.config'
import { PUBLIC_URL } from '@/configs/url.config'
import Fresh from '@/screens/fresh/Fresh'
import { errorCatch } from 'api/api.helpers'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Fresh movies | Online-Cinema'
}

const FreshPage = async () => {
	const { props: content } = await staticContent()

	return <Fresh {...content} />
}

//Movies fetch
export const staticContent = async () => {
	try {
		const movies = await fetch(`${API_URL}${PUBLIC_URL.moviesUrl(``)}`, {
			cache: 'force-cache'
		})
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

export default FreshPage
