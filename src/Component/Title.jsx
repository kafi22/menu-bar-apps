import React from 'react'

const Title = ({title}) => {
  return (
    <div className=' py-10'>
        <h1 className=' text-center  border-b-2 border-yellow-300 py-2 w-36 mx-auto text-2xl font-medium capitalize '>{title || 'default title'}</h1>
    </div>
  )
}

export default Title