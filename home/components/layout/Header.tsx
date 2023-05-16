import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { blurDataURL } from '../contants';


const Header=()=> {
  return (
    <>
    <nav className="relative bg-white shadow dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
             
              <Link href="/" legacyBehavior>
                <a className="text-xl font-bold flex items-center lg:ml-2.5">
                  <div className="transition ease-in-out delay-150 mr-4 hover:-translate-y-1 hover:scale-110 duration-300 w-10 h-10 text-white rounded-full shadow-xl cursor-pointer">
                    <Image
                      src="/assets/imgs/kml_logo.png"
                      placeholder="empty"
                      blurDataURL={blurDataURL}
                      alt="kml"
                      width={50}
                      height={50}
                      layout="responsive"
                    />
                   
                  </div>
                  <span className="self-center whitespace-nowrap">
                     {"  "} Kamal
                    </span>
                </a>
              </Link>
              <div className="flex lg:hidden">
                  <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                      <svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path strokeLinecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                      </svg>
              
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                  </button>
              </div>
          </div>
  
     
          <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
              <div className="flex flex-col md:flex-row md:mx-6">
                  <Link className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="/">Home</Link>
                  <Link className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="/contacts">Contact</Link>
                  <Link className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="/about">About</Link>
              </div>
          </div>
      </div>
      </nav>
    </>
  )
}

export default React.memo(Header)