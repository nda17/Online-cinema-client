import { ADMIN_URL } from '@/configs/url.config'
import { ActorService } from '@/services/actor/actor.service'
import { toastrError } from '@/utils/api/toastr-error-redux'
import { getKeys } from '@/utils/object/getKeys'
import { useRouter } from 'next/navigation'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { IActorEditInput } from './actor-edit.interface'

export const useActorEdit = (
	setValue: UseFormSetValue<IActorEditInput>,
	params: { id: string }
) => {
	const { push } = useRouter()

	const genreId = params.id

	const { isLoading } = useQuery(
		['actor', genreId],
		() => ActorService.getActorById(genreId),
		{
			onSuccess({ data }) {
				getKeys(data).forEach((key) => {
					setValue(key, data[key])
				})
			},

			onError(error) {
				toastrError(error, 'Get actor')
			},
			enabled: !!params.id
		}
	)

	const { mutateAsync } = useMutation(
		'update actor',
		(data: IActorEditInput) => ActorService.updateActor(genreId, data),

		{
			onSuccess() {
				toastr.success('Update actor', 'update was successful')
				push(ADMIN_URL.rootUrl('/actors'))
			},
			
			onError(error) {
				toastrError(error, 'Update actor')
			}
		}
	)

	const onSubmit: SubmitHandler<IActorEditInput> = async (data) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
