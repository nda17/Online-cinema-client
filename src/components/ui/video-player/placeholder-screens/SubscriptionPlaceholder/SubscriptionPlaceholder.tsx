import { FC } from 'react'
import SubscriptionButton from './SubscriptionButton'
import styles from './SubscriptionPlaceholder.module.scss'

const SubscriptionPlaceholder: FC<{ slug: string }> = ({ slug }) => {
	return (
		<div className={styles.placeholder}>
			<div>
				<div>This is paid content. To view please pay a subscription.</div>
				<SubscriptionButton slug={slug} />
			</div>
		</div>
	)
}

export default SubscriptionPlaceholder
