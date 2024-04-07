import { FC } from 'react'
import styles from './FavoriteList.module.scss'

const FavoriteList: FC = () => {
	return (
		<div className={styles.list}>
			<div className={styles.heading}>Favorite movies</div>
		</div>
	)
}

export default FavoriteList
