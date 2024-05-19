import FavoriteButton from '@/components/screens/single-movie/FavoriteButton/FavoriteButton'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from './Gallery.module.scss'
import { IGalleryItemProps } from './gallery-item.interface'

const GalleryItem: FC<IGalleryItemProps> = ({ item, variant, favorite }) => {
	
	return (
		<Link
			href={item.url}
			className={classNames(styles.item, {
				[styles.withText]: item.content,
				[styles.horizontal]: variant === 'horizontal',
				[styles.vertical]: variant === 'vertical'
			})}
		>
			{favorite && <FavoriteButton movieId={item._id} />}
			<Image
				fill
				sizes="auto"
				alt={item.name}
				src={item.posterPath}
				draggable={false}
				priority
			/>
			{item.content && (
				<div className={styles.content}>
					<div className={styles.title}>{item.content.title}</div>
					{item.content.subTitle && (
						<div className={styles.subTitle}>{item.content.subTitle}</div>
					)}
				</div>
			)}
		</Link>
	)
}

export default GalleryItem
