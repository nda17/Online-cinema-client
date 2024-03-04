import MaterialIcon from '@/components/ui/icons/MaterialIcon'
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
			<div>
				<MaterialIcon name={item.icon} />
				<span>
					<Link href={item.link}>{item.title}</Link>
				</span>
			</div>
		</li>
	)
}

export default MenuItem
