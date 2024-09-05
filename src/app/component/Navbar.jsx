'use client'
import React, { useState } from 'react';
import Logo from '../img/Logo.svg';
import Image from 'next/image';

function Navbar() {
    const [dropdownVisible, setDropdownVisible] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [colorChange, setColorChange] = useState(null);
    // Function to toggle the class
    const navMenu = () => {
        setIsVisible(!isVisible);
    };

  return (
    <>
<nav className=" border-gray-200 bg-black p-4 lg:p-0">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
  <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <Image src={Logo} className="h-8" alt="Logo" />
  </a>
  
  <div className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
      <button type="button" className="text-black bg-[#00d563] hover:bg-[#00d563] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center   ">Get started</button>
      <button data-collapse-toggle="navbar-cta" type="button" title="Navbar icon" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-2   hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false" onClick={navMenu}>
       
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className={`items-center justify-between ${isVisible ? 'block' : 'hidden'} w-full lg:flex lg:w-auto lg:order-1`} id="navbar-cta">
    <ul className="flex flex-col font-medium py-4  mt-4 border  rounded-lg bg-black lg:space-x-5 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0  border-gray-700">
    <li>
                    <button  type="button" className={`flex items-center  justify-between w-full px-3 ${colorChange === "Products" ? 'bg-[#00d563] text-black' : 'text-white0'} hover:bg-[#00d563] py-2  rounded hover:text-black`} onClick={()=>{setDropdownVisible(dropdownVisible === "Products" ? null : "Products"),setColorChange(colorChange === "Products" ? null : "Products")}}>Products<svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                   </svg></button>
                    <div className={`z-10 lg:absolute ${dropdownVisible === "Products" ? 'block' : 'hidden'}  divide-y divide-gray-100 rounded-lg shadow w-44 bg-gray-700`}>
                        <ul class="py-2 text-sm text-gray-200" aria-labelledby="doubleDropdownButton">
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-600 text-gray-200 hover:text-white">Overview</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-600 text-gray-200 hover:text-white">My downloads</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-600 text-gray-200 hover:text-white">Billing</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-600 text-gray-200 hover:text-white">Rewards</a>
                          </li>
                        </ul>
                    </div>
         </li>

        <li>
                    <button  type="button" className={`flex items-center justify-between w-full px-3 ${colorChange === "Customers" ? 'bg-[#00d563] text-black' : 'text-white'} hover:bg-[#00d563] py-2   rounded hover:text-black`} onClick={()=>{setDropdownVisible(dropdownVisible === "Customers" ? null : "Customers"),setColorChange(colorChange === "Customers" ? null : "Customers")}}>Customers<svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                   </svg></button>
                    <div  className={`z-10 lg:absolute ${dropdownVisible ==='Customers' ? 'block' : 'hidden'}  divide-y divide-gray-100 rounded-lg shadow w-44 bg-gray-700`}>
                        <ul class="py-2 text-sm text-gray-200" aria-labelledby="doubleDropdownButton">
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-600 text-gray-200 hover:text-white">Overview</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-600 text-gray-200 hover:text-white">My downloads</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-600 text-gray-200 hover:text-white">Billing</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-600 text-gray-200 hover:text-white">Rewards</a>
                          </li>
                        </ul>
                    </div>
         </li>

      <li>
        <a href="#" className={`block py-2 px-3   ${colorChange === "Pricing" ? 'bg-[#00d563] text-black' : 'text-white'} rounded  hover:text-black  hover:bg-[#00d563]   border-gray-700`} id='Pricing' onClick={()=>{setColorChange(colorChange === "Pricing" ? null : "Pricing"),setDropdownVisible("Pricing")}}>Pricing</a>
      </li>

        <li>
                    <button  type="button" className={`flex items-center justify-between w-full px-3 ${colorChange === "About" ? 'bg-[#00d563] text-black' : 'text-white'} hover:bg-[#00d563] py-2   rounded hover:text-black`} onClick={()=>{setDropdownVisible(dropdownVisible === "About" ? null : "About"),setColorChange(colorChange === "About" ? null : "About")}}>About<svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                   </svg></button>
                    <div className={`z-10 lg:absolute ${dropdownVisible === "About"? 'block' : 'hidden'}  divide-y divide-gray-100 rounded-lg shadow w-44 bg-gray-700`}>
                        <ul class="py-2 text-sm text-gray-200" aria-labelledby="doubleDropdownButton">
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-600 text-gray-200 hover:text-white">Overview</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-600 text-gray-200 hover:text-white">My downloads</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-600 text-gray-200 hover:text-white">Billing</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-600 text-gray-200 hover:text-white">Rewards</a>
                          </li>
                        </ul>
                    </div>
         </li>

      <li >
                    <button className={`flex items-center  justify-between w-full px-3 ${colorChange === "Resources" ? 'bg-[#00d563] text-black' : 'text-white'} hover:bg-[#00d563] py-2   rounded hover:text-black`} onClick={()=>{setDropdownVisible(dropdownVisible === "Resources" ? null : "Resources"),setColorChange(colorChange === "Resources" ? null : "Resources")}}>Resources<svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                   </svg></button>
                    <div id="doubleDropdown" className={`z-10 lg:absolute ${dropdownVisible === "Resources"? 'block' : 'hidden'}  divide-y divide-gray-100 rounded-lg shadow w-44 bg-gray-700`}>
                        <ul class="py-2 text-sm text-gray-200" aria-labelledby="doubleDropdownButton">
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-600 text-gray-200 hover:text-white">Overview</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-600 text-gray-200 hover:text-white">My downloads</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-600 text-gray-200 hover:text-white">Billing</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-600 text-gray-200 hover:text-white">Rewards</a>
                          </li>
                        </ul>
                    </div>
         </li>
         <li>
        <a href="#" className={`block py-2 px-3  ${colorChange === "Careers" ? 'bg-[#00d563] text-black' : 'text-white '} rounded    hover:bg-[#00d563] hover:text-black border-gray-700`} onClick={()=>{setColorChange(colorChange === "Careers" ? null : "Careers"),setDropdownVisible("Pricing")}}>Careers</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
{/* <div className={`w-[100vw] h-[100vh] bg-red-500 absolute  top-15 z-[3] ${colorChange === null ? 'hidden' : 'block'}`} onClick={()=>{setDropdownVisible(null),setcolorChange(null)}}></div> */}
</>
  )
}

export default Navbar
