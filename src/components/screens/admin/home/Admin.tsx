import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import Heading from '@/ui/heading/Heading'
import { FC } from 'react'
import Statistics from './Statistics/Statistics'

const Admin: FC = () => {
	return (
		<>
			<AdminNavigation />
			<Heading title="Some statistics" />
			<Statistics />
		</>
	)
}

export default Admin
