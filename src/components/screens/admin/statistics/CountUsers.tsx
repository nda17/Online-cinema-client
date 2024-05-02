'use client'
import { AdminService } from '@/services/admin/admin.service'
import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'
import SubHeading from '@/ui/subheading/SubHeading'
import classNames from 'classnames'
import { FC } from 'react'
import { useQuery } from 'react-query'
import styles from '../Admin.module.scss'

const CountUsers: FC = () => {
	const { isLoading, data: response } = useQuery('Count users', () =>
		AdminService.getCountUsers()
	)
	return (
		<div className={classNames(styles.block, styles.users)}>
			<SubHeading title="Registered users" />
			<div>
				{isLoading ? (
					<SkeletonLoader className={styles.preloader} />
				) : (
					<div className={styles.number}>{response?.data}</div>
				)}
				<div className={styles.description}>users</div>
			</div>
		</div>
	)
}

export default CountUsers
