import React from 'react'


const Category = ({category, filterCategory}) => {


   const categoryButton = category.map((item, index) => (
    <button className='bg-yellow-500 text-white  font-bold py-2 px-4 rounded-md' key={index}
    onClick={() => filterCategory(item)}
    >{item}</button>
   ))

    
  return (
    <div className=' flex justify-center gap-5 items-center max-w-sm mx-auto'>
       {categoryButton}
    </div>
  )
}

export default Category