import MainProvider from '@/app/providers/MainProvider'
import { FC } from 'react'
import { mainMenu } from './DataMenu/mainMenu.data'
import { userMenu } from './DataMenu/userMenu.data'
import Menu from './Menu'
import GenreMenu from './genres/GenreMenu'

const MenuContainer: FC  = () => {
  return (
    <>
          <MainProvider>
            <Menu menu={mainMenu} />
            <GenreMenu />
            <Menu menu={userMenu} />
          </MainProvider>
    </>
  )
}

export default MenuContainer