import { IAuthResponse, ITokens } from '@/store/user/user.interface'
import Cookies from 'js-cookie'

//Helper function for adding to cookies
export const saveTokenStorage = (data: ITokens) => {
	Cookies.set('accessToken', data.accessToken)
	Cookies.set('refreshToken', data.refreshToken)
}

//Helper function for saving to local storage
export const saveToStorage = (data: IAuthResponse) => {
	saveTokenStorage(data)
	localStorage.setItem('user', JSON.stringify(data.user))
}

//Helper function for removing data from cookies
export const removeTokensStorage = () => {
  Cookies.remove('accessToken')
	Cookies.remove('refreshToken')
}
