import { ADMIN_PAGES } from '@/configs/pages/admin.config'
import { INavItem } from './admin-navigation.interface'

export const navItems: INavItem[] = [
	{
		title: 'Statistics',
		link: ADMIN_PAGES.HOME
	},
	{
		title: 'Users',
		link: `${ADMIN_PAGES.HOME}/users`,
		option: '/admin/user'
	},
	{
		title: 'Movies',
		link: `${ADMIN_PAGES.HOME}/movies`,
		option: '/admin/movie'
	},
	{
		title: 'Actors',
		link: `${ADMIN_PAGES.HOME}'actors`,
		option: '/admin/actor'
	},
	{
		title: 'Genres',
		link: `${ADMIN_PAGES.HOME}genres`,
		option: '/admin/genre'
	}
]
