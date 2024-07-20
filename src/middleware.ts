import { NextRequest, NextResponse } from 'next/server'
import { API_URL } from './configs/api.config'
import { EnumTokens } from './configs/enum.tokens'

export async function middleware(request: NextRequest) {
	const refreshToken = request.cookies.get(EnumTokens.REFRESH_TOKEN)?.value
	const accessToken = request.cookies.get(EnumTokens.ACCESS_TOKEN)?.value

	if (!refreshToken) {
		request.cookies.delete(EnumTokens.ACCESS_TOKEN)
		return NextResponse.redirect(new URL('/auth', request.url))
	}

	if (
		(request.nextUrl.pathname.includes('/profile') && !refreshToken) ||
		(request.nextUrl.pathname.includes('/profile') && !accessToken)
	) {
		return NextResponse.redirect(new URL('/auth', request.url))
	}

	if (request.nextUrl.pathname.includes('/admin')) {
		return await fetch(`${API_URL}/profile/users`, {
			method: 'GET',
			headers: { Authorization: `Bearer ${accessToken}` }
		})
			.then((response) => response.json())
			.then((data) => (!data.isAdmin ? NextResponse.error() : null))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/admin/:path*', '/profile/:path*']
}
