import { useActions } from '@/hooks/useActions'
import MaterialIcon from '@/ui/icons/MaterialIcon'
import { useRouter } from 'next/navigation'
import { FC, MouseEvent } from 'react'
import styles from '../../Menu.module.scss'

const LogoutButton: FC = () => {
	const { logout } = useActions()
	const { replace } = useRouter()

	const logoutHandler = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		logout()
		replace('/auth')
	}

	return (
		<li>
			<div className={styles.wrapper}>
				<span onClick={logoutHandler} className={styles.item}>
					<MaterialIcon name="MdLogout" />
					<span className={styles.link}>Logout</span>
				</span>
			</div>
		</li>
	)
}

export default LogoutButton
