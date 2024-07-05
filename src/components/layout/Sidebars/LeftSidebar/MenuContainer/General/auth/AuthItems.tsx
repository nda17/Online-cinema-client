import { ADMIN_PAGES } from '@/configs/pages/admin.config'
import { useAuth } from '@/hooks/useAuth'
import { FC } from 'react'
import MenuItem from '../MenuItem/MenuItem'
import LogoutButton from './LogoutButton'

const AuthItems: FC = () => {
	const { user } = useAuth()

	return (
		<>
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
						link: ADMIN_PAGES.HOME,
						title: 'Admin panel'
					}}
				/>
			)}
		</>
	)
}

export default AuthItems
