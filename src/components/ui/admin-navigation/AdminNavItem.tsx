'use client'
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import styles from './AdminNavigation.module.scss'
import { INavItem } from './admin-navigation.interface'

const AdminNavItem: FC<{ item: INavItem }> = ({
	item: { link, title, option }
}) => {
	const pathname = usePathname()

	return (
		<li>
			<Link href={link}>
				<span
					className={classNames({
						[styles.active]:
							pathname === link || pathname.includes(String(option))
					})}
				>
					{title}
				</span>
			</Link>
		</li>
	)
}

export default AdminNavItem
