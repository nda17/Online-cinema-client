import { useActions } from '@/hooks/useActions'
import MaterialIcon from '@/ui/icons/MaterialIcon'
import { FC, MouseEvent } from 'react'
import styles from '../Menu.module.scss'

const LogoutButton: FC = () => {
	const { logout } = useActions()

	const logoutHandler = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		logout()
	}

	return (
		<li>
			<span onClick={logoutHandler} className={styles.item}>
				<MaterialIcon name="MdLogout" />
				<span className={styles.link}>Logout</span>
			</span>
		</li>
	)
}

export default LogoutButton
