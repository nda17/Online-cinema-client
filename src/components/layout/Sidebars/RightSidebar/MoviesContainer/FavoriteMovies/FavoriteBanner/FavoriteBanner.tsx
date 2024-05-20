import { FC } from 'react'
import styles from './FavoriteBanner.module.scss'
import { IFavoriteBanner } from './favorite-banner.interface'

const FavoriteBanner: FC<IFavoriteBanner> = ({isAuth}) => {
	return !isAuth ? <div className={styles.alert}>Sign in to view your favorites</div> : <div className={styles.alert}>No favorites</div> 
}

export default FavoriteBanner
