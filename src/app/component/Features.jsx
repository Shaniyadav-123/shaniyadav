import { title } from 'process'
import React from 'react'

function Features() {
    const HRlist = [
        {
            title:'Time and Attendance Tracking',
            description : 'Track employee hours and attendance effortlessly with our intuitive time tracking tools.'
        },
        
        {
            title:'Performance Management',
            description : 'Enhance employee performance with goal setting, feedback, and performance reviews.'
        },
        {
            title:'Employee Self-Service',
            description : 'Empower employees to manage their own information and requests, reducing the workload on HR staff.'
        },
        {
            title:'Payroll Management',
            description : 'Simplify payroll processing with automated calculations, ensuring accuracy and compliance.'
        },
        {
            title:'Recruitment and Onboarding',
            description : 'Streamline the hiring process and provide a seamless onboarding experience for new hires.'
        },

    ]


    return (
        <>
            <div className='bg-[#1c2028] lg:h-[800px] overflow-hidden'>
                <div className='max-w-[1270px] mx-auto py-10'>
                    <div className='grid lg:grid-cols-3'>
                        <div className='lg:col-span-2'>
                        {/* Key Features That Simplify HR Management  */}
                            <div className='mx-auto px-5'>
                                <h1 className="md:w-[640px] text-center mx-auto text-2xl sm:text-5xl font-normal">Key Features That Simplify HR Management</h1>
                            </div>
                            <div className='grid sm:grid-cols-3 mt-20 relative'>
                           
    <div className="w-[929px] h-[929px] left-[-0px] top-0 absolute bg-[#1c2330] rounded-full opacity-50" />
    <div className="w-[764.05px] h-[764.05px] left-[82.48px] top-[82.48px] absolute bg-[#242a35] rounded-full opacity-50"  />
    <div className="w-[599.09px] h-[599.09px] left-[164.95px] top-[164.95px] absolute bg-[#303745] rounded-full opacity-50" />

                                {/* May 2021  */}
                                <div className='grid place-items-center relative px-4 py-5'>
                                    <div className="sm:py-3 py-6 px-9 sm:px-6 w-full sm:w-auto bg-[#05050e] rounded-3xl flex-col justify-start items-start gap-2.5  inline-flex">
                                        <div className="flex-col w-full sm:w-auto justify-start items-center gap-6 flex">
                                            <div className="self-stretch h-[82px] flex-col justify-start items-start gap-3 flex">
                                                <div className="self-stretch  text-lg">May 2021</div>
                                                <div className="flex-col justify-start items-start gap-2 flex">
                                                    <div className="w-[148px] justify-start items-center gap-6 inline-flex">
                                                        <div className="grow shrink basis-0  text-xs">Salary</div>
                                                        <div className="grow shrink basis-0  text-xs">$863.00</div>
                                                    </div>
                                                    <div className="w-[148px] justify-start items-center gap-6 inline-flex">
                                                        <div className="grow shrink basis-0  text-xs ">Tax</div>
                                                        <div className="grow shrink basis-0  text-xs">$8</div>
                                                    </div>
                                                    <div className="w-[148px] justify-start items-center gap-6 inline-flex">
                                                        <div className="grow shrink basis-0  text-xs ">Others</div>
                                                        <div className="grow shrink basis-0  text-xs">$63</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="w-full sm:self-stretch px-6 py-1.5 bg-[#00d563] rounded-lg my-3">
                                                <span className="text-[#0f1228] text-sm font-medium">Calculate</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                 {/* 3st grid close  */}
                                <div className='sm:col-span-2 lg:w-[500px] relative z-10'>
                                    {/* Total earning  */}
                                    <div className='mx-auto lg:w-[350px] p-4'>
                                        <div className="sm:p-6 p-9 bg-[#05050e] w-full sm:w-auto rounded-3xl flex-col justify-start items-start gap-2.5 inline-flex">
                                            <div className="justify-start items-start sm:gap-[200px] inline-flex">
                                                <div className="flex-col justify-start items-start gap-3 inline-flex">
                                                    <div className="text-[#cfd5e2] text-xs font-medium ">Total earning</div>
                                                    <div className="justify-start items-end gap-4 inline-flex">
                                                        <div className="text-[#f0f2f5] text-2xl font-semibol">$13,690</div>
                                                        <div className="justify-start items-center flex">
                                                            <div className="text-[#00d563] text-xs font-semibold">36%</div>
                                                            <div className="w-3 h-3 pl-0.5 pr-[3px] pt-1 pb-[3.75px] justify-center items-center flex">
                                                                <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="&#240;&#159;&#166;&#134; icon &#34;chevron-down&#34;">
                                                                        <path id="Vector" d="M3.77203 0.112653L6.88731 3.22795C7.03756 3.3782 7.03756 3.62179 6.88731 3.77202L6.52397 4.13537C6.37398 4.28536 6.13088 4.28564 5.98054 4.13601L3.49999 1.66708L1.01946 4.13601C0.869116 4.28565 0.626024 4.28536 0.476033 4.13537L0.112686 3.77202C-0.0375619 3.62177 -0.037562 3.37818 0.112686 3.22795L3.22795 0.112653C3.3782 -0.0375787 3.62179 -0.0375788 3.77203 0.112653Z" fill="#00D563" />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-4 h-4 p-0.5 justify-center items-center absolute sm:relative right-10 sm:right-auto flex">
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g id="&#240;&#159;&#166;&#134; icon &#34;Info Circle&#34;">
                                                            <path id="Vector" d="M6 0C2.68652 0 0 2.68749 0 6C0 9.31444 2.68652 12 6 12C9.31348 12 12 9.31444 12 6C12 2.68749 9.31348 0 6 0ZM6 2.66129C6.56119 2.66129 7.01613 3.11623 7.01613 3.67742C7.01613 4.23861 6.56119 4.69355 6 4.69355C5.43881 4.69355 4.98387 4.23861 4.98387 3.67742C4.98387 3.11623 5.43881 2.66129 6 2.66129ZM7.35484 8.80645C7.35484 8.96678 7.22485 9.09677 7.06452 9.09677H4.93548C4.77515 9.09677 4.64516 8.96678 4.64516 8.80645V8.22581C4.64516 8.06548 4.77515 7.93548 4.93548 7.93548H5.22581V6.3871H4.93548C4.77515 6.3871 4.64516 6.2571 4.64516 6.09677V5.51613C4.64516 5.3558 4.77515 5.22581 4.93548 5.22581H6.48387C6.6442 5.22581 6.77419 5.3558 6.77419 5.51613V7.93548H7.06452C7.22485 7.93548 7.35484 8.06548 7.35484 8.22581V8.80645Z" fill="#CFD5E2" />
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="self-stretch grow shrink basis-0 items-start justify-between inline-flex pr-3 pt-5">
                                                <div className="h-[97px] relative">
                                                    <div className="w-[10.86px] h-[97px] left-0 top-0 absolute bg-[#0b4a6f] rounded-[38px]" />
                                                    <div className="w-[10.86px] h-[71px] left-0 top-[26px] absolute bg-[#36bffa] rounded-[38px]" />
                                                </div>
                                                <div className="h-[97px] relative">
                                                    <div className="w-[10.86px] h-[97px] left-0 top-0 absolute bg-[#0b4a6f] rounded-[38px]" />
                                                    <div className="w-[10.86px] h-[58px] left-0 top-[39px] absolute bg-[#36bffa] rounded-[38px]" />
                                                </div>
                                                <div className="h-[97px] relative">
                                                    <div className="w-[10.86px] h-[97px] left-0 top-0 absolute bg-[#0b4a6f] rounded-[38px]" />
                                                    <div className="w-[10.86px] h-[30px] left-0 top-[67px] absolute bg-[#36bffa] rounded-[38px]" />
                                                </div>
                                                <div className="h-[97px] relative">
                                                    <div className="w-[10.86px] h-[97px] left-0 top-0 absolute bg-[#0b4a6f] rounded-[38px]" />
                                                    <div className="w-[10.86px] h-[78px] left-0 top-[19px] absolute bg-[#36bffa] rounded-[38px]" />
                                                </div>
                                                <div className="h-[97px] relative">
                                                    <div className="w-[10.86px] h-[97px] left-0 top-0 absolute bg-[#0b4a6f] rounded-[38px]" />
                                                    <div className="w-[10.86px] h-[49px] left-0 top-[48px] absolute bg-[#36bffa] rounded-[38px]" />
                                                </div>
                                                <div className="h-[97px] relative">
                                                    <div className="w-[10.86px] h-[97px] left-0 top-0 absolute bg-[#0b4a6f] rounded-[38px]" />
                                                    <div className="w-[10.86px] h-[58px] left-0 top-[39px] absolute bg-[#36bffa] rounded-[38px]" />
                                                </div>
                                                <div className="h-[97px] relative">
                                                    <div className="w-[10.86px] h-[97px] left-0 top-0 absolute bg-[#0b4a6f] rounded-[38px]" />
                                                    <div className="w-[10.86px] h-[71px] left-0 top-[26px] absolute bg-[#36bffa] rounded-[38px]" />
                                                </div>
                                                <div className="h-[97px] relative">
                                                    <div className="w-[10.86px] h-[97px] left-0 top-0 absolute bg-[#0b4a6f] rounded-[38px]" />
                                                    <div className="w-[10.86px] h-[30px] left-0 top-[67px] absolute bg-[#36bffa] rounded-[38px]" />
                                                </div>
                                                <div className="h-[97px] relative">
                                                    <div className="w-[10.86px] h-[97px] left-0 top-0 absolute bg-[#0b4a6f] rounded-[38px]" />
                                                    <div className="w-[10.86px] h-[49px] left-0 top-[48px] absolute bg-[#36bffa] rounded-[38px]" />
                                                </div>
                                                <div className="h-[97px] relative">
                                                    <div className="w-[10.86px] h-[97px] left-0 top-0 absolute bg-[#0b4a6f] rounded-[38px]" />
                                                    <div className="w-[10.86px] h-[78px] left-0 top-[19px] absolute bg-[#36bffa] rounded-[38px]" />
                                                </div>
                                                <div className="h-[97px] relative">
                                                    <div className="w-[10.86px] h-[97px] left-0 top-0 absolute bg-[#0b4a6f] rounded-[38px]" />
                                                    <div className="w-[10.86px] h-[71px] left-0 top-[26px] absolute bg-[#36bffa] rounded-[38px]" />
                                                </div>
                                                <div className="h-[97px] relative">
                                                    <div className="w-[10.86px] h-[97px] left-0 top-0 absolute bg-[#0b4a6f] rounded-[38px]" />
                                                    <div className="w-[10.86px] h-[78px] left-0 top-[19px] absolute bg-[#36bffa] rounded-[38px]" />
                                                </div>
                                                <div className="h-[97px] relative">
                                                    <div className="w-[10.86px] h-[97px] left-0 top-0 absolute bg-[#0b4a6f] rounded-[38px]" />
                                                    <div className="w-[10.86px] h-[49px] left-0 top-[48px] absolute bg-[#36bffa] rounded-[38px]" />
                                                </div>
                                                <div className="h-[97px] relative">
                                                    <div className="w-[10.86px] h-[97px] left-0 top-0 absolute bg-[#0b4a6f] rounded-[38px]" />
                                                    <div className="w-[10.86px] h-[58px] left-0 top-[39px] absolute bg-[#36bffa] rounded-[38px]" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='grid sm:grid-cols-2 mt-5 px-4 lg:px-0'>
                                        {/* TODAY  */}
                                        <div className="sm:w-44 w-full p-9 sm:p-6   bg-[#05050e] rounded-3xl flex-col justify-start items-start gap-[18px] inline-flex">
                                            <div className="rounded-[61.11px] flex-col justify-start items-start flex">
                                                <div className="px-[19.56px] py-[7.33px] bg-[#8956f8]/10 rounded-[56.22px] flex-col justify-center items-center gap-[12.22px] flex">
                                                    <div className="justify-center items-center gap-[4.89px] inline-flex">
                                                        <div className="text-[#8956f8] text-xs font-medium ">TODAY</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="self-stretch h-12 flex-col justify-start items-start gap-1 flex">
                                                <div className="text-[#cfd5e2] text-xs font-medium ">Team</div>
                                                <div className="w-[130px] text-[#cfd0dc] text-2xl font-semibold">On Holiday</div>
                                            </div>
                                            <div className="w-[42px] h-[42px] p-[10.50px] bg-[#8956f8] rounded-[10.50px] justify-center items-center inline-flex">
                                                <div className="w-[21px] h-[21px] pl-[2.62px] pr-[3.37px] py-[3.94px] justify-center items-center inline-flex" >
                                                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g id="&#240;&#159;&#166;&#134; icon &#34;Heart&#34;">
                                                            <path id="Vector" d="M13.6691 1.00157C12.0636 -0.366572 9.67597 -0.120483 8.20236 1.4L7.62522 1.99471L7.04809 1.4C5.57741 -0.120483 3.18683 -0.366572 1.58139 1.00157C-0.258423 2.57185 -0.355101 5.39016 1.29135 7.09228L6.9602 12.9457C7.3264 13.3236 7.92112 13.3236 8.28732 12.9457L13.9562 7.09228C15.6055 5.39016 15.5089 2.57185 13.6691 1.00157Z" fill="white" />
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        {/* 340  */}
                                        <div className='grid place-items-center mt-10 sm:mt-0 sm:justify-end'>
                                            <div className="h-[100px] w-full  pt-2 px-2 bg-[#05050e] rounded shadow border flex-col justify-start items-start gap-[13.05px] inline-flex">
                                                <div className="self-stretch justify-start items-end gap-[8.70px] inline-flex">
                                                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-[8.70px] inline-flex">
                                                        <div className="self-stretch text-[#cfd0dc] text-xl font-semibold  leading-normal">340</div>
                                                        <div className="self-stretch justify-start items-center gap-[4.35px] inline-flex">
                                                            <div className="justify-center items-center gap-[2.18px] flex">
                                                                <div className="h-[10.88px]">
                                                                    <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <g id="arrow-up">
                                                                            <path id="Icon" d="M5.48942 9.42482V3.08032M5.48942 3.08032L2.31717 6.25257M5.48942 3.08032L8.66167 6.25257" stroke="#00D563" stroke-width="1.08763" stroke-linecap="round" stroke-linejoin="round" />
                                                                        </g>
                                                                    </svg>
                                                                </div>
                                                                <div className="text-center text-[#00d563] text-xs  leading-[10.88px]">40%</div>
                                                            </div>
                                                            <div className="grow shrink basis-0 text-[#989ab2] text-xs font-medium  leading-[10.88px]">vs last month</div>
                                                        </div>
                                                    </div>
                                                    <div className="w-[69.61px] h-[34.80px] relative" >
                                                        <svg width="72" height="37" viewBox="0 0 72 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g id="_Chart">
                                                                <path id="Background base" d="M70.9485 0.948364C59.6394 1.89079 58.939 24.453 47.7457 27.0515C38.5155 29.1942 33.8416 17.031 24.543 18.3504C14.4572 19.7815 11.2297 32.456 1.34021 35.7525H70.9485V0.948364Z" fill="url(#paint0_linear_287_4975)" />
                                                                <path id="Background gradient" d="M70.9485 0.948364C59.6394 1.89079 58.939 24.453 47.7457 27.0515C38.5155 29.1942 33.8416 17.031 24.543 18.3504C14.4572 19.7815 11.2297 32.456 1.34021 35.7525H70.9485V0.948364Z" fill="url(#paint1_linear_287_4975)" />
                                                                <path id="Line" d="M1.00037 35.9484C10.9456 32.6333 14.1912 19.8875 24.3337 18.4484C33.6846 17.1215 38.3849 29.3532 47.667 27.1984C58.9233 24.5853 59.6276 1.89609 71.0004 0.948364" stroke="url(#paint2_linear_287_4975)" stroke-width="1.08763" stroke-linecap="round" stroke-linejoin="round" />
                                                            </g>
                                                            <defs>
                                                                <linearGradient id="paint0_linear_287_4975" x1="36.1443" y1="0.948364" x2="36.1443" y2="35.7525" gradientUnits="userSpaceOnUse">
                                                                    <stop stop-color="#F7D1C9" />
                                                                    <stop offset="1" stop-color="#DCCBFE" />
                                                                </linearGradient>
                                                                <linearGradient id="paint1_linear_287_4975" x1="36.1443" y1="0.948364" x2="36.1443" y2="35.7525" gradientUnits="userSpaceOnUse">
                                                                    <stop offset="0.641167" stop-color="white" stop-opacity="0" />
                                                                    <stop offset="1" stop-color="white" />
                                                                </linearGradient>
                                                                <linearGradient id="paint2_linear_287_4975" x1="36.0004" y1="0.948364" x2="36.0004" y2="35.9484" gradientUnits="userSpaceOnUse">
                                                                    <stop stop-color="#F7D1C9" />
                                                                    <stop offset="1" stop-color="#DCCBFE" />
                                                                </linearGradient>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="self-stretch justify-start items-start gap-[4.35px] inline-flex">
                                                    <div className="grow shrink basis-0 text-[#cfd0dc] text-xs font-medium  leading-[13.05px]">Employee Reports</div>
                                                    <div className="flex-col justify-start items-start inline-flex">                                            
                                                           <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="more-vertical">
                                                                    <g id="Icon">
                                                                        <path d="M5.5103 6.69543C5.76059 6.69543 5.96348 6.49253 5.96348 6.24225C5.96348 5.99197 5.76059 5.78907 5.5103 5.78907C5.26002 5.78907 5.05713 5.99197 5.05713 6.24225C5.05713 6.49253 5.26002 6.69543 5.5103 6.69543Z" stroke="#98A2B3" stroke-width="0.906357" stroke-linecap="round" stroke-linejoin="round" />
                                                                        <path d="M5.5103 3.52318C5.76059 3.52318 5.96348 3.32028 5.96348 3.07C5.96348 2.81972 5.76059 2.61682 5.5103 2.61682C5.26002 2.61682 5.05713 2.81972 5.05713 3.07C5.05713 3.32028 5.26002 3.52318 5.5103 3.52318Z" stroke="#98A2B3" stroke-width="0.906357" stroke-linecap="round" stroke-linejoin="round" />
                                                                        <path d="M5.5103 9.86768C5.76059 9.86768 5.96348 9.66479 5.96348 9.4145C5.96348 9.16422 5.76059 8.96132 5.5103 8.96132C5.26002 8.96132 5.05713 9.16422 5.05713 9.4145C5.05713 9.66479 5.26002 9.86768 5.5103 9.86768Z" stroke="#98A2B3" stroke-width="0.906357" stroke-linecap="round" stroke-linejoin="round" />
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* 4st grid close  */}
                                </div>
                            </div>
                            {/* 2st grid close  */}
                        </div>
          
                        <div>
                        <div className="w-full px-5 lg:w-[350px] xl:w-[450px] mt-[50px] lg:mt-[200px] flex-col justify-start items-start gap-10 mr-[20px] inline-flex relative">
                            
                          {  HRlist.map((list)=>(
                        <div className="bg-[#202530] w-full py-8 px-5" key={list.title}>
                        
                            <div className="self-stretch text-[#c2c2c3] text-xl font-semibold leading-7">{list.title}</div>
                            <div className="text-[#a1a2b0] text-sm font-normal pt-2 leading-tight">{list.description}</div>
                        
                    </div>
                          ))
                    }
                    </div>
                        </div>
                    </div>
                         {/* 1st grid close  */}

                </div>
            </div>
        </>
    )
}

export default Features
