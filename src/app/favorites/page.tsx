import Favorites from '@/screens/favorites/Favorites'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
	title: 'Favorites | Online-Cinema'
}

const FavoritePage: NextPage = () => {
	return <Favorites />
}

export default FavoritePage

