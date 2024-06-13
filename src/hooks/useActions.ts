import { allActions } from '@/store/rootActions'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

export const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(
		() => bindActionCreators(allActions, dispatch),
		[dispatch]
	)
}
