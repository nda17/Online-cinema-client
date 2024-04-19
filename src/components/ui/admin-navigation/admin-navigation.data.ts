import { ADMIN_URL } from '@/configs/url.config'
import { INavItem } from './admin-navigation.interface'

export const navItems: INavItem[] = [
	{
		title: 'Statistics',
		link: ADMIN_URL.homeUrl(),
	},
	{
		title: 'Users',
		link: ADMIN_URL.rootUrl('users'),
		option: '/admin/user'
	},
	{
		title: 'Movies',
		link: ADMIN_URL.rootUrl('movies'),
		option: '/admin/movie'
	},
	{
		title: 'Actors',
		link: ADMIN_URL.rootUrl('actors'),
		option: '/admin/actor'
	},
	{
		title: 'Genres',
		link: ADMIN_URL.rootUrl('genres'),
		option: '/admin/genre'
	}
]
