import React from 'react'
import Image from 'next/image'
import Logo from '../img/Logo.svg'
import Facebook from '../img/facebook.svg'
import Instagram from '../img/instagram.svg'
import Twitter from '../img/twitter.svg'
import Youtube from '../img/youtube.svg'
function Footer() {
    return (
        <>
            <div className='bg-[#1C2028] mt-36'>
                <div className=' max-w-[1270px] mx-auto py-20  px-5'>
                <div className='grid grid-cols-1 lg:grid-cols-4'>
                    <div className='col-span-2'>
                        <Image src={Logo} alt='Logo'></Image>
                        <div className='mt-10 mb-5'>
                        <div className='p-3 rounded-full border-[#292F3B] border-[1px] inline-block'>
                           <Image src={Facebook} alt='Facebook'></Image>
                        </div> <div className='p-3 rounded-full border-[#292F3B] border-[1px] inline-block'>
                           <Image src={Instagram} alt='Instagram'></Image>
                        </div> <div className='p-3 rounded-full border-[#292F3B] border-[1px] inline-block'>
                           <Image src={Youtube} alt='Youtube'></Image>
                        </div> <div className='p-3 rounded-full border-[#292F3B] border-[1px] inline-block'>
                           <Image src={Twitter} alt='Twitter'></Image>
                        </div>
                        </div>
                    </div>

                    <div className='col-span-2 lg:pl-16'>
                        <h4 className='text-[#00d563] text-md mb-5'>Subscription</h4>
                        <div className='border-2  border-white/10 inline-block rounded-xl px-5 lg:w-full relative'>
                            <input type="text" className='h-full bg-transparent w-full outline-none /10 my-2.5 pr-36 placeholder-white/10' placeholder='E-mail' />
                            <button type="button" class="text-[#0f1228] absolute right-5 top-1 bg-[#00d563] hover:bg-[#00d563] focus:ring-4 hover:text-[#0f1228] font-medium rounded-lg text-xs px-10 py-2.5">
                                Subscribe
                            </button>
                        </div>
                    </div>
                   </div> 
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div>
                        <h4 className='text-[#00d563] text-md my-5'>Info</h4>
                        <div><a className='hover:text-[#00d563] '  href="/">Core HR</a></div>
                        <div><a className='hover:text-[#00d563] ' href="/">Payroll</a></div>
                        <div><a className='hover:text-[#00d563] ' href="/">Hiring & Onboarding</a></div>
                        <div><a className='hover:text-[#00d563] ' href="/">Time Attendance</a></div>
                        <div><a className='hover:text-[#00d563] ' href="/">Performance</a></div>
                    </div>
                    <div>
                        <h4 className='text-[#00d563] text-md my-5'>About us</h4>
                        <div><a className='hover:text-[#00d563] ' href="/">Gallery</a></div>
                        <div><a className='hover:text-[#00d563] ' href="/">Technologies</a></div>
                        <div><a className='hover:text-[#00d563] ' href="/">Contacts</a></div>
                    </div>
                    <div>
                        <h4 className='text-[#00d563] text-md my-5'>Contact us</h4>
                        <div className=''>Sales: +91 89292 08062</div>
                        <div><a className='hover:text-[#00d563] ' href="/">sales@gitlime.com</a></div>
                        <p className='mt-5 '>For Support:</p>
                        <div><a className='hover:text-[#00d563] ' href="/">support@gitlime.com</a></div>
                        <p className='mt-5 '>For Marketing:</p>
                        <div><a className='hover:text-[#00d563] ' href="/">marketing@keka.com</a></div>
                    </div>
               </div>
               </div>   
            </div>
        </>
    )
}

export default Footer
