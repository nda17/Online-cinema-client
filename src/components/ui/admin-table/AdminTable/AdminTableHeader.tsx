import classNames from 'classnames'
import { FC } from 'react'
import styles from './AdminTable.module.scss'

const AdminTableHeader: FC<{ headerItems: string[] }> = ({
	headerItems
}) => {
	return (
		<div className={classNames(styles.item, styles.header)}>
			{headerItems.map((value) => (
				<div key={value}>{value}</div>
			))}
			<div>Actions:</div>
		</div>
	)
}

export default AdminTableHeader
