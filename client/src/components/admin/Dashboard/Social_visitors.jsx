import React from 'react'
import facebook from '../../../assets/hasan/icons8-facebook-48.png'
import github from '../../../assets/hasan/icons8-google-48.png'
import google from '../../../assets/hasan/icons8-twitter-circled-48.png'
import teitter from '../../../assets/hasan/icons8-vimeo-48.png'

const Social_visitors = () => { 
  return (
      <>
           <div className='text-base mt-5 font-bold border-b-2 pb-2 sm:w-[100%] md:w-[100%] xl:w-[100%] lg:w-[100%] flex' > 
              <img src={facebook} alt="" />
              <div className='pl-3'>
                  <p> 2025V+ </p>
                  <p> 30K+ Like</p>
              </div>                     
         </div>
             <div className='text-base mt-5 font-bold border-b-2 pb-2 sm:w-[100%] md:w-[100%] xl:w-[100%] lg:w-[100%] flex' > 
              <img src={teitter} alt="" />
              <div className='pl-3'>
                  <p> 2025V+ </p>
                  <p> 30K+ Like</p>
              </div>                     
         </div>
             <div className='text-base mt-5 font-bold border-b-2 pb-2 sm:w-[100%] md:w-[100%] xl:w-[100%] lg:w-[100%] flex' > 
              <img src={google} alt="" />
              <div className='pl-3'>
                  <p> 2025V+ </p>
                  <p> 30K+ Like</p>
              </div>                     
         </div>
          <div className='text-base mt-5 font-bold border-b-2 pb-2 sm:w-[100%] md:w-[100%] xl:w-[100%] lg:w-[100%] flex' > 
              <img src={github} alt="" />
              <div className='pl-3'>
                  <p> 2025V+ </p>
                  <p> 30K+ Like</p>
              </div>                     
         </div>
         
      </>
  )
}

export default Social_visitors 