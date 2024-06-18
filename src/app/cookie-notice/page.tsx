import CookieNotice from '@/screens/cookie-notice/CookieNotice'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
	title: 'Cookie Notice | Online-Cinema'
}

const CookieNoticePage: NextPage = () => {
	return <CookieNotice />
}

export default CookieNoticePage
