import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import Heading from '@/ui/heading/Heading'
import { FC } from 'react'
import Statistics from './Statistics/Statistics'
import adminWrapper from '@/components/shared/admin/adminWrapper.module.scss'


const Admin: FC = () => {
	return (
		<>
			<AdminNavigation />
			<div className={adminWrapper.wrapper}>
				<Heading title="Some statistics" />
				<Statistics />
			</div>
		</>
	)
}

export default Admin
