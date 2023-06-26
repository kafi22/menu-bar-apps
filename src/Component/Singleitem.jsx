import React from 'react'

const Singleitem = (props) => {

    const {id, title, desc, price, img, category} = props;

  return (
    
        <article className=' flex flex-col w-full items-start h-[100%] justify-between bg-gray-100 shadow-md rounded-md space-y-2' key={id}>
            <div className="img-box">
                <img src={img} alt="image" className=' sm:h-auto sm:w-full md:h-[15rem] md:w-[30rem]  lg:h-[15rem] lg:w-[28rem]  object-cover block' />
            </div>
            <div className="detail-sec p-3 space-y-2 flex flex-col justify-between flex-1">
            <header className=' flex justify-between items-center'>
                <h3 className=' text-lg capitalize  font-medium'>{title}</h3>
                <span className=' text-white font-bold bg-orange-600 py-1 px-2 rounded-md'>{price} $</span>
            </header>
            <footer>
                <p>{desc}</p>
            </footer>
            </div>
        </article>
   
  )
}

export default Singleitem