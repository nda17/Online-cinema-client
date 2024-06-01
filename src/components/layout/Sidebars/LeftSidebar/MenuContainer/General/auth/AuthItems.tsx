import { ADMIN_URL } from '@/configs/url.config'
import { useAuth } from '@/hooks/useAuth'
import { FC } from 'react'
import styles from '../../MenuContainer.module.scss'
import MenuItem from '../MenuItem/MenuItem'
import LogoutButton from './LogoutButton'

const AuthItems: FC = () => {
	const { user } = useAuth()

	return (
		<>
			<h1 className={styles.heading}>General</h1>
			{user ? (
				<>
					<MenuItem
						item={{
							icon: 'MdSettings',
							link: '/profile',
							title: 'Profile'
						}}
					/>
					<LogoutButton />
				</>
			) : (
				<MenuItem
					item={{
						icon: 'MdLogin',
						link: '/auth',
						title: 'Login'
					}}
				/>
			)}

			{user?.isAdmin && (
				<MenuItem
					item={{
						icon: 'MdOutlineLock',
						link: ADMIN_URL.homeUrl(),
						title: 'Admin panel'
					}}
				/>
			)}
		</>
	)
}

export default AuthItems
