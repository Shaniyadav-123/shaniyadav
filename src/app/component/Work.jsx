import React from 'react'
import Image from 'next/image'
import Manage from '../img/Manage.png'
import Analyze from '../img/Analyze.png'
import Sign from '../img/Sign.svg'
import Set from '../img/Set.svg'
function Work() {
    const list = [
        {
            img:Sign,
            heading:'1. Sign Up',
            para:'Create an account to get started with Gitlime'
        },
        {
            img:Set,
            heading:'2. Set Up',
            para:'Configure your company’s HR settings and import employee data'
        },
        {
            img:Manage,
            heading:'3. Manage & Track',
            para:'Utilize our tools to manage HR tasks, track attendance, and process payroll'
        },
        {
            img:Sign,
            heading:'4. Analyze & Optimize',
            para:'Analyze reports and optimize your HR processes for efficiency'
        }
    ]
    return (
        <div className='px-2 bg-black' >
            <div className='max-w-[1000px] xl:max-w-[1270px] mx-auto px-5 py-20 sm:p-20 mt-5 sm:mt-20 bg-[#1C2028] rounded-3xl w-full'>
                <div className='mx-auto px-5'>
                    <h1 className="md:w-[640px] text-center mx-auto text-[#fbfcfc] text-2xl sm:text-5xl font-normal">How It Works</h1>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 mt-10'>
                   {list.map((list, index)=>(

                  
                    <div key={index}>
                        <div className='p-3 rounded-full border-[#292F3B] border-[1px] inline-block'>
                           <Image src={list.img} alt={list.img}></Image>
                        </div>
                        <h2 className='text-xl font-bold mt-5 mb-2'>{list.heading}</h2>
                        <p className='text-xs  pr-10 '>{list.para}</p>
                    </div>
                    ))}
                   
                </div>
            </div>
        </div>
    )
}

export default Work
