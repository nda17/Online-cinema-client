//Helper function for saving url to session storage
export const savePathToStorage = (pathname: string) => {
	sessionStorage.setItem('pathname', pathname)
}
