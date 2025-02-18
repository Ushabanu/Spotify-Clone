import React from 'react'
import {assets} from '../assets/assets'
import {useNavigate} from 'react-router-dom'

const Leftbar = () => {

  const navigate=useNavigate();

  return (
    <div className='w-[25%] h-full p-1 flex-col gap-2 text-white hidden lg:flex '>
        <div className='bg-[#121212]  h-[20%] rounded flex flex-col justify-around '>
         <div className='flex items-center gap-1 p-2 cursor-pointer '>
           <img onClick={()=>navigate('/')} src={assets.home_icon} alt="" className='h-[7vh] p-3 w-11'/>
           <p className='font-bold'>Home</p>
         </div>
         <div className='flex items-center gap-1 p-1 cursor-pointer '>
           <img src={assets.search_icon} alt="" className='h-[7vh] p-3 w-11'/>
           <p className='font-bold'>Search</p>
         </div>
        </div>
        <div className='bg-[#121212] h-[80%] rounded'>
          <div className='p-2 flex items-center justify-between '>
            <div className='flex items-center gap-3 '>
                <img src={assets.stacks_icon} alt="" className='w-10 h-10 p-2'/>
                <p className='font-semibold'>Your Library</p>
            </div>
            <div className='flex items-center justify-between'>
                 <img src={assets.rightarrow_icon} alt="" className='w-5 ' />
                 <img src={assets.plus_icon} alt="" className='w-4 m-5'/>
            </div>
          </div>
          <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4  ]'>
             <h1>Create your first playlist</h1>
             <p className='font-light'>It's easy we will help you</p>
             <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 '>Create Playlist</button>
          </div>
          <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4]'>
             <h1>Let's find some podcasts to follow</h1>
             <p className='font-light'>We'll keep you update on new episodes</p>
             <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 '>Browse podcast</button>
          </div>
        </div>
    </div>
  )
}

export default Leftbar