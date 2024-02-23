import MaterialIcon from '@ui/MaterialIcon'
import { FC } from 'react'
import styles from './Menu.module.scss'
import { IMenuItem } from './menuItem.interface'


const MenuItem: FC <{item: IMenuItem}> = ({item}) => {
  return (
    <li className={styles.active}> {/*FIXME: Настроить стили на активную ссылку*/}
      <a href={item.link}> {/*FIXME: <Link> вместо <a>*/}
        <MaterialIcon name={item.icon}/>
        <span>{item.title}</span>
      </a>
    </li>
  )
}

export default MenuItem