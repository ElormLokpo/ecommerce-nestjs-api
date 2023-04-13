import React, {useEffect} from 'react'

function HomePage() {
    let backB:string = "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2400&q=3000"
 
   

    return (
    <div>

        <div className='header-section mb-44' style = {{
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


    </div>
  )
}

export default HomePage