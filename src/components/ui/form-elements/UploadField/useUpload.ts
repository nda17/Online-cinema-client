import { FileService } from '@/services/file/file.service'
import { toastrError } from '@/utils/api/toastr-error-redux'
import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { useMutation } from 'react-query'

type TypeUpload = (
	onChange: (...event: any[]) => void,
	folder?: string
) => {
	uploadFile: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
	isLoading: boolean
}

export const useUpload: TypeUpload = (onChange, folder) => {
	const [isLoading, setIsLoading] = useState(false)

	const { mutateAsync } = useMutation(
		'upload file',
		(data: FormData) => FileService.upload(data, folder),
		{
			onSuccess({ data }) {
				onChange(data[0].url)
			},
			onError(error) {
				toastrError(error, 'Upload image')
			}
		}
	)

	const uploadFile = useCallback(
		async (e: ChangeEvent<HTMLInputElement>) => {
			setIsLoading(true)
			const files = e.target.files

			if (files?.length) {
				const formData = new FormData()
				formData.append('file', files[0])
				await mutateAsync(formData)

				setTimeout(() => {
					setIsLoading(false)
				}, 1000)
			}
		},
		[mutateAsync]
	)

	return useMemo(
		() => ({ uploadFile, isLoading }),
		[uploadFile, isLoading]
	)
}
