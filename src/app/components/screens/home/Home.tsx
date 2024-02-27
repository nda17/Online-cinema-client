import Heading from '@/ui/heading/Heading'
import { FC } from 'react'
import { IHome } from './home.interface'

const Home: FC<IHome> = () => {
	return (
		<Heading
			title="Watch movies online"
			// className="text-gray-500 mb-8 text-xl" // FIXME: TODO:
		/>
	)
}

export default Home
