import { NextRequest, NextResponse } from 'next/server'
import { API_URL, PUBLIC_PATH } from './configs/api.config'
import { EnumTokens } from './configs/enum.tokens'
import { ADMIN_URL, PUBLIC_URL, USER_URL } from './configs/url.config'

export async function middleware(request: NextRequest) {
	const accessToken = request.cookies.get(EnumTokens.ACCESS_TOKEN)?.value
	const refreshToken = request.cookies.get(EnumTokens.REFRESH_TOKEN)?.value

	//При переходе на страницу профиля, проверка наличия accessToken и refreshToken, если отсутствует, то редирект на страницу авторизации:
	if (
		(refreshToken === undefined &&
			request.nextUrl.pathname === USER_URL.profileUrl()) ||
		(accessToken === undefined &&
			request.nextUrl.pathname === USER_URL.profileUrl())
	) {
		return NextResponse.redirect(
			new URL(PUBLIC_URL.authUrl(), request.url)
		)
	}

	//При переходе на страницу админ панели, проверка ролей, если не админ, то редирект на 404:
	if (request.nextUrl.pathname === ADMIN_URL.homeUrl()) {
		return await fetch(
			`${API_URL}${PUBLIC_PATH.usersUrl(``)}${USER_URL.profileUrl()}`,
			{
				method: 'GET',
				headers: { Authorization: `Bearer ${accessToken}` }
			}
		)
			.then((response) => response.json())
			.then((data) => (!data.isAdmin ? NextResponse.error() : null))
	}

	return
}

export const config = {
	matcher: ['/profile/:path*', '/admin/:path*']
}
