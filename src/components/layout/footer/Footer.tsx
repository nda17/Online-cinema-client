import logoImage from '@/assets/images/logo.svg'
import FontAwesomeIcon from '@/ui/icons/FontAwesomeIcon'
import MaterialIcon from '@/ui/icons/MaterialIcon'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from './Footer.module.scss'

const Footer: FC = () => {
	const currentYear = new Date().getFullYear()

	return (
		<div className={styles.footer}>
			<div className={styles.social}>
				<Link href="#0" className={styles.socialIcon}>
					<FontAwesomeIcon name="FaTelegram" />
				</Link>
				<Link href="#0" className={styles.socialIcon}>
					<FontAwesomeIcon name="FaTwitter" />
				</Link>
				<Link href="#0" className={styles.socialIcon}>
					<FontAwesomeIcon name="FaYoutube" />
				</Link>
				<Link href="#0" className={styles.socialIcon}>
					<MaterialIcon name="MdOutlineMailOutline" />
				</Link>
			</div>
			<div className={styles.info}>
				<p className={styles.date}>© 2024 - {currentYear}</p>
				<p className={styles.allRightsReserved}>All rights reserved</p>
			</div>
			<div className={styles.content}>
				<Link href="/" className={styles.logo}>
					<Image
						src={logoImage}
						alt="Online cinema app"
						draggable={false}
						priority={true}
					/>
				</Link>
				<div className={styles.linkBlock}>
					<Link href="/privacy-policy">Privacy policy</Link>
					<Link href="/cookie-notice">Cookie notice</Link>
				</div>
			</div>
		</div>
	)
}

export default Footer
