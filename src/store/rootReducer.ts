import { reducer as toastrReducer } from 'react-redux-toastr'
import { reducer as popupReducer } from './popup/popup.slice'
import { reducer as userReducer } from './user/user.slice'

export const reducers = {
	user: userReducer,
	popup: popupReducer,
	toastr: toastrReducer
}
