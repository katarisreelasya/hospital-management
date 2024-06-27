import React from 'react'
import logos from '../Assets/logos.png'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='w-full'>
         <header className="relative w-full border-b bg-white pb-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <div className="inline-flex items-center space-x-2">
            <span>
              <svg
                width="30"
                height="30"
                viewBox="0 0 50 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
              </svg>
              <a className="flex space-x-3 rtl:space-x-reverse mt-0 mb-0">
                      <img src={logos} className='h-7'  />
                      <span className="font-bold">FluidTrack</span>
                </a>
            </span>
           </div>
          <div className="hidden lg:block">
            <ul className="inline-flex space-x-8">
              <li>
                <a
                  href="/"
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/Register"
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  Register
                </a>
              </li>
              
              <li>
                <a
                  href="/PatientDetails"
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  RegPatient Details
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block">
            <NavLink
              to="/CurrentPat"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              CurrentPatient
            </NavLink>
          </div>
          <div className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 cursor-pointer"
            >
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar