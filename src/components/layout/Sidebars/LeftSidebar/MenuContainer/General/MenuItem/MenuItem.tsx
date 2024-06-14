import MaterialIcon from '@/ui/icons/MaterialIcon'
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import styles from '../../Menu.module.scss'
import { IMenuItem } from './menu-item.interface'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const pathname = usePathname()

	return (
		<li
			className={classNames({
				[styles.active]:
					pathname === item.link ||
					pathname === `${item.link}/restore-password` ||
					pathname === `${item.link}/users` ||
					pathname === `${item.link}/movies` ||
					pathname === `${item.link}/actors` ||
					pathname === `${item.link}/genres` ||
					pathname.includes(`${item.link}/user/edit`) ||
					pathname.includes(`${item.link}/movie/edit`) ||
					pathname.includes(`${item.link}/actor/edit`) ||
					pathname.includes(`${item.link}/genre/edit`)
			})}
		>
			<div className={styles.wrapper}>
				<span className={styles.item}>
					<Link href={item.link} className={styles.link}>
						<MaterialIcon name={item.icon} />
						{item.title}
					</Link>
				</span>
				<span className={styles.border}>|</span>
			</div>
		</li>
	)
}

export default MenuItem
