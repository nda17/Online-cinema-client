import { PUBLIC_PAGES } from '@/configs/pages/public.config'
import MaterialIcon from '@/ui/icons/MaterialIcon'
import dynamic from 'next/dynamic'
import { FC } from 'react'
import styles from './Content.module.scss'
import ContentList from './ContentList/ContentList'
import { IContent } from './content.interface'

const DynamicFavoriteButton = dynamic(
	() => import('../FavoriteButton/FavoriteButton'),
	{ ssr: false }
)

const Content: FC<IContent> = ({ movie }) => {
	return (
		<div className={styles.content}>
			<h1>{movie.title}</h1>
			<div className={styles.rating}>
				<MaterialIcon name="MdStarRate" />
				<span>{movie.rating.toFixed(1)}</span>
			</div>
			<div className={styles.details}>
				<span>{movie.parameters.year} · </span>
				<span>{movie.parameters.country} · </span>
				<span>{movie.parameters.duration} min.</span>
			</div>
			<ContentList
				name="Genres"
				links={movie.genres.map((genre) => ({
					link: `/${PUBLIC_PAGES.GENRES}/${genre.slug}`,
					title: genre.name,
					_id: genre._id
				}))}
			/>
			<ContentList
				name="Actors"
				links={movie.actors.map((actor) => ({
					link: `/${PUBLIC_PAGES.ACTORS}/${actor.slug}`,
					title: actor.name,
					_id: actor._id
				}))}
			/>
			<DynamicFavoriteButton movieId={movie._id} />
		</div>
	)
}

export default Content
