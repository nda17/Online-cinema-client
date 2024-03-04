import Heading from '@/components/ui/heading/Heading'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: '404',
	description:
		'Watch MovieApp movies and TV shows online or stream right to your browser.'
}

const Error404 = () => {
	return <Heading title="404 - Page Not Found" />
}

export default Error404
