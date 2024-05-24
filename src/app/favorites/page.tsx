import { Metadata, NextPage } from 'next'
import dynamic from 'next/dynamic'

const DynamicFavorites = dynamic(
	() => import('@/screens/favorites/Favorites'),
	{
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
