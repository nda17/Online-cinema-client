export const moviesUrl = (slug: string) => `/movies/${slug}`
export const genresUrl = (slug: string) => `/genres/${slug}`
export const actorsUrl = (slug: string) => `/actors/${slug}`
export const adminUrl = (url: string) => `/admin/${url}`
export const adminHomeUrl = () => adminUrl('').slice(0, -1)
