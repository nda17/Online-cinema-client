import { ActorService } from '@/services/actor/actor.service'
import { IOption } from '@/ui/select/select-interface'
import { toastrError } from '@/utils/api/toastr-error-redux'
import { useQuery } from 'react-query'

export const useAdminActors = () => {
	const queryData = useQuery(
		'list of actor',
		() => ActorService.getActorsList(),
		{
			select: ({ data }) =>
				data.map(
					(actor): IOption => ({
						label: actor.name,
						value: actor._id
					})
				),
			onError(error) {
				toastrError(error, 'actor list')
			}
		}
	)

	return queryData
}
