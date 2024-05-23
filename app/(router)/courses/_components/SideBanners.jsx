import GlobalApi from '/app/_utils/GlobalApi'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

function SideBanners() {

    const [sideBannerList, setSideBannerList] = useState([]);
    useEffect(() => {
        getSideBanners();
    }, [])
    const getSideBanners = () => {
        GlobalApi.getSideBanner().then(resp => {
            console.log(resp);
            setSideBannerList(resp.sideBanners)
        })
    }
    return (
        <div>
            <div>
                <p className='mb-3 font-semibold'>Get the <span className='text-primary'>Free </span>Access from <span className='text-primary'>Youtube</span></p>
            </div>
            {sideBannerList?.length > 0 ? sideBannerList.map((item, index) => (
                <div key={index}>
                    <Image src={item.banner.url} alt='banner'
                        width={500} height={300}
                        className='rounded-sm cursor-pointer mb-3'
                        onClick={() => window.open(item?.url)}
                    />
                </div>
            )) :

                [1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                    <div key={index} className='w-full h-[200px] mt-3 rounded-md bg-slate-200
                                      animate-pulse'></div>
                ))
            }
        </div>
    )
}

export default SideBanners