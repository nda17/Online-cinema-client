import CookieConsentPopup from '@/ui/cookie-consent-popup/CookieConsentPopup'
import Cookies from 'js-cookie'
import { usePathname } from 'next/navigation'
import { FC, useEffect, useState } from 'react'

const CookieConsentProvider: FC = () => {
	const [statusConfirm, setConfirm] = useState(true)
	const pathname = usePathname()

	const executeDataCookies = () => {
		Cookies.get('cookieConsent') ? setConfirm(true) : setConfirm(false)
	}

	useEffect(() => {
		executeDataCookies()
	}, [statusConfirm, pathname]) // eslint-disable-line react-hooks/exhaustive-deps

	return <CookieConsentPopup status={!statusConfirm ? 'show' : 'hide'} />
}

export default CookieConsentProvider
