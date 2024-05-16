import { IUser } from '@/shared/types/user.types'

export interface IProfileInput extends Omit<IUser, '_id' | 'createdAt'> {}
