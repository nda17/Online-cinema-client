import Link from 'next/link'
import { FC } from 'react'
import styles from './SubscriptionPlaceholder.module.scss'

const SubscriptionButton: FC<{ slug: string }> = ({ slug }) => {
	return (
		<Link href={'#0'} className={styles.button}>
			Buy a subscription
		</Link>
	)
}

export default SubscriptionButton
