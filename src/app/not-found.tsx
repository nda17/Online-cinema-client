import styles from '@/components/shared/contentWrapper.module.scss'
import Heading from '@/ui/heading/Heading'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: '404 | Online-Cinema',
	description:
		'Watch MovieApp movies and TV shows online or stream right to your browser.'
}

const Error404 = () => {
	return (
		<div className={styles.contentWrapper}>
			<Heading title="404 - Page Not Found" />
		</div>
	)
}

export default Error404
