export interface IGalleryItem {
	posterPath: string
	name: string
	_id?: string
	url: string
	actor?: boolean
	rating?: string
	content?: {
		title: string
		subTitle?: string
	}
}
