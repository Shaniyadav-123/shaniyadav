import React from 'react'
import Imag from '../img/img1.png'
import Imag2 from '../img/img2.png'
import Image from 'next/image'
import Circle from '../img/Circle1.svg'
import Circletwo from '../img/Cricle2.svg'
import Circlethree from '../img/Cricle3.svg'
import Cross from '../img/Cross.svg'
import Time from '../img/Time.svg'
import People from '../img/People.svg'
import Location from '../img/Location.svg'
import Calendar from '../img/Calendar.svg'
import Line from '../img/Line.svg'
import Plus from '../img/Plus.svg'
function HR_Operations() {
    return (
        <>
            <div className='max-w-[1000px] xl:max-w-[1270px] mx-auto px-4 '>
                <div className='mx-auto my-16 '>
                    <h1 className="md:w-[640px] text-center mx-auto text-[#fbfcfc] text-xl sm:text-3xl lg:text-5xl font-normal">Unlock the Full Potential of Your HR Operations</h1>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                    <div className='lg:col-span-2 grid-cols-1 grid sm:grid-cols-2 gap-4'>
                    <div className='grid grid-rows-2 gap-4'>
                        {/* row 1 */}
                        <div className="relative bg-[#1c2028] h-[300px] md:h-auto rounded-[20px] p-5">
                            <div className="w-full   text-2xl font-semibold  leading-[31.20px]">Increase Efficiency</div>
                            <div className="w-full  text-[#d0d1dd] text-base font-normal  leading-normal">Save time and reduce manual errors with automated HR processes.</div>
                            <div className="w-full h-[138px] " />
                            <div className=" justify-between items-center grid grid-cols-7">
                                <div className="opacity-50 text-[#c1c4e4] text-base font-normal  leading-none">su</div>
                                <div className="opacity-50 text-[#c1c4e4] text-base font-normal  leading-none">mo</div>
                                <div className="opacity-50 text-[#c1c4e4] text-base font-normal  leading-none">tu</div>
                                <div className="opacity-50 text-[#c1c4e4] text-base font-normal  leading-none">we</div>
                                <div className="opacity-50 text-[#c1c4e4] text-base font-normal  leading-none">th</div>
                                <div className="opacity-50 text-[#c1c4e4] text-base font-normal  leading-none">fr</div>
                                <div className="opacity-50 text-[#c1c4e4] text-base font-normal  leading-none">sa</div>
                            </div>
                            <div className="w-3.5 h-3.5 left-[266px] top-[145px] absolute">
                                <div className="w-3.5 h-3.5 left-[-6px] top-0 absolute bg-[#005527] rounded-full" />
                                <div className="w-2 h-2 left-[-3px] top-[3px] absolute bg-[#00d563] rounded-full" >
                                </div>
                               <Image src={Line} alt={Line}></Image>
                            </div>

                        </div>
                        {/* row close  */}
                        {/* row 2  */}
                        <div>
                            <div className="w-full relative bg-[#1c2028] rounded-[20px] pt-5 pb-5 pl-5 ">
                                <div className="h-[87px]  flex-col justify-start items-start gap-2 inline-flex mb-5 mr-3">
                                    <div className="self-stretch  text-2xl font-semibold  leading-[31.20px]">Make Informed Decisions</div>
                                    <div className="text-[#d0d1dd] text-base font-normal leading-normal">Gain insights with real-time analytics and reporting</div>
                                </div>
                                <div className="w-[300px] bg-[#292f3b] rounded-lg px-5 py-4 my-4 mx-auto">
                                    <div className="p-1 mr-2 inline-flex bg-[#3b3f55] rounded-full">
                                        <Image className="w-5 h-5 " src={Imag} alt={Imag}/>
                                    </div>
                                    <div className='inline-block'>
                                        <div className="w-[219px] h-1.5 mb-2 bg-[#3b3f55] rounded-[20px]" />
                                        <div className="w-[153px] h-1.5  bg-[#3b3f55] rounded-[20px]" />
                                    </div>
                                </div>
                                <div className="w-[260px] bg-[#292f3b] rounded-l-lg pl-5 py-4 my-4 ml-auto">
                                    <div className="p-1 mr-2 inline-flex bg-[#3b3f55] rounded-full">
                                        <Image className="w-5 h-5 " src={Imag2} alt={Imag2}/>
                                    </div>
                                    <div className='inline-block'>
                                        <div className="w-[200px] h-1.5 mb-2 bg-[#3b3f55] rounded-[20px]" />
                                        <div className="w-[123px] h-1.5  bg-[#3b3f55] rounded-[20px]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* row close  */}
                    </div>


                    <div className='grid grid-rows-2 gap-4'>
                        <div className="w-full h-[300px] md:h-auto  bg-[#1c2028] rounded-[20px]  p-5">
                            <div className="self-stretch  text-2xl font-semibold  leading-[31.20px]">Improve Compliance</div>
                            <div className="text-[#d0d1dd] text-base font-normal  leading-normal">Stay compliant with the latest labor laws and regulations.</div>
                            <div className="w-full h-[123px] mt-4 relative rounded-xl bg-[#292f3b] ">
                                <div className='py-1.5 px-3.5'>
                                    <div className='my-2'>
                                        <div className="w-[70%] h-3  opacity-60 bg-[#474a67] rounded-[60px] inline-block mr-5" />
                                        <div className="gap-1 inline-flex">
                                            <div className="w-3 h-3 opacity-70 bg-[#00d563] rounded-[60px]" />
                                            <div className="w-3 h-3 opacity-40 bg-[#0ca357] rounded-[60px]" />
                                            <div className="w-3 h-3 opacity-40 bg-[#0ca357] rounded-[60px]" />
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2'>
                                        <div className='grid gap-2'>
                                            <div className="w-[80%] h-[7px] opacity-60 bg-[#474a67] rounded-[60px]" />
                                            <div className="w-[70%] h-[7px] opacity-60 bg-[#474a67] rounded-[60px]" />
                                            <div className="w-[40%] h-[7px]  opacity-60 bg-[#474a67] rounded-[60px]" />
                                            <div className="w-[60%] h-[7px]  opacity-60 bg-[#474a67] rounded-[60px]" />
                                        </div>

                                        <div className='grid gap-2'>
                                            <div className="w-[80%] h-[7px]  opacity-60 bg-[#474a67] rounded-[60px]" />
                                            <div className="w-[70%] h-[7px]  opacity-60 bg-[#474a67] rounded-[60px]" />
                                            <div className="w-[40%] h-[7px]  opacity-60 bg-[#474a67] rounded-[60px]" />
                                            <div className="w-[60%] h-[7px]  opacity-60 bg-[#474a67] rounded-[60px]" />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 left-[147px] top-[105px] absolute bg-[#00d563] rounded-lg justify-start items-center gap-2.5 inline-flex">
                                    <div className="w-6 h-6 relative" >
                                      <Image src={Plus} alt={Plus}></Image>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* row close  */}
                        {/* row 2  */}
                        <div className=' bg-[#1c2028] rounded-[20px] p-5 '>
                            <div className="h-[100px]  flex-col justify-start items-start gap-2 inline-flex mb-5 mr-3">
                                <div className="self-stretch  text-2xl font-semibold  leading-[31.20px]">Tax and Expense</div>
                                <div className="text-[#d0d1dd] text-base font-normal  leading-normal">Let employees manage tax declarations and proofs. File and update expenses .</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className='relative'>
                                    <div className='absolute'>
                                       <Image src={Circle} alt={Circle}></Image>
                                    </div>
                                    <div className='absolute top-[18px] left-[18px]' >
                                    <Image src={Circletwo} alt={Circletwo}></Image>
                                    </div>
                                    <div className="absolute top-[36px] left-[36px]">
                                    <Image src={Circlethree} alt={Circlethree}></Image>
                                    </div>
                                </div>
                                <div>
                                    <div className="h-8 px-1 bg-[#1c2028] justify-start items-center gap-0.5 inline-flex">
                                        <div className="h-8 px-3 shadow-inner justify-center items-center gap-2.5 flex">
                                            <div className="w-8 h-8 relative rounded-[44px]">
                                                <div className="w-3 h-3 left-[10px] top-[10px] absolute bg-[#93660d] rounded-full" />
                                            </div>
                                        </div>
                                        <div className="text-[#cfd0dc] text-sm font-normal">Income</div>
                                    </div>
                                    <div className="h-8 px-1 bg-[#1c2028] justify-start items-center gap-0.5 inline-flex">
                                        <div className="h-8 px-3 shadow-inner justify-center items-center gap-2.5 flex">
                                            <div className="w-8 h-8 relative rounded-[44px]">
                                                <div className="w-3 h-3 left-[10px] top-[10px] absolute bg-[#005c2b] rounded-full" />
                                            </div>
                                        </div>
                                        <div className="text-[#cfd0dc] text-sm font-normal">Investment</div>
                                    </div>
                                    <div className="h-8 px-1 bg-[#1c2028] justify-start items-center gap-0.5 inline-flex">
                                        <div className="h-8 px-3 shadow-inner justify-center items-center gap-2.5 flex">
                                            <div className="w-8 h-8 relative rounded-[44px]">
                                                <div className="w-3 h-3 left-[10px] top-[10px] absolute bg-[#1849a9] rounded-full" />
                                            </div>
                                        </div>
                                        <div className="text-[#cfd0dc] text-sm font-normal">Savings</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* row close  */}
                    </div>
                    </div>

                    <div className='w-full'>
                        <div className="w-full h-full bg-[#1c2028] rounded-3xl py-5 px-2.5 sm:p-5" >
                            <div className="self-stretch  text-2xl font-semibold  leading-[31.20px]">Boost Employee Engagement</div>
                            <div className="text-[#d0d1dd] text-base font-normal  leading-normal">Engage your workforce with self-service tools and performance management.</div>
                            <div className="w-full  bg-[#292f3b] rounded-[7.18px] shadow p-4 sm:px-5 my-2 mt-5">
                                <div className='p-2 '>
                                    <h3 className='inline-block'>Create an Event</h3>
                                    <div className='inline-block float-right'>
                                        <Image src={Cross} alt={Cross}></Image>
                                    </div>
                                </div>
                                <div className='bg-[#003d1c] p-2 rounded-lg inline-block mt-5'>
                                    <button type="button" class="text-[#0f1228] bg-[#22a660] hover:bg-[#22a660] focus:ring-4 hover:text-[#0f1228] font-medium rounded-lg text-xs px-2.5 py-2.5 me-2 ">Event</button>
                                    <button type="button" class=" bg-[#003d1c] hover:bg-[#22a660] focus:ring-4 hover:text-[#0f1228] font-medium rounded-lg text-xs px-2.5 py-2.5 me-2">Reminder</button>
                                    <button type="button" class=" bg-[#003d1c] hover:bg-[#22a660] focus:ring-4 hover:text-[#0f1228] font-medium rounded-lg text-xs px-2.5 py-2.5 me-2">Task</button>
                                </div>
                                <div className='p-4 text-[#cfd0dc] mt-5'>
                                    Add title
                                </div>
                                <div className="w-full bg-[#292f3b] rounded-l-lg mt-5">
                                    <div className="p-3 mr-2 inline-block bg-[#93660d] rounded-full">
                                       <Image src={Time} alt={Time}></Image>
                                    </div>
                                    <div className='inline-block'>
                                        <div className="">
                                            <span className="text-[#cfd0dc] text-[.60rem] sm:text-xs font-normal  leading-[14.36px]">Thursday. December 5      12:00pm    -    1:00pm<br /></span>
                                            <span className="text-[#989ab2] text-[.60rem] sm:text-xs font-normal  leading-[14.36px]">Time zone - Does not repeat</span>
                                        </div>
                                    </div>
                                </div>
                                <div className=" text-left text-sm text-[#f7a708] font-semibold mt-5 ml-12">Find a  time</div>
                                <div className='mt-5'>
                                    <button type="button" class="text-[#0f1228] bg-[#00d563] hover:bg-[#00d563] focus:ring-4 hover:text-[#0f1228] font-medium rounded-lg text-xs px-2.5 py-2.5 me-2 ">
                                     <Image className='inline mr-2.5' src={People} alt={People}></Image>
                                        Add People </button>
                                    <button type="button" class="text-[#00d563] border-2  border-[#00d563]  focus:ring-4  font-medium rounded-lg text-xs px-2 py-2 me-2 ">
                                    <Image className='inline mr-2.5' src={Location} alt={Location}></Image>
                                        Add location </button>
                                </div>
                                <div className="w-full bg-[#292f3b] rounded-l-lg mt-5">
                                    <div className="p-3 mr-2 inline-block bg-[#93660d] rounded-full">
                                       <Image src={Calendar} alt={Calendar}></Image>
                                    </div>
                                    <div className='inline-block'>
                                        <div className="">
                                            <span className="text-[#cfd0dc] text-[.60rem] sm:text-xs font-normal  leading-[14.36px]">John Deo <br /></span>
                                            <span className="text-[#989ab2] text-[.60rem] sm:text-xs font-normal  leading-[14.36px]"> Busy - Default visibllity - notity 30 minutes before</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-right mt-5'>
                                <button type="button" class="text-[#00d563] border-2  border-[#00d563]  focus:ring-4  font-medium rounded-lg text-xs px-5 py-2.5 me-2 ">
                                Close
                                </button>
                                <button type="button" class="text-[#0f1228] border-2  border-[#00d563]  bg-[#00d563] hover:bg-[#00d563] focus:ring-4 hover:text-[#0f1228] font-medium rounded-lg text-xs px-5 py-2.5 me-2 ">
                                Save
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HR_Operations
