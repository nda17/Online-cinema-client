import Logo from '@/ui/logo/Logo'
import { FC } from 'react'
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
