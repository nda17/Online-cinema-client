import { getAdminHomeUrl, getAdminUrl } from '@/configs/url.config'
import { INavItem } from './admin-navigation.interface'

export const navItems: INavItem[] = [
	{
		title: 'Statistics',
		link: getAdminHomeUrl()
	},
	{
		title: 'Users',
		link: getAdminUrl('users'),
		option: '/admin/user'
	},
	{
		title: 'Movies',
		link: getAdminUrl('movies'),
		option: '/admin/movie'
	},
	{
		title: 'Actors',
		link: getAdminUrl('actors'),
		option: '/admin/actor'
	},
	{
		title: 'Genres',
		link: getAdminUrl('genres'),
		option: '/admin/genre'
	}
]
