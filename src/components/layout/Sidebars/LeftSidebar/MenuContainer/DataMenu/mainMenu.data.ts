import { IMenu } from '../menu.interface'

export const mainMenu: IMenu = {
	title: 'Menu',
	items: [
		{
			icon: 'MdHome',
			link: '/',
			title: 'Home'
		},
		{
			icon: 'MdExplore',
			link: '/discovery',
			title: 'Discovery'
		},
		{
			icon: 'MdRefresh',
			link: '/fresh',
			title: 'Fresh movies'
		},
		{
			icon: 'MdLocalFireDepartment',
			link: '/trending',
			title: 'Trending now'
		},
		{
			icon: 'MdRequestQuote',
			link: '/subscription',
			title: 'By subscription'
		}
	]
}
