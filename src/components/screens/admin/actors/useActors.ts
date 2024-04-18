import { ADMIN_URL } from '@/configs/url.config'
import { useDebounce } from '@/hooks/useDebounce'
import { ActorService } from '@/services/actor/actor.service'
import { ITableItem } from '@/ui/admin-table/AdminTable/admin-table.interface'
import { toastrError } from '@/utils/api/toastr-error-redux'
import { ChangeEvent, MouseEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

export const useActors = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['actor list', debouncedSearch],
		() => ActorService.getActorsList(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(actor): ITableItem => ({
						_id: actor._id,
						editUrl: ADMIN_URL.rootUrl(`actor/edit/${actor._id}`),
						items: [actor.name, String(actor.countMovies)]
					})
				),

			onError: (error) => {
				toastrError(error, 'Actor list')
			}
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const handleClear = (e: MouseEvent<HTMLSpanElement>) => {
		setSearchTerm('')
	}

	const { mutateAsync: deleteAsync } = useMutation(
		'delete actor',
		(actorId: string) => ActorService.deleteActor(actorId),
		{
			onError(error) {
				toastrError(error, 'Delete actor')
			},
			onSuccess() {
				toastr.success('Delete actor', 'delete was successful')
				queryData.refetch()
			}
		}
	)

	return useMemo(
		() => ({
			handleSearch,
			handleClear,
			...queryData,
			searchTerm,
			deleteAsync
		}),
		[queryData, searchTerm, deleteAsync]
	)
}