import { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'
import { IMaterialIcon } from './material-icon.interface'

const MaterialIcon: FC<IMaterialIcon> = ({ name, fill = '#ffffff' }) => {
	const IconComponent = MaterialIcons[name]

	return MaterialIcons[name] ? (
		<IconComponent fill={fill} />
	) : (
		<MaterialIcons.MdDragIndicator />
	)
}

export default MaterialIcon
