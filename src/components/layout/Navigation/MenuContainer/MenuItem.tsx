import MaterialIcon from '@/ui/icons/MaterialIcon'
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import styles from './Menu.module.scss'
import { IMenuItem } from './menuItem.interface'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const pathname = usePathname()

	return (
		<li
			className={classNames({
				[styles.active]: pathname === item.link
			})}
		>
			<span>
				<MaterialIcon name={item.icon} />
				<span>
					<Link href={item.link}>{item.title}</Link>
				</span>
			</span>
		</li>
	)
}

export default MenuItem
