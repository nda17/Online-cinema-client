import { FC } from 'react'
import styles from './Menu.module.scss'
import MenuItem from './MenuItem'
import AuthItems from './auth/AuthItems'
import { IMenu } from './menu.interface'

const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
	return (
		<div className={styles.menu}>
			<h1 className={styles.heading}>{title}</h1>
			<ul>
				{items.map((item) => (
					<MenuItem item={item} key={item.link} />
				))}
				{title === 'General' ? <AuthItems /> : null}
			</ul>
		</div>
	)
}

export default Menu
