import { createSlice } from '@reduxjs/toolkit'
import { IPopupInitialState } from './popup.interface'

const initialState: IPopupInitialState = {
	visible: false,
	text: '',
	itemId: ''
}

export const popupSlice = createSlice({
	name: 'popup',
	initialState,
	reducers: {
		setVisible: (state, action) => {
			state.visible = action.payload
		},

		setText: (state, action) => {
			state.text = action.payload
		},

		setItemId: (state, action) => {
			state.itemId = action.payload
		}
	}
})

export const { setVisible } = popupSlice.actions
export const { setText } = popupSlice.actions
export const { setItemId } = popupSlice.actions
export const { reducer } = popupSlice
