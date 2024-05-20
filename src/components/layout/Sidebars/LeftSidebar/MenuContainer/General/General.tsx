import { FC } from 'react'
import styles from '../Menu.module.scss'
import AuthItems from './auth/AuthItems'

const General: FC = () => {
  
  return (
      <div className={styles.menu}>
        <ul>
          <AuthItems />
        </ul>
      </div>
  )
}

export default General