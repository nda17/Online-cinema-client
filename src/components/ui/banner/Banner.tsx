import Image from 'next/image'
import { FC } from 'react'
import styles from './Banner.module.scss'
import { IBanner } from './banner.interface'

const Banner: FC<IBanner> = ({ imagePath, Detail }) => {
	return (
		<div className={styles.banner}>
			<Image
				alt="Banner"
				src={imagePath}
				draggable={false}
				fill
				className="image-like-bg object-top"
				unoptimized
				priority
			/>
			{Detail && <Detail />}
		</div>
	)
}

export default Banner
