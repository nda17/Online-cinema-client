export const API_URL = import.meta.env.VITE_APP_URL

export const getAuthUrl = (string: string) => `/auth${string}`
export const getUsersUrl = (string: string) => `/users${string}`
export const getGenresUrl = (string: string) => `api/genres${string}`
export const getMoviesUrl = (string: string) => `api/movies${string}`
export const getActorsUrl = (string: string) => `/actors${string}`
export const getRatingsUrl = (string: string) => `/ratings${string}`
