import Profile from '@/screens/profile/Profile'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
	title: 'Profile | Online-Cinema'
}

const ProfilePage: NextPage = () => {
	return <Profile />
}

export default ProfilePage
