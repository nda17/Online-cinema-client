import { FC } from 'react'
import * as FontAwesomeIcons from 'react-icons/fa'
import { IFontAwesomeIcon } from './font-awesome-icon'

const FontAwesomeIcon: FC<IFontAwesomeIcon> = ({
	name,
	fill = 'gray'
}) => {
	const IconComponent = FontAwesomeIcons[name]

	return FontAwesomeIcons[name] ? (
		<IconComponent fill={fill} />
	) : (
		<FontAwesomeIcons.FaEllipsisH />
	)
}

export default FontAwesomeIcon
