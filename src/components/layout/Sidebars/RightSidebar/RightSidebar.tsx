'use client'
import { FC } from 'react'
import MoviesContainer from './MoviesContainer/MoviesContainer'
import SearchContainer from './SearchContainer/SearchContainer'

const RightSidebar: FC = () => {
	return (
		<div>
			<SearchContainer />
			<MoviesContainer />
		</div>
	)
}

export default RightSidebar
