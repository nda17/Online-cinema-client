import { IMenu } from '../menu.interface'

export const mainMenu: IMenu = {
	items: [
		{
			icon: 'MdHome',
			link: '/',
			title: 'Home'
		},
		{
			icon: 'MdMovieCreation',
			link: '/genre-catalog',
			title: 'Genre catalog'
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
			title: 'Best of subscription'
		}
	]
}
