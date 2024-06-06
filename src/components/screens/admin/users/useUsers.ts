import { ADMIN_URL } from '@/configs/url.config'
import { useDebounce } from '@/hooks/useDebounce'
import { UserService } from '@/services/user/user.service'
import { ITableItem } from '@/ui/admin-table/AdminTable/admin-table.interface'
import { toastrError } from '@/utils/api/toastr-error-redux'
import { convertMongoDate } from '@/utils/date/convertMongoDate'
import { ChangeEvent, MouseEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

export const useUsers = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['user list', debouncedSearch],
		() => UserService.getUsersList(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(user): ITableItem => ({
						_id: user._id,
						editUrl: ADMIN_URL.rootUrl(`user/edit/${user._id}`),
						items: [
							user.email,
							String(user.isActivated ? 'confirmed' : 'not confirmed'),
							convertMongoDate(user.createdAt),
							String(user.isAdmin ? 'admin' : 'user'),
							String(user.isSubscription ? 'active' : 'inactive')
						]
					})
				),

			onError: (error) => {
				toastrError(error, 'User list')
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
		'delete user',
		(userId: string) => UserService.deleteUser(userId),
		{
			onSuccess() {
				toastr.success('Delete user', 'delete was successful')
				queryData.refetch()
			},

			onError(error) {
				toastrError(error, 'Delete user')
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
