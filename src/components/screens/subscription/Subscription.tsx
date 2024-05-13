import styles from '@/components/shared/contentWrapper.module.scss'
import { FC } from 'react'
import Catalog from '../templates/catalog-movies/Catalog'
import { ISubscriptionPage } from './subscription.interface'

const Subscription: FC<ISubscriptionPage> = ({ subscriptionMovies }) => {
	return (
		<div className={styles.contentWrapper}>
			<Catalog
				movies={subscriptionMovies || []}
				title="Movies by subscription"
				description="New films and series with a monthly subscription in excellent quality: legal, safe, without advertising"
			/>
		</div>
	)
}

export default Subscription
