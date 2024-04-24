import { createSlice } from '@reduxjs/toolkit'
import { IFavoritesMenuInitialState } from './favorites-menu.interface'

const initialState: IFavoritesMenuInitialState = {
	visible: false
}

export const favoritesMenuSlice = createSlice({
	name: 'favorites-menu',
	initialState,
	reducers: {
		setVisibleFavorites: (state, action) => {
			state.visible = action.payload
		}
	}
})

export const { setVisibleFavorites } = favoritesMenuSlice.actions
export const { reducer } = favoritesMenuSlice
