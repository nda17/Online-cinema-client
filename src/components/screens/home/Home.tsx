import styles from '@/components/shared/contentWrapper.module.scss'
import Heading from '@/ui/heading/Heading'
import Slider from '@/ui/slider/Slider'
import { FC } from 'react'
import { IHome } from './home.interface'

const Home: FC<IHome> = (content) => {
	const slides = content.slides
	return (
		<div className={styles.contentWrapper}>
			<Heading title="Watch movies online" />
			{content ? <Slider slides={slides} /> : null}
		</div>
	)
}

export default Home
