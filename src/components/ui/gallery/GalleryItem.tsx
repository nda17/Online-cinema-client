'use client'
import { useAuth } from '@/hooks/useAuth'
import { setVisibleFavorites } from '@/store/favorites-menu/favorites-menu.slice'
import classNames from 'classnames'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import MaterialIcon from '../icons/MaterialIcon'
import styles from './Gallery.module.scss'
import { IGalleryItemProps } from './gallery-item.interface'

const DynamicFavoriteButton = dynamic(
	() => import('@/ui/FavoriteButton/FavoriteButton'),
	{ ssr: false }
)

const GalleryItem: FC<IGalleryItemProps> = ({ item, variant, device }) => {
	const { user } = useAuth()
	const isAuth = user ? true : false

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
			{!isAuth && (
				<div className={styles.authButtonHorizontal}>
					<Link href="/auth">
						<MaterialIcon name="MdLogin" fill="red" />
					</Link>
				</div>
			)}
			{isAuth && (
				<div className={styles.favoriteButtonHorizontal}>
					<DynamicFavoriteButton movieId={item._id} />
				</div>
			)}
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
		<div
			className={classNames(styles.item, {
				[styles.withText]: item.content,
				[styles.vertical]: variant === 'vertical'
			})}
		>
			<>
				<Link href={item.url}>
					<Image
						fill
						sizes="auto"
						alt={item.name}
						src={item.posterPath}
						draggable={false}
						priority
					/>
				</Link>
				{!item.actor && (
					<div className={styles.panel}>
						<MaterialIcon name="MdStarRate" />
						<span>{item.rating}</span>
						{!isAuth && (
							<div className={styles.authButtonVertical}>
								<Link href="/auth">
									<MaterialIcon name="MdLogin" fill="red" />
								</Link>
							</div>
						)}
						{isAuth && (
							<div className={styles.favoriteButtonVertical}>
								<DynamicFavoriteButton movieId={item._id} />
							</div>
						)}
					</div>
				)}
			</>
			{item.content && (
				<div className={styles.content}>
					<div className={styles.title}>{item.content.title}</div>
					{item.content.subTitle && (
						<div className={styles.subTitle}>{item.content.subTitle}</div>
					)}
				</div>
			)}
		</div>
	)
}

export default GalleryItem
