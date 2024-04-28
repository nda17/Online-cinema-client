export interface IGalleryItem {
	posterPath: string
	name: string
	url: string
	content?: {
		title: string
		subTitle?: string
	}
}
