import Image from 'next/image'
import React from 'react'

function WelcomeBanner() {
    return (
        <div className='flex gap-5 items-center bg-white rounded-xl p-6'>
            <Image src='/person.png' alt='person' width={175} height={175} />
            <div>
                <h2 className='font-bold text-[33px]'>Embrace Education with  <span className='text-primary'>Ashis</span> Academy! </h2>
                <h2 className='text-gray-400'>Till Then , Keep Learning and Keep Exploring</h2>
            </div>
        </div>
    )
}

export default WelcomeBanner