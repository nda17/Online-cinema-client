'use client'
import FavoriteButton from '@/screens/single-movie/FavoriteButton/FavoriteButton'
import { setVisibleFavorites } from '@/store/favorites-menu/favorites-menu.slice'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import styles from './Gallery.module.scss'
import { IGalleryItemProps } from './gallery-item.interface'

const GalleryItem: FC<IGalleryItemProps> = ({
	item,
	variant,
	device,
	favorite
}) => {
	const dispatch = useDispatch()

	const closeFavoritesMenu = () => {
		device === 'mobile' ? dispatch(setVisibleFavorites(false)) : null
	}

	return variant === 'horizontal' ? (
		<div
			className={classNames(styles.item, {
				[styles.withText]: item.content,
				[styles.horizontal]: variant === 'horizontal'
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
					{variant === 'horizontal' && (
						<Link
							onClick={closeFavoritesMenu}
							href={item.url}
							className={classNames(styles.subTitle, styles.watchButton)}
						>
							Watch
						</Link>
					)}
				</div>
			)}
		</div>
	) : (
		<Link
			href={item.url}
			className={classNames(styles.item, {
				[styles.withText]: item.content,
				[styles.vertical]: variant === 'vertical'
			})}
		>
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
