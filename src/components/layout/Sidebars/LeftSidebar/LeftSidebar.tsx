import { FC } from 'react'
import Logo from './Logo'
import MenuContainer from './MenuContainer/MenuContainer'

const LeftSidebar: FC = () => {
	return (
		<div>
			<Logo />
			<MenuContainer />
		</div>
	)
}

export default LeftSidebar
