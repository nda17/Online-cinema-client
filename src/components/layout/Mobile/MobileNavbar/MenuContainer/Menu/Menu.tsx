import { FC } from 'react'
import styles from '../Menu.module.scss'
import MenuItem from './MenuItem/MenuItem'
import { IMenuItem } from './MenuItem/menu-item.interface'
import { mainMenu } from './data/main-menu.data'
import { IMenu } from './menu.interface'

const Menu: FC<{ mainMenu: IMenu }> = () => {

	return (
        <div className={styles.menu}>
        <ul>
            {mainMenu.items?.map((item: IMenuItem) => (
                <MenuItem item={item} key={item.link} />
            ))}
        </ul>
    </div>
	)
}

export default Menu
