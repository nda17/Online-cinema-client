import styles from '@/components/shared/contentWrapper.module.scss'
import { FC } from 'react'
import CatalogMovies from '../templates/catalog-movies/CatalogMovies'
import { ISubscriptionPage } from './subscription.interface'

const Subscription: FC<ISubscriptionPage> = ({ subscriptionMovies }) => {
	const title = 'Movies by subscription'
	const description =
		'New films and series with a monthly subscription in excellent quality: legal, safe, without advertising'

	return (
		<div className={styles.contentWrapper}>
			<CatalogMovies
				movies={subscriptionMovies || []}
				title={title}
				description={description}
			/>
		</div>
	)
}

export default Subscription
