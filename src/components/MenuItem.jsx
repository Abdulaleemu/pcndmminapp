import React from 'react'

const MenuItem = ({Icon, title}) => {
  return (
    <div className='flex space-x-2 mt-3 items-center shadow-sm hover:shadow-md active:bg-sky-300 p-2'>
        <Icon className='h-8 w-8 text-sky-500 '/>
        <p className='text-md font-semibold'>{title}</p>
    </div>
  )
}

export default MenuItem