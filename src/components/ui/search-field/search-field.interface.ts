import { ChangeEvent, MouseEvent } from 'react'

export interface ISearchField {
	searchValue: string
	handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
	handleClear: (e: MouseEvent<HTMLSpanElement>) => void
}
