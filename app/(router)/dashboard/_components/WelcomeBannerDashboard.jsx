import React from 'react'
import Image from 'next/image'

function WelcomeBannerDashboard({user}) {
  return (
    <div className='bg-purple-100 rounded-sm p-5 flex gap-5 items-center'>
        <Image src={'/bye-person.png'} alt='panda' width={200} height={200}/>
        <div>
            <h2 className='text-[32px] font-light'>Welcome Back ,
                <span className='font-bold text-primary'> {user?.fullName}</span></h2>
            <h2 className='text-[16px] font-light text-slate-500'>Lets Begin Learning where you left off,<br />
                Keep it up and improve your progress
            </h2>
        </div>
    </div>
  )
}

export default WelcomeBannerDashboard