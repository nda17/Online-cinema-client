import GenresList from '@/components/screens/admin/genres/GenresList'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
	title: 'Admin panel | Online-Cinema'
}

const GenresListPage: NextPage = () => {
	return <GenresList />
}

export default GenresListPage
