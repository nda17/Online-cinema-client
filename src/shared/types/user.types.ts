export interface IUser {
	_id: string
	email: string
	password: string
	createdAt: string
	isActivated: boolean
	activationKey: string
	isAdmin: boolean
}
