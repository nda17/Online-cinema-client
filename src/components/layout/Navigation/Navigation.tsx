import { FC } from 'react'
import Logo from './Logo'
import MenuContainer from './MenuContainer/MenuContainer'

const Navigation: FC = () => {
	return (
		<aside>
			<Logo />
			<MenuContainer />
		</aside>
	)
}

export default Navigation
