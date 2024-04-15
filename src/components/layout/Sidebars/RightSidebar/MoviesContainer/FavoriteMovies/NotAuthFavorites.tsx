import { FC } from 'react'
import styles from './NotAuthFavorites.module.scss'

const NotAuthFavorites: FC = () => {
	return (
		<div className={styles.alert}>Sign in to view your favorites.</div>
	)
}

export default NotAuthFavorites
