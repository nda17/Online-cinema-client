import { NextRequest, NextResponse } from 'next/server'
import { API_URL } from './configs/api.config'
import { EnumTokens } from './configs/enum.tokens'
import { ADMIN_PAGES } from './configs/pages/admin.config'
import { USER_PAGES } from './configs/pages/profile.config'
import { PUBLIC_PAGES } from './configs/pages/public.config'

export async function middleware(request: NextRequest) {
	const refreshToken = request.cookies.get(EnumTokens.REFRESH_TOKEN)?.value
	const accessToken = request.cookies.get(EnumTokens.ACCESS_TOKEN)?.value

	if (!refreshToken) {
		request.cookies.delete(EnumTokens.ACCESS_TOKEN)
		return NextResponse.redirect(new URL(PUBLIC_PAGES.AUTH, request.url))
	}

	if (
		(request.nextUrl.pathname.includes(USER_PAGES.PROFILE) &&
			!refreshToken) ||
		(request.nextUrl.pathname.includes(USER_PAGES.PROFILE) && !accessToken)
	) {
		return NextResponse.redirect(
			new URL(`${PUBLIC_PAGES.AUTH}`, request.url)
		)
	}

	if (request.nextUrl.pathname.includes(ADMIN_PAGES.HOME)) {
		return await fetch(
			`${API_URL}/${USER_PAGES.USERS}/${USER_PAGES.PROFILE}`,
			{
				method: 'GET',
				headers: { Authorization: `Bearer ${accessToken}` }
			}
		)
			.then((response) => response.json())
			.then((data) => (!data.isAdmin ? NextResponse.error() : null))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/admin/:path*', '/profile/:path*']
}
