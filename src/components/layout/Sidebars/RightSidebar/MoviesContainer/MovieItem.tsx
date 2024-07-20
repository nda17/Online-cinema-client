import { getGenresUrl, getMoviesUrl } from '@/configs/api.config'
import { IMovie } from '@/shared/types/movie.types'
import MaterialIcon from '@/ui/icons/MaterialIcon'
import { getGenresListEach } from '@/utils/movie/getGenresList'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'
import styles from './MovieItem.module.scss'

const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
	const [activeItem, setActiveItem] = useState(null)

	const handleClick = (id: any) => {
		setActiveItem(id)
	}

	return (
		<div className={styles.movie}>
			<Link href={getMoviesUrl(`/${movie.slug}`)}>
				<Image
					className={styles.image}
					src={movie.poster}
					width={65}
					height={97}
					priority={true}
					alt={movie.title}
					draggable={false}
				/>
			</Link>

			<div className={styles.info}>
				<span
					onClick={() => handleClick(movie._id)}
					className={classNames(styles.title, {
						[styles.active]: activeItem === movie._id
					})}
				>
					{movie.title}
				</span>
				<div className={styles.genre}>
					{movie.genres.map((genre, index) => (
						<Link href={getGenresUrl(`/${genre.slug}`)} key={genre._id}>
							{getGenresListEach(index, movie.genres.length, genre.name)}
						</Link>
					))}
				</div>

				<div className={styles.rating}>
					<MaterialIcon name="MdStarRate" />
					<span>{movie.rating.toFixed(1)}</span>
				</div>
			</div>
		</div>
	)
}

export default MovieItem
