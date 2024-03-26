import { PUBLIC_URL } from '@/configs/url.config'
import { IMovie } from '@/shared/types/movie.types'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from './SearchList.module.scss'

const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<div className={styles.searchListWrapper}>
			{movies.length ? (
				movies.map((movie) => (
					<Link href={PUBLIC_URL.moviesUrl(movie.slug)} key={movie._id}>
						<Image
							src={movie.poster || ''}
							width={50}
							height={50}
							priority={true}
							alt={movie.title}
							draggable={false}
						/>
						<span>{movie.title}</span>
					</Link>
				))
			) : (
				<div className={styles.informer}>Movie not found</div>
			)}
		</div>
	)
}

export default SearchList
