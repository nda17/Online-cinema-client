import { ADMIN_URL } from '@/configs/url.config'
import { INavItem } from './admin-navigation.interface'

export const navItems: INavItem[] = [
	{
		title: 'Statistics',
		link: ADMIN_URL.homeUrl()
	},
	{
		title: 'Users',
		link: ADMIN_URL.rootUrl('users')
	},
	{
		title: 'Movies',
		link: ADMIN_URL.rootUrl('movies')
	},
	{
		title: 'Actors',
		link: ADMIN_URL.rootUrl('actors')
	},
	{
		title: 'Genres',
		link: ADMIN_URL.rootUrl('genres')
	}
]
