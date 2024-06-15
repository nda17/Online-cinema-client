import { TypeMaterialIconName } from '@/shared/types/icon.types'
import { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'

const MaterialIconRating: FC<{ name: TypeMaterialIconName }> = ({
	name
}) => {
	const IconComponent = MaterialIcons[name]

	return MaterialIcons[name] ? <IconComponent /> : <MaterialIcons.MdStar />
}

export default MaterialIconRating
