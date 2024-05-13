export interface IProgress {
	min: number
	max: number
	value: number
	onChange: (e: any) => void
}
