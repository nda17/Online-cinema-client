import { TypeMaterialIconName } from '@/shared/types/icon.types'

export interface IStarRating {
	count: number
	icon?: TypeMaterialIconName,
	defaultStarColor: any
	activeStarColor: any
	slug: string
	_id: string
}
