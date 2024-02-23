import { FC } from 'react'
import { mainMenu } from './DataMenu/mainMenu.data'
import { userMenu } from './DataMenu/userMenu.data'
import Menu from './Menu'

const MenuContainer: FC  = () => {
  return (
    <>
      <Menu menu={mainMenu} />
      <div>Меню с жанрами</div>
      <Menu menu={userMenu} />
    </>
  )
}

export default MenuContainer