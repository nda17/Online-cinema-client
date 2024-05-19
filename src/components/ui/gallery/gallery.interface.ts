export interface IGalleryItem {
	posterPath: string
	name: string
	url: string
	_id:string
	content?: {
		title: string
		subTitle?: string
	}
}
