import { FC } from 'react'

const Heading: FC<{title: string}> = ({ title }) => {
  return (
    <h1 className='text-white text-opacity-80 font-semibold'>
        {title}
    </h1>
  )
}

export default Heading