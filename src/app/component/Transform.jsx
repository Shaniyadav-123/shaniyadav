import React from 'react'
import Image from 'next/image'
import Avatar from '../img/Avatar (1).png'
import Avatar1 from '../img/Avatar (2).png'
import Avatar2 from '../img/Avatar (3).png'
import Imag8 from '../img/image 8.png'
import Rectangle from '../img/Rectangle.png'
function Transform() {
    return (
        <div className='px-4'>
            <div className='max-w-[1000px] xl:max-w-[1270px]  sm:mx-auto py-12 px-5 sm:px-20  mt-5 sm:mt-20 bg-[#1C2028] rounded-3xl w-full'>
                <div className="grid grid-cols-1 xl:grid-cols-2">
                    <div>
                        <div className='inline-block p-2 rounded-full border-[1px] border-[#00D563]'>
                            <div className='relative inline-block '>
                                <Image className='inline-block ' src={Avatar} alt={Avatar}></Image>
                                <Image className='inline-block absolute left-4 top-[1px]' src={Avatar1} alt={Avatar1}></Image>
                                <Image className='inline-block absolute left-8 top-[1px]' src={Avatar2} alt={Avatar2}></Image>
                            </div>
                            <div className='inline-block ml-10 text-[#00D563] text-sm'>Trusted by 2000+ People</div>
                        </div>
                        <h1 className="md:w-[640px] text-left  text-[#fbfcfc] text-xl sm:text-3xl lg:text-5xl font-normal my-5">Ready to Transform Your HR Management?</h1>
                        <p>Join hundreds of satisfied customers who have streamlined their HR processes with our HRMS.</p>
                        <button type="button" class="text-[#0f1228] bg-[#00d563] hover:bg-[#00d563] focus:ring-4 hover:text-[#0f1228] font-medium rounded-lg text-xs px-5 py-2.5 mt-10 ">
                            Schedule a Demo
                        </button>
                    </div>
                    <div>
                        <div className='relative sm:w-[570px] sm:h-[425px] xl:h-auto  lg:mx-auto '>
                            <Image className='hidden sm:block absolute w-[300px] top-[20px] xl:-top-28 left-10 md:left-52' src={Imag8} alt={Imag8}></Image>
                            <div className='bg-black px-3 py-2 my-5 sm:my-0 sm:inline-block rounded sm:absolute -left-10 md:left-32 xl:top-14 top-44'>
                                <div className="w-2 h-2 bg-[#f7a708] rounded-full inline-block" />
                                <p className='inline-block text-sm ml-2'>5 tasks pending</p>
                            </div>
                            <div className='bg-black my-5 sm:my-0 px-3 py-2 sm:inline-block rounded-lg sm:absolute right-20 md:-right-14 top-64 xl:top-28'>
                                <div className='text-sm'>Calendar</div>
                                <div className='bg-[#1c2028] rounded p-2 px-3 my-2'>
                                    <p className='text-xs leading-[8px]'>Leadership seminar</p>
                                    <div className="w-2 h-2 bg-[#f7a708] rounded-full inline-block" />
                                    <p className='inline-block text-[8px] ml-2'>15 Mar 2024 <span className='text-[10px] ml-2'>02:08PM</span></p>
                                </div>
                                <div className='bg-[#1c2028] rounded p-2 px-3 my-2'>
                                    <p className='text-xs leading-[8px]'>Leadership seminar</p>
                                    <div className="w-2 h-2 bg-[#0ba4eb] rounded-full inline-block" />
                                    <p className='inline-block text-[10px] ml-2'>15 Mar 2024 <span className='text-[10px] ml-2'>02:08PM</span></p>
                                </div>
                            </div>
                            <div className='bg-black p-3 my-5 sm:my-0 sm:inline-block rounded-md sm:absolute -left-14 md:left-24 top-80 xl:top-44'>
                                <div>
                                    <Image className='inline-block sm:absolute top-3' src={Rectangle} alt={Rectangle}></Image>
                                    <div className="inline-block" >
                                        <p className='text-[10px] ml-8'>Lewis Rivera Junior</p>
                                        <p className='text-[10px] ml-8 text-[#0ba4eb]'>Product designer</p>
                                    </div>
                                </div>
                                <hr className='border-[#666984] my-3' />
                                <button type="button" class="text-[#0f1228] border-2  border-[#00d563]  bg-[#00d563] hover:bg-[#00d563] focus:ring-4 hover:text-[#0f1228] font-medium rounded-lg sm:text-xs px-2 py-1 me-2 ">
                                    Login
                                </button>
                                <button type="button" class="text-[#00d563] border-2  border-[#00d563]  focus:ring-4  font-medium rounded-lg sm:text-xs px-2 py-1 me-2 ">
                                    Logout
                                </button>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transform
