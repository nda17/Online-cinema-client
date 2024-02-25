import { GenreService } from '@/app/services/genre.service'
import { useQuery } from 'react-query'
import { IMenuItem } from '../menuItem.interface'

export const usePopularGenres = () => {
    const queryData = useQuery({
        queryFn: () => GenreService.getAll(),
        queryKey: ['popular genre menu'],
        select: ({ data }) => data.map((item): IMenuItem => ({
            icon: item.icon,
            link: `genre/${item.slug}`,
            title: item.name,
            })
         ).splice(0, 4)
    })

    return queryData
}