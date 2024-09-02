import React from 'react'
import customer1 from '../img/customer1.png'
import customer2 from '../img/customer2.png'
import customer3 from '../img/customer3.png'
import customer4 from '../img/customer4.png'
import avatar1 from '../img/Avatar (1).png'
import avatar2 from '../img/Avatar (2).png'
import avatar3 from '../img/Avatar (3).png'
import Image from 'next/image'
function Story() {
  return (
    <div>
               <div className='relative top-5 pb-10'>
                <div class="flex justify-center">
                <div class="px-2 py-1.5 rounded-[100px] border border-[#00d563] justify-start items-center gap-1.5 inline-flex">
                                    <div class="pr-1 justify-start items-start gap-2 flex">
                                        <div class="justify-start items-start flex">
                                            <Image class="w-6 h-6 rounded-[200px] border" src={avatar1} alt={avatar1} />
                                            <Image class="w-6 h-6 rounded-[200px] border border-white" src={avatar2} alt={avatar2} />
                                            <Image class="w-6 h-6 rounded-[200px] border border-white" src={avatar3} alt={avatar3}/>
                                        </div>
                                    </div>
                                    <div class="text-center text-[#00d563] text-xs font-medium  leading-[18px]">Trusted by 2000+ People</div>
                                </div>
                </div>
                <div className='w-full flex justify-center items-center mt-10'><div class="w-[565px] text-center text-[#fbfcfc] text-5xl font-normal  leading-[57.60px]">Real Stories from Happy Customers</div></div>
                <div className='w-full h-[650.86px] relative  grid grid-cols-1 px-20'>
                    <div className="h-[113px] px-3 py-2 bg-[#292f3b] rounded-2xl shadow justify-self-start items-center gap-6 inline-flex md:ml-20 xs:ml-0">
                        <Image className="w-16 h-[90px] rounded-lg" src={customer1} alt={customer1}/>
                        <div className="w-[313px] flex-col justify-start items-start gap-3 inline-flex">
                            <div><span className="text-white text-lg font-medium ">Dr. N V Rao </span><span className="text-white text-sm font-medium ">(CEO, & MD)</span></div>
                            <div className="w-[313px] text-[#cfd0dc] text-base font-normal  leading-tight block md:block xs:hidden ">This HRMS has transformed our HR operations. It’s user-friendly and has significantly improved our efficiency</div>
                        </div>
                    </div>
                    <div className="h-[113px] px-3 py-2 bg-[#292f3b] rounded-2xl shadow justify-self-end  items-center gap-6 inline-flex">
                    <Image className="w-16 h-[90px] rounded-lg" src={customer2} alt={customer2} />
                        <div className="w-[313px] flex-col justify-start items-start gap-3 inline-flex">
                            <div><span className="text-white text-lg font-medium ">Dr. N V Rao </span><span className="text-white text-sm font-medium ">(CEO, & MD)</span></div>
                            <div className="w-[313px] text-[#cfd0dc] text-base font-normal  leading-tight md:block xs:hidden ">This HRMS has transformed our HR operations. It’s user-friendly and has significantly improved our efficiency</div>
                        </div>
                    </div>
                    <div className="h-[113px] px-3 py-2 bg-[#292f3b] rounded-2xl shadow justify-self-center items-center gap-6 inline-flex">
                        <Image className="w-16 h-[90px] rounded-lg" src={customer2} alt={customer2} />
                        <div className="w-[313px] flex-col justify-start items-start gap-3 inline-flex">
                            <div><span className="text-white text-lg font-medium ">Dr. N V Rao </span><span className="text-white text-sm font-medium ">(CEO, & MD)</span></div>
                            <div className="w-[313px] text-[#cfd0dc] text-base font-normal  leading-tight md:block xs:hidden ">Saifast’s advanced analytics and insights empowered us to make data-driven decisions</div>
                        </div>
                    </div>
                    <div className="h-[113px] px-3 py-2 bg-[#292f3b] rounded-2xl shadow justify-self-start items-center gap-6 inline-flex">
                        <Image className="w-16 h-[90px] rounded-lg" src={customer3} alt={customer3}/>
                        <div className="w-[313px] flex-col justify-start items-start gap-3 inline-flex ">
                            <div><span className="text-white text-lg font-medium ">Dr. N V Rao </span><span className="text-white text-sm font-medium ">(CEO, & MD)</span></div>
                            <div className="w-[313px] text-[#cfd0dc] text-base font-normal  leading-tight md:block xs:hidden ">The payroll management tool is a lifesaver. It ensures our payroll is accurate and compliant every time</div>
                        </div>
                    </div>
                    <div class="h-[113px] px-3 py-2 bg-[#292f3b] rounded-2xl shadow justify-self-end items-center gap-6 inline-flex  md:mr-20 xs:mr-0 ">
                        <Image className="w-16 h-[90px] rounded-lg" src={customer4} alt={customer4}/>
                        <div className="w-[313px] flex-col justify-start items-start gap-3 inline-flex ">
                            <div><span className="text-white text-lg font-medium ">Dr. N V Rao </span><span className="text-white text-sm font-medium ">(CEO, & MD)</span></div>
                            <div class="w-[313px] text-[#cfd0dc] text-base font-normal  leading-tight md:block xs:hidden">Saifast’s advanced analytics and insights empowered us to make data-driven decisions</div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Story
