import logoImage from '@/assets/images/logo.svg'
import { setVisibleFavorites } from '@/store/favorites-menu/favorites-menu.slice'
import { setVisibleHamburger } from '@/store/hamburger/hamburger.slice'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import styles from './Logo.module.scss'

const Logo: FC = () => {
	const dispatch = useDispatch()

	const closeMenu = () => {
		dispatch(setVisibleHamburger(false))
		dispatch(setVisibleFavorites(false))
	}

	return (
		<Link href="/" className={styles.logo} onClick={closeMenu}>
			<Image
				src={logoImage}
				alt="Online cinema app"
				draggable={false}
				priority={true}
			/>
			<div className={styles.text}>
				<p>
					O<span>nline</span>
				</p>
				<p>
					C<span>inema</span>
				</p>
			</div>
		</Link>
	)
}

export default Logo
