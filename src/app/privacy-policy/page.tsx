import PrivacyPolicy from '@/screens/privacy-policy/PrivacyPolicy'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
	title: 'Privacy Policy | Online-Cinema'
}

const PrivacyPolicyPage: NextPage = () => {
	return <PrivacyPolicy />
}

export default PrivacyPolicyPage
