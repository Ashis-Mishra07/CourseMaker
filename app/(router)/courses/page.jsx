"use client"
import React, { useEffect, useState } from 'react';
import WelcomeBanner from './_components/WelcomeBanner';
import CourseList from './_components/CourseList';
import SideBanners from './_components/SideBanners';

function Courses() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 12000); // 1 second delay

        return () => clearTimeout(timer);
    }, []);

    function handleDismiss() {
        setIsVisible(false);
    }

    return (
        <div>
            <div className={`transition-opacity duration-500 ease-in-out opacity-${isVisible ? '100' : '0'} ${isVisible ? 'block' : 'hidden'}`}>
                <div className="fixed bottom-4 left-4 w-full z-100 ">
                    <div className=" max-w-sm rounded-2xl border border-primary bg-white p-4 shadow-lg sm:p-6 lg:p-4" role="alert">
                        <div className="flex items-center gap-4">
                            <span className="shrink-0 rounded-full bg-primary p-2 text-white">
                                <svg
                                    className="h-4 w-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        clipRule="evenodd"
                                        d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                                        fillRule="evenodd"
                                    />
                                </svg>
                            </span>

                            <p className="font-medium sm:text-lg">New message!</p>
                        </div>

                        <p className="mt-4 text-gray-500">
                            Exciting Announcement !  Introducing a new series where you'll experience mentorship sessions with top mentors from around the globe. Get ready.
                            {/* Stay tuned for more updates and get ready to embark on an enriching educational experience with us. */}
                        </p>

                        <div className="mt-6 sm:flex sm:gap-4">
                            <a
                                className="inline-block w-full rounded-lg bg-primary px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto"
                                href="/newsletter"
                            >
                                Happy ! Give a Review
                            </a>

                            <button
                                className="mt-2 inline-block w-full rounded-lg bg-gray-50 px-5 py-3 text-center text-sm font-semibold text-gray-500 sm:mt-0 sm:w-auto"
                                onClick={handleDismiss}
                            >
                                Mark as Read
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 p-4 gap-5'>
                <div className='col-span-3'>
                    <WelcomeBanner />
                    <CourseList />
                </div>
                <div className='p-3 bg-white rounded-xl'>
                    <SideBanners />
                </div>
            </div>
        </div>
    );
}

export default Courses;
