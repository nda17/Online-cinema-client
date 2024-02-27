import MaterialIcon from '@ui/MaterialIcon'
import classNames from 'classnames'
import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Menu.module.scss'
import { IMenuItem } from './menuItem.interface'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const location = useLocation()

	return (
		<li
			className={classNames({
				[styles.active]: location.pathname === item.link
			})}
		>
			<div>
				<MaterialIcon name={item.icon} />
				<span>
					<Link to={item.link}>{item.title}</Link>
				</span>
			</div>
		</li>
	)
}

export default MenuItem
