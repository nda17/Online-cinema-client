import ActorsList from '@/screens/admin/actors/ActorsList'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
	title: 'Admin panel | Online-Cinema'
}

const ActorsListPage: NextPage = () => {
	return <ActorsList />
}

export default ActorsListPage
