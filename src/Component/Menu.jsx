import React from 'react'
import Singleitem from './Singleitem'

const Menu = ({data}) => {



  return (
    <div className=' grid grid-cols-1 w-full gap-6 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-4 my-6'>
        {data?.map(item => (
            <Singleitem key={item.id} {...item} />
        ))}
    </div>
  )
}

export default Menu