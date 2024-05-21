export interface IGalleryItem {
	posterPath: string
	name: string
	_id?: string
	url: string
	content?: {
		title: string
		subTitle?: string
	}
}
