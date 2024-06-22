import SpinnerLoader from '@/ui/spinner-loader/SpinnerLoader'
import { Metadata, NextPage } from 'next'
import dynamic from 'next/dynamic'

const DynamicFavorites = dynamic(
	() => import('@/screens/favorites/Favorites'),
	{
		loading: () => <SpinnerLoader />,
		ssr: false
	}
)

export const metadata: Metadata = {
	title: 'Favorites | Online-Cinema'
}

const FavoritePage: NextPage = () => {
	return <DynamicFavorites />
}

export default FavoritePage
