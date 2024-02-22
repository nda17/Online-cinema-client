import { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'
import { TypeMaterialIconName } from '../../shared/types/icon.types'

const MaterialIcon: FC<{name: TypeMaterialIconName}> = ({name}) => {
  const IconComponent = MaterialIcons[name]
  
  return MaterialIcons[name] ? <IconComponent /> : <MaterialIcons.MdDragIndicator />
}

export default MaterialIcon