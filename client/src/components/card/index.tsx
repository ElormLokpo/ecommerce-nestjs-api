import React from 'react';
import { useEffect } from 'react';


type UserType = {
    main_heading: string,
    description: string,
    main_img: string,
    _id: any
};

interface PropsI{
    content: UserType
}


function Card(props:PropsI) {
    let cardImg: string = "https://cdn-images.farfetch-contents.com/19/97/23/69/19972369_44771693_1000.jpg";


  return (
   <div className='card-container'>
        <div className='bg-blue-400 h-4/6 top'>
            <img className='card-img' src = {cardImg} />
        </div>
        <div className=' h-2/6 py-2'>
            <div className='flex justify-between text-sm mb-1'>
                <p className='font-semibold'>JORDAN SOMETHINGs Ss</p>
                <p className='font-bold '>GHC 500</p>
            </div>

            <div className='text-xs mb-3 gap-1 flex'>
                <div className="badge badge-outline text-xs">Men</div>
                <div className="badge badge-outline text-xs">Sneakerss</div>
            </div>
            
            <div className='card-text text-sm mb-2'>
                <p>It is a long established fact that a reader will be distracted by the ...</p>
            </div>

            <div className='flex justify-between items-center'>
                <div className="rating rating-sm">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>

                <div>
                    <button className='text-xs py-3 px-6 text-white rounded-full bg-black'>Add to Cart</button>    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card