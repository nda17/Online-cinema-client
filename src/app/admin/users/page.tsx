import UsersList from '@/screens/admin/users/UserList'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
	title: 'Admin panel | Online-Cinema'
}

const UsersListPage: NextPage = () => {
	return <UsersList />
}

export default UsersListPage
