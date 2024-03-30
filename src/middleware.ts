import { NextRequest, NextResponse } from 'next/server'
import { API_URL, PUBLIC_PATH } from './configs/api.config'
import { EnumTokens } from './configs/enum.tokens'
import { ADMIN_URL, PUBLIC_URL, USER_URL } from './configs/url.config'

export async function middleware(request: NextRequest) {
	const accessToken = request.cookies.get(EnumTokens.ACCESS_TOKEN)?.value
	const refreshToken = request.cookies.get(EnumTokens.REFRESH_TOKEN)?.value

	//При переходе на страницу профиля => проверка наличия accessToken и refreshToken => если отсутствует, то редирект на страницу Auth:
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

	//При переходе на страницы Admin panel => проверка ролей => если роль не admin, то редирект на 404 страницу:
	if (
		request.nextUrl.pathname === ADMIN_URL.homeUrl() ||
		request.nextUrl.pathname === ADMIN_URL.rootUrl('actors') ||
		request.nextUrl.pathname === ADMIN_URL.rootUrl('genres') ||
		request.nextUrl.pathname === ADMIN_URL.rootUrl('movies') ||
		request.nextUrl.pathname === ADMIN_URL.rootUrl('users')
	) {
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
