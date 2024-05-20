import { ADMIN_URL } from '@/configs/url.config'
import { useDebounce } from '@/hooks/useDebounce'
import { ActorService } from '@/services/actor/actor.service'
import { ITableItem } from '@/ui/admin-table/AdminTable/admin-table.interface'
import { toastrError } from '@/utils/api/toastr-error-redux'
import { useRouter } from 'next/navigation'
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

	const { push } = useRouter()

	const { mutateAsync: createAsync } = useMutation(
		'create actor',
		() => ActorService.createActor(),
		{
			onSuccess({ data: _id }) {
				toastr.success('Create actor', 'create was successful')
				push(ADMIN_URL.rootUrl(`actor/edit/${_id}`))
			},

			onError(error) {
				toastrError(error, 'Create actor')
			}
		}
	)

	const { mutateAsync: deleteAsync } = useMutation(
		'delete actor',
		(actorId: string) => ActorService.deleteActor(actorId),
		{
			onSuccess() {
				toastr.success('Delete actor', 'delete was successful')
				queryData.refetch()
			},
			
			onError(error) {
				toastrError(error, 'Delete actor')
			}
		}
	)

	return useMemo(
		() => ({
			handleSearch,
			handleClear,
			...queryData,
			searchTerm,
			deleteAsync,
			createAsync
		}),
		[queryData, searchTerm, deleteAsync, createAsync]
	)
}
