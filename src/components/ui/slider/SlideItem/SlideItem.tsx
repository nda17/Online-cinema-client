import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import MaterialIcon from '../../icons/MaterialIcon'
import styles from '../Slider.module.scss'
import { ISlideItem } from './slide-item.interface'

const SlideItem: FC<ISlideItem> = ({ slide, buttonTitle = 'Watch' }) => {
	const { push } = useRouter()

	if (!slide || !buttonTitle) {
		return null
	}

	return (
		<div className={styles.slide}>
			{
				<>
					<Image
						fill
						className={styles.image}
						src={slide.bigPoster}
						alt={slide.title}
						draggable={false}
						unoptimized
						priority
					/>
					<div className={styles.rating}>
						<MaterialIcon name="MdStarRate" />
						<span>{slide.rating}</span>
					</div>
				</>
			}

			<div className={styles.content}>
				<div className={styles.heading}>{slide.title}</div>
				<div className={styles.subHeading}>{slide.subTitle}</div>
				<button className={styles.button} onClick={() => push(slide.url)}>
					{buttonTitle}
				</button>
			</div>
		</div>
	)
}

export default SlideItem
