import React, {useEffect} from 'react';
import Card from '../../components/card';

function HomePage() {
    let backB:string = "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2400&q=3000"
    let sectionS:string = "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=2400&q=3000"
   

    return (
    <div>

        <div className='header-section mb-20' style = {{
            backgroundImage: `url(${backB})`
          }}>
           
          <div className='wrapper flex items-center px-48'>
            
            <div className='flex flex-col items-start text-white p-5 mb-16 bg-black w-2/6'>
                <p className='text-2xl font-semibold mb-5 tracking-tighter'>PURCHASE ALL YOUR SHOOES FOR 50% OFF THE ORIGINAL PRICE</p>
                <div>
                    <button className='text-xs bg-white py-3 px-6 text-black rounded-full'>Browse Shoes</button>
                </div>
            </div>
          
          </div>
        </div>

        <div className='mx-52'>
            <div className='mb-12'>
                <p className='font-bold text-lg mb-5'>Products</p>

                <div className='grid grid-cols-4 gap-10 mb-2'>
                {
                    [1,23,23,23,423,4].length>0?
                    //bloglist.map((i:any)=><Card heading = {i.main_heading} desc = {i.description} img = {i.main_img} created= {i.createdAt}/>)
                    [1,2,3,4].map((i:any)=><div className=''><Card content = {i}/></div>)
                    
                    :<p className='text-sm mt-10'>No items yet..</p>
                }      
                </div>

                
            </div>



            <div className='mb-20 section-container' style = {{
            backgroundImage: `url(${sectionS})`
            }}>
            
            <div className='wrapper flex items-center justify-center'>
                
                <div className='flex flex-col items-start text-white p-5 bg-black w-2/6'>
                    <p className='text-2xl font-semibold mb-5 tracking-tighter'>PURCHASE ALL YOUR SHOOES FOR 50% OFF THE ORIGINAL PRICE</p>
                    <div>
                        <button className='text-xs bg-white py-3 px-6 text-black rounded-full'>Browse Shoes</button>
                    </div>
                </div>
            
            </div>
            </div>

            <div className='mb-12'>
                <p className='font-bold text-lg mb-5'>Products</p>

                <div className='grid grid-cols-4 gap-10 mb-2'>
                {
                    [1,23,23,23,423,4].length>0?
                    //bloglist.map((i:any)=><Card heading = {i.main_heading} desc = {i.description} img = {i.main_img} created= {i.createdAt}/>)
                    [1,2,3,4].map((i:any)=><div className=''><Card content = {i}/></div>)
                    
                    :<p className='text-sm mt-10'>No items yet..</p>
                }      
                </div>

                
            </div>

            <div className='mb-12'>
                <p className='font-bold text-lg mb-5'>Products</p>

                <div className='grid grid-cols-4 gap-10 mb-2'>
                {
                    [1,23,23,23,423,4].length>0?
                    //bloglist.map((i:any)=><Card heading = {i.main_heading} desc = {i.description} img = {i.main_img} created= {i.createdAt}/>)
                    [1,2,3,4].map((i:any)=><div className=''><Card content = {i}/></div>)
                    
                    :<p className='text-sm mt-10'>No items yet..</p>
                }      
                </div>

                
            </div>

        </div>


    </div>
  )
}

export default HomePage