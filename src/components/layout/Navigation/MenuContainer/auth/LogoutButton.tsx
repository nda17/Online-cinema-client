import { useActions } from '@/hooks/useActions'
import MaterialIcon from '@/ui/icons/MaterialIcon'
import { FC, MouseEvent } from 'react'

const LogoutButton: FC = () => {
	const { logout } = useActions()

	const logoutHandler = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		logout()
	}

	return (
		<li suppressHydrationWarning>
			<span onClick={logoutHandler}>
				<MaterialIcon name="MdLogout" />
				<span>Logout</span>
			</span>
		</li>
	)
}

export default LogoutButton
