import React from 'react'

function ItemDetail() {
    let cardImg: string = "https://cdn-images.farfetch-contents.com/19/97/23/69/19972369_44771693_1000.jpg";

  return (
    <div className=' py-10 px-52 h-full'>
        <div className='grid grid-cols-3'>
            <div className='col-span-2 flex justify-center'>
                <img src={cardImg} className= "detail-img"/>
            </div>

            <div className='flex flex-col justify-center'>
                <div>
                    <div className=' h-2/6 py-2'>
                        <div className='text-sm mb-1'>
                            <p className='font-light text-xs'>Nike</p>
                            <p className='text-xs font-semibold'>JORDAN SOMETHING S</p>
                            <p className='font-bold text-2xl mb-2'>GHC 500</p>
                        </div>

                      
            
                        {/* <div className='card-text text-sm mb-2'>
                            <p>It is a long established fact that a reader will be distracted by the ...</p>
                        </div> */}

                        <div className=''>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>

                            <div>
                                <p className='my-6 text-sm leading-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                    . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                                    took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
                                    electronic typesetting
                                    , remaining essentially unchanged. It was popularised in</p>
                            </div>
                        </div>
                            <div className='flex justify-between h-2/5'>
                                <div className="">
                                  <button className='bg-black text-white h-full px-5'>-</button>
                                  <input type = 'text'  className='w-1/5 border h-full'/>
                                  <button className='bg-black text-white h-full px-5'>+</button>
                                </div>

                                <div>
                                    <button className='text-xs px-4 h-full text-white bg-black'>Add to Cart</button>    
                                </div>
                                
                              
                           
                            </div>
            </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail