export const PUBLIC_URL = {
	authUrl: () => `/auth`,
	moviesUrl: (slug: string) => `/movies/${slug}`,
	genresUrl: (slug: string) => `/genres/${slug}`,
	actorsUrl: (slug: string) => `/actors/${slug}`
}

export const USER_URL = {
	profileUrl: () => `/profile`
}

export const ADMIN_URL = {
	rootUrl: (url = '') => `/admin${url ? '/' + url : ''}`,
	homeUrl: () => ADMIN_URL.rootUrl('')
}
