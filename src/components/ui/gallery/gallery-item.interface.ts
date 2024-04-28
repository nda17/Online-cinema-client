import { IGalleryItem } from './gallery.interface'

export interface IGalleryItemProps {
	item: IGalleryItem
	variant: 'vertical' | 'horizontal'
}
