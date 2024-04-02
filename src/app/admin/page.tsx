import Admin from '@/screens/admin/home/Admin'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
	title: 'Admin panel | Online-Cinema'
}

const AdminPage: NextPage = () => {
	return <Admin />
}

export default AdminPage
