import Image from 'next/image'
import React from 'react'
import { Progress } from "/components/ui/progress"
import Link from 'next/link'


function ProgressCourseItem({course}) {
    const getTotalCompletedChapterPerc =(item)=>{
        const perc=(item.completedChapter?.length/item?.courseList?.chapter?.length)*100
        return perc
    }
  return (
    <Link href={"/course-preview/"+course?.courseList?.slug}>
          <div className='border rounded-md hover:shadow-md hover:shadow-blue-500'>
              <Image src={course.courseList?.banner?.url}
                  width={500} height={150}
                  alt='banner'
                  className='rounded-t-md'
              />
              <div className='flex flex-col gap-1 p-2' >
                  <h2 className='font-medium'>{course.courseList.name}</h2>
                  <h2 className='text-[12px] text-gray-400'>{course.courseList.authors}</h2>
                  <h2 className='text-[12px] text-gray-400 mt-3'>{getTotalCompletedChapterPerc(course)}% <span className='float-right'>{course.completedChapter?.length}/{course?.courseList?.chapter?.length} Chapters</span></h2>
                  <Progress value={getTotalCompletedChapterPerc(course)} className="h-[10px]" />
              </div>
          </div>
    </Link>
      
  )
}

export default ProgressCourseItem