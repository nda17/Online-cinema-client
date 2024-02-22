import logoImage from '@/app/assets/images/logo.svg'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './Logo.module.scss'

const Logo: FC = () => {
  return (
// FIXME: a заменить на Link?
            <a href='/' className={styles.logoWrapper}>
              <img
                className={styles.logo}
                src={logoImage}
                alt='Online cinema'
                draggable={false}
              />
              <p>Online-Cinema</p>
            </a>
  )
}

export default Logo