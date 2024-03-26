export const API_URL = `${process.env.APP_URL}/api`

export const PUBLIC_PATH = {
	usersUrl: (string: string) => `/users${string}`,
	genresUrl: (string: string) => `/genres${string}`,
	moviesUrl: (string: string) => `/movies${string}`,
	actorsUrl: (string: string) => `/actors${string}`,
	ratingsUrl: (string: string) => `/ratings${string}`
}

export const getAuthUrl = (string: string) => `/auth${string}`
