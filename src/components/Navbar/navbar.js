import React from 'react';
import { Link } from 'react-router-dom';
import  "./navbar.css";

const navbar = () => {
  return (
    <>
      <nav className=" flex fixed items-center justify-between w-full z-20 shadow-lg shadow-slate-200  pl-8 pr-8 bg-slate-50 " aria-label='Site-nav'>
        <div className="logo ml-8 lg:text-4xl sm:text-2xl font-mono font-bold">
          <h1 >Write Assist</h1>
        </div>
        <div className=" m-7 flex justify-center flex-wrap item-center">
          <ul className='flex font-semibold text-2xl space-x-7 '>
            <li>
              <Link to="/API-Repositiory/">Home</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default navbar;
