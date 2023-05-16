import React from 'react'
import Link from "next/link";


const Custom404 = () => {
    return (
        <>
            <main className="bg-gray-50">
                <div className="flex flex-col justify-center items-center px-6 mx-auto h-screen xl:px-0">
                    <div className="text-center xl:max-w-4xl">
                        <h1 className="mb-3 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                            Page not found
                        </h1>
                        <p className="mb-5 text-base font-normal text-gray-500 md:text-lg">
                            Oops! Looks like you followed a bad link. If you think this is a
                            problem with us, please tell us.
                        </p>
                        <Link href='/' legacyBehavior>
                        <a className="text-white bg-gradient-to-br from-pink-500 to-voilet-500 hover:scale-[1.02] shadow-md shadow-gray-300 transition-transform font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-3">
                            <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                            Go back home
                        </a>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Custom404