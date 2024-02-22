import Layout from '@components/layout/Layout'
import Heading from '@ui/heading/Heading'
import { FC } from 'react'
import { IHome } from './home.interface'

const Home: FC<IHome> = () => {
  return (
    <Layout>
		<Heading title="Watch movies online" />
    </Layout>
  )
}

export default Home