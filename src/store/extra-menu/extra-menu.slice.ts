import { createSlice } from '@reduxjs/toolkit'
import { IExtraMenuInitialState } from './extra-menu.interface'

const initialState: IExtraMenuInitialState = {
	visible: false
}

export const extraMenuSlice = createSlice({
	name: 'extra-menu',
	initialState,
	reducers: {
		setVisibleExtra: (state, action) => {
			state.visible = action.payload
		}
	}
})

export const { setVisibleExtra } = extraMenuSlice.actions
export const { reducer } = extraMenuSlice
