'use client'
import React from 'react'
import avatar1 from '../img/Avatar (1).png'
import avatar2 from '../img/Avatar (2).png'
import avatar3 from '../img/Avatar (3).png'
import imge1 from '../img/Hero_img1.svg'
import imge2 from '../img/Hero_img2.svg'
import imge3 from '../img/Hero_img3.svg'
import frame from '../img/Frame (1).svg'
import frame1 from '../img/Frame (2).svg'
import frame2 from '../img/Frame (3).svg'
import frame3 from '../img/Frame (4).svg'
import frame4 from '../img/Frame (5).svg'
import frame5 from '../img/Frame (6).svg'
import Image from 'next/image'
function Hero() {
  return (
    <div>
         <div className='w-full flex justify-center relative '>
                <div className='w-[50%] h-[50%] top-5 absolute flex justify-between z-10 '>
                    <div className='w-12 h-12 relative lg:left-16 lg:top-[30%] md:top-[30%] xs:top-[25%]'><Image src={imge1} alt={imge1}/></div>
                    <div className='w-12 h-12'><Image src={imge2} alt={imge2}/></div>
                    <div className='w-12 h-12 relative lg:right-16 lg:top-[30%] md:top-[30%] xs:top-[25%]'><Image src={imge3} alt={imge3}/></div>
                </div>
                <div class="w-[50%] xl:h-[800px]  md:h-[850px] sm:h-[900px] h-[1000px] opacity-40 overflow-hidden">

                    <div class="w-full aspect-square flex justify-center items-center bg-[#1c2028] rounded-full mt-10">
                        <div class="w-[85%] aspect-square flex justify-center items-center bg-[#242a35] rounded-full">
                            <div class="w-[81%] aspect-square bg-[#303745] rounded-full"></div>
                        </div>

                    </div>
                </div>

                <div class="w-full h-[70%] left-0 top-60 absolute bg-gradient-to-b bg-[#05050e] pb-10">
                    <div class=" w-full flex justify-center items-center gap-12 ">
                        <div>
                            <div class="self-stretch h-[222px] flex-col justify-start items-center gap-8 flex">
                                <div class="px-2 py-1.5 rounded-[100px] border border-[#00d563] justify-start items-center gap-1.5 inline-flex">
                                    <div class="pr-1 justify-start items-start gap-2 flex">
                                        <div class="justify-start items-start flex">
                                            <Image class="w-6 h-6 rounded-[200px] border" src={avatar1} alt={avatar1}/>
                                            <Image class="w-6 h-6 rounded-[200px] border border-white" src={avatar2} alt={avatar2}/>
                                            <Image class="w-6 h-6 rounded-[200px] border border-white" src={avatar3} alt={avatar3}/>
                                        </div>
                                    </div>
                                    <div class="text-center text-[#00d563] text-xs font-medium  leading-[18px]">Trusted by 2000+ People</div>
                                </div>
                                <div class="self-stretch text-center text-white text-2xl sm:text-5xl  font-medium  leading-[76.80px]">Simplify Your HR Processes with<br />Our All-in-One HRMS.</div>
                            </div>
                            <div class="flex justify-center gap-7 mt-10 ">
                                <div class="justify-start items-start gap-10 flex">
                                    <div class="w-[175px] h-12 px-6 py-3 bg-[#00d563] rounded-lg justify-center items-center gap-2.5 flex">
                                        <div class="text-[#05050e] text-base font-medium ">Get Started Free</div>
                                    </div>
                                </div>
                                <div class="rounded-lg border border-[#00d563] justify-start items-start gap-10 flex">
                                    <div class="w-[175px] h-12 px-6 py-3 rounded-lg justify-center items-center gap-2.5 flex">
                                        <div class="text-[#00d563] text-base font-medium ">Login</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full mt-40 flex justify-evenly flex-wrap relative z-10'>
                        <div className='w-[200px] flex place-items-center'>  <Image className='w-[160px]' src={frame} alt={frame} /> </div>
                        <div className='w-[200px] flex place-items-center'>  <Image className='w-[160px]' src={frame1} alt={frame1}/> </div>
                        <div className='w-[200px] flex place-items-center'> <Image className='w-[160px]' src={frame2} alt={frame2}/> </div>
                        <div className='w-[200px] flex place-items-center'> <Image className='w-[160px]' src={frame3} alt={frame3}/> </div>
                        <div className='w-[200px] flex place-items-center'> <Image className='w-[160px]' src={frame4} alt={frame4}/> </div>
                        <div className='w-[200px] flex place-items-center'> <Image className='w-[160px]' src={frame5} alt={frame5} /> </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Hero
