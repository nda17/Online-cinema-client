'use client'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { FC, MouseEvent, useEffect, useState } from 'react'
import Button from '../form-elements/Button'
import MaterialIcon from '../icons/MaterialIcon'
import SubHeading from '../subheading/SubHeading'
import styles from './CookieConsentPopup.module.scss'
import { ICookieConsent } from './cookie-consent.interface'

const CookieConsentPopup: FC<ICookieConsent> = (status) => {
	const [showPopup, setShowPopup] = useState(`${status}`)

	const accept = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		Cookies.set('cookieConsent', 'status:confirm', { expires: 365 })
		setShowPopup('hide')
	}

	useEffect(() => {
		setShowPopup(`${status.status}`)
	}, [status])

	return showPopup === 'show' ? (
		<div className={styles.wrapperCookieConsent}>
			<div className={styles.heading}>
				<div className={styles.imageCookie}>
					<MaterialIcon name="MdCookie" fill="#dd850b" />
				</div>
				<SubHeading title="Cookie consent" />
			</div>
			<p className={styles.textConsent}>
				We use cookies to obtain statistics and personalize services and
				offers,&nbsp;
				<Link href="/cookie-notice">
					<span className={styles.moreLink}>read more.</span>
				</Link>
				<br />
				By continuing to use the site without changing your settings, you
				agree to the use of cookies.
			</p>
			<div className={styles.buttons}>
				<Button type="button" onClick={(e: any) => accept(e)}>
					Accept
				</Button>
				<Button type="button" onClick={() => setShowPopup('hide')}>
					Cancel
				</Button>
			</div>
		</div>
	) : null
}

export default CookieConsentPopup
