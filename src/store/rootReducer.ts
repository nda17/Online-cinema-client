import { reducer as toastrReducer } from 'react-redux-toastr'
import { reducer as extraMenuReducer } from './extra-menu/extra-menu.slice'
import { reducer as hamburgerReducer } from './hamburger/hamburger.slice'
import { reducer as popupReducer } from './popup/popup.slice'
import { reducer as userReducer } from './user/user.slice'

export const reducers = {
	hamburger: hamburgerReducer,
	extraMenu: extraMenuReducer,
	user: userReducer,
	popup: popupReducer,
	toastr: toastrReducer
}
