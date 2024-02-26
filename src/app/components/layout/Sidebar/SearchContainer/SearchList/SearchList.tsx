import { API_URL, getMoviesUrl } from '@/app/configs/api.config'
import { IMovie } from '@/app/shared/types/movie.types'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './SearchList.module.scss'

const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<div className={styles.wrapperSearchList}>
			{movies.length ? (
				movies.map(movie => (
					<Link to={getMoviesUrl(movie.slug)} key={movie._id}>
						<img
							src={`${API_URL}${movie.poster}`}
							className={styles.searchListImage}
							alt=''
							draggable={false}
						/>
						<span>{movie.title}</span>
					</Link>
				))
			) : (
				<div className="text-white text-center my-4">Movie not found</div>
			)}
		</div>
	)
}

export default SearchList

// const location = useLocation()

// return (
//   <li className={classNames({
//     [styles.active]: location.pathname === item.link
