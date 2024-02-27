import MaterialIcon from '@/components/ui/icons/MaterialIcon'
import { genresUrl, moviesUrl } from '@/configs/url.config'
import { IMovie } from '@/shared/types/movie.types'
import { getGenresListEach } from '@/utils/movie/getGenresList'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from './MovieItem.module.scss'

const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.item}>
			<Link href={moviesUrl(movie.slug)}>
				<Image
					src={movie.poster}
					width={65}
					height={97}
					alt={movie.title}
					draggable={false}
				/>
			</Link>

			<div className={styles.info}>
				<div>
					<div className={styles.title}>{movie.title}</div>
					<div className={styles.genre}>
						{movie.genres.map((genre, index) => (
							<Link href={genresUrl(genre.slug)} key={genre._id}>
								{getGenresListEach(index, movie.genres.length, genre.name)}
							</Link>
						))}
					</div>
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
