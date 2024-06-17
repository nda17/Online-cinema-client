import { useActions } from '@/hooks/useActions'
import { setVisibleHamburger } from '@/store/hamburger/hamburger.slice'
import MaterialIcon from '@/ui/icons/MaterialIcon'
import { useRouter } from 'next/navigation'
import { FC, MouseEvent } from 'react'
import { useDispatch } from 'react-redux'
import styles from '../../Menu.module.scss'

const LogoutButton: FC = () => {
	const { logout } = useActions()

	const dispatch = useDispatch()
	const closeMenu = () => {
		dispatch(setVisibleHamburger(false))
	}

	const { replace } = useRouter()

	const logoutHandler = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		logout()
		closeMenu()
		replace('/auth')
	}

	return (
		<li>
			<div className={styles.wrapper}>
				<span onClick={logoutHandler} className={styles.item}>
					<span className={styles.link}>
						<MaterialIcon name="MdLogout" />
						Logout
					</span>
				</span>
			</div>
		</li>
	)
}

export default LogoutButton
