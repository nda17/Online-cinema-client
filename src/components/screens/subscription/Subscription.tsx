import styles from '@/components/shared/contentWrapper.module.scss'
import { FC } from 'react'
import Catalog from '../templates/catalog-movies/Catalog'
import { ISubscriptionPage } from './subscription.interface'

const Subscription: FC<ISubscriptionPage> = ({ subscriptionMovies }) => {
	const title = 'Movies by subscription'
	const description =
		'New films and series with a monthly subscription in excellent quality: legal, safe, without advertising'

	return (
		<div className={styles.contentWrapper}>
			<Catalog
				movies={subscriptionMovies || []}
				title={title}
				description={description}
			/>
		</div>
	)
}

export default Subscription
