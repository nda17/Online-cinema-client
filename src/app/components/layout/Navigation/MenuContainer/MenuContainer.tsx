import { FC } from 'react'
import { mainMenu } from './DataMenu/mainMenu.data'
import { userMenu } from './DataMenu/userMenu.data'
import Menu from './Menu'
import GenreMenu from './genres/GenreMenu'

const MenuContainer: FC = () => {
	return (
		<>
			<Menu menu={mainMenu} />
			<GenreMenu />
			<Menu menu={userMenu} />
		</>
	)
}

export default MenuContainer
