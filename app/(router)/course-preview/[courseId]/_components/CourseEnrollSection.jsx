import { useUser } from '@clerk/nextjs';
import { Button } from '/components/ui/button'
import React, { useEffect } from 'react'
import Link from 'next/link';
import GlobalApi from '/app/_utils/GlobalApi';
import { useRouter } from 'next/navigation';
import { toast } from "sonner"


function CourseEnrollSection({ courseInfo, isUserAlreadyEnrolled }) {
    const membership = false;
    const {user} =useUser();
    const router = useRouter();


    useEffect(()=>{
        console.log("isUserAlreadyEnrolled", isUserAlreadyEnrolled);
    },[])

    const onEnrollCourse=()=>{
        GlobalApi.enrollToCourse(courseInfo?.slug,user?.primaryEmailAddress?.emailAddress).then(resp=>{
            console.log(resp);

            if(resp){

                toast("User Enrolled Successfully", {
                    description: "User Enrolled to this Course",
                })

                router.push('/watch-course/' +resp.createUserEnrollCourse.id);
            }
            
        })
    }
    return (
        <div className='p-3 text-center rounded-sm bg-primary '>

            <h2 className='text-[22px] font-bold text-white'>Enroll to the Course</h2>
            {
                user&&(membership || courseInfo.free)&&!isUserAlreadyEnrolled ?
                    <div className='flex flex-col gap-3 mt-3'>
                        <h2 className='text-white font-light'>Enroll now to start Learning and Building the project .</h2>
                        <Button className="bg-white text-primary hover:bg-white hover:text-primary" 
                        onClick={()=>onEnrollCourse()}
                        >Enroll Now</Button>
                    </div>
                    :!user?
                        <div className='flex flex-col gap-3 mt-3'>
                            <h2 className='text-white font-light'>Enroll now to start Learning and Building the project .</h2>
                            <Link href={'/sign-in'}><Button className="bg-white text-primary hover:bg-white hover:text-primary">Enroll Now</Button></Link>
                        </div>

                    : !isUserAlreadyEnrolled&&<div className='flex flex-col gap-3 mt-3'>
                        <h2 className='text-white font-light'>Buy Monthly Membership and Get Access to All Courses .</h2>
                        <Button className="bg-white text-primary hover:bg-white hover:text-primary">Buy Membership Just $0.01</Button>
                    </div>

                    
            }
            {
                isUserAlreadyEnrolled&&
                <div className='flex flex-col gap-3 mt-3'>
                    <h2 className='text-white font-light'>Continue to Learn your Project .</h2>
                    <Link href={'/watch-course/'+isUserAlreadyEnrolled}>
                        <Button className="bg-white text-primary hover:bg-white hover:text-primary">Continue</Button>
                    </Link>
                </div>
            }
        </div>
    )
}

export default CourseEnrollSection