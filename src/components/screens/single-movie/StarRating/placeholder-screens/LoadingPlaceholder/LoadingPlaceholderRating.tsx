import loader from '@/assets/images/loading-animation.svg'
import Image from 'next/image'
import { FC } from 'react'
import styles from './LoadingPlaceholderRating.module.scss'

const LoadingPlaceholderRating: FC = () => {
	return (
		<div className={styles.placeholder}>
			<Image
				src={loader}
				alt="Preloader"
				draggable={false}
				priority={true}
			/>
		</div>
	)
}

export default LoadingPlaceholderRating
