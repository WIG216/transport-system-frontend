import React, { useState } from 'react';
import { removeToken } from '../../../utils/storage';
import { useNavigate, NavLink } from "react-router-dom";
import { MdOutlineContentPaste, MdAssignmentLate, MdAssessment, MdDashboard } from 'react-icons/md';
import { toast } from 'react-toastify';

function Layout({ title, children }) {
    const navigate = useNavigate();


    const handleLogout = () => {
        removeToken();
        navigate('/');
        toast.success("User Logged out", {
            pauseOnHover: false,
            closeOnClick: true,
          })
    }



    return (
        <div className='m-0 font-sans text-base antialiased font-normal dark:bg-slate-900 leading-default bg-gray-50 text-slate-500'>
            <div className='absolute w-full bg-blue-500 dark:hidden min-h-75'></div>
            <div className="fixed inset-y-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto antialiased transition-transform duration-200 -translate-x-full bg-white border-0 shadow-xl dark:shadow-none dark:bg-slate-850 max-w-64 ease-nav-brand z-990 xl:ml-6 rounded-2xl xl:left-0 xl:translate-x-0" aria-expanded="false">
                <div className="h-19">
                    <i className="absolute top-0 right-0 p-4 opacity-50 cursor-pointer fas fa-times dark:text-white text-slate-400 xl:hidden" sidenav-close></i>
                    <NavLink to="/dashboard" className="block px-8 py-6 m-0 text-sm whitespace-nowrap dark:text-white text-slate-700" target="_blank">
                        <img src={require("../../../assets/images/logo/logo.png")} className="inline h-[10rem] transition-all duration-200 dark:hidden ease-nav-brand max-h-8" alt="main_logo" />
                        <img src={require("../../../assets/images/logo/logo.png")} className="hidden transition-all duration-200 dark:inline ease-nav-brand max-h-8" alt="main_logo" />
                        {/* <span className="ml-1 font-semibold transition-all duration-200 ease-nav-brand">Argon Dashboard 2</span> */}
                    </NavLink>
                </div>

                <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />

                <div className="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full">
                    <ul className="flex flex-col pl-0 mb-0">

                        <NavLink className="mt-0.5 w-full" to="/dashboard">
                            <div className="py-2.7 bg-blue-500/13 dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-colors">
                                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                    <i className="relative top-0 text-sm leading-normal text-blue-500 ni ni-tv-2"></i>
                                </div>
                                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Dashboard</span>
                            </div>
                        </NavLink>

                        {/* <NavLink className="mt-0.5 w-full" to="/driver">
                            <div className=" dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors">
                                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                    <i className="fa-solid fa-user-gear"></i>
                                </div>
                                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Driver</span>
                            </div>
                        </NavLink> */}

                        <NavLink className="mt-0.5 w-full" to="/vehicle">
                            <div className=" dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors">
                                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                    <i className="fa-solid fa-car"></i>
                                </div>
                                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Vehicle</span>
                            </div>
                        </NavLink>

                        <NavLink className="mt-0.5 w-full" to="/booking">
                            <div className=" dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors">
                                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                    <i className="relative top-0 text-sm leading-normal text-orange-500 ni ni-calendar-grid-58"></i>
                                </div>
                                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Booking</span>
                            </div>
                        </NavLink>

                        <li className="w-full mt-4">
                            <h6 className="pl-6 ml-2 text-xs font-bold leading-tight uppercase dark:text-white opacity-60">Account pages</h6>
                        </li>

                        {/* <NavLink className="mt-0.5 w-full" to="/login">
                            <div className=" dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors">
                                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                    <i className="relative top-0 text-sm leading-normal text-orange-500 ni ni-single-copy-04"></i>
                                </div>
                                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Sign In</span>
                            </div>
                        </NavLink>

                        <NavLink className="mt-0.5 w-full" to="/register">
                            <div className=" dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors">
                                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                    <i className="relative top-0 text-sm leading-normal text-cyan-500 ni ni-collection"></i>
                                </div>
                                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Sign Up</span>
                            </div>
                        </NavLink> */}

                        <NavLink className="mt-0.5 w-full" to="/register">
                            <a onClick={handleLogout} className=" dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors">
                                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                                </div>
                                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Logout</span>
                            </a>
                        </NavLink>
                    </ul>
                </div>

                <div className="mx-4">
                    <p className="invisible hidden text-gray-800 text-red-500 text-red-600 text-blue-500 dark:bg-white bg-slate-500 bg-gray-500/30 bg-cyan-500/30 bg-emerald-500/30 bg-orange-500/30 bg-red-500/30 after:bg-gradient-to-tl after:from-zinc-800 after:to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 after:from-blue-700 after:to-cyan-500 after:from-orange-500 after:to-yellow-500 after:from-green-600 after:to-lime-400 after:from-red-600 after:to-orange-600 after:from-slate-600 after:to-slate-300 text-emerald-500 text-cyan-500 text-slate-400"></p>
                    <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                        <img className="w-1/2 mx-auto" src="../assets/img/illustrations/icon-documentation.svg" alt="sidebar illustrations" />
                        <div className="flex-auto w-full p-4 pt-0 text-center">
                            <div className="transition-all duration-200 ease-nav-brand">
                                <h6 className="mb-0 dark:text-white text-slate-700">Need help?</h6>
                                <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">Please check our docs</p>
                            </div>
                        </div>
                    </div>
                    <a href="https://www.creative-tim.com/learning-lab/tailwind/html/quick-start/argon-dashboard/" target="_blank" className="inline-block w-full px-8 py-2 mb-4 text-xs font-bold leading-normal text-center text-white capitalize transition-all ease-in rounded-lg shadow-md bg-slate-700 bg-150 hover:shadow-xs hover:-translate-y-px">Documentation</a>
                    <a className="inline-block w-full px-8 py-2 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-blue-500 border-0 rounded-lg shadow-md select-none bg-150 bg-x-25 hover:shadow-xs hover:-translate-y-px" href="https://www.creative-tim.com/product/argon-dashboard-pro-tailwind?ref=sidebarfree" target="_blank">Contact Support</a>
                </div>
            </div>

            <main className="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl">
                {/* <!-- Navbar --> */}
                <nav className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all ease-in shadow-none duration-250 rounded-2xl lg:flex-nowrap lg:justify-start">
                    <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
                        <nav>
                            {/* <!-- breadcrumb --> */}
                            <ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
                                <li className="text-sm leading-normal">
                                    <a className="text-white opacity-50">Pages</a>
                                </li>
                                <li className="text-sm pl-2 capitalize leading-normal text-white before:float-left before:pr-2 before:text-white before:content-['/']" aria-current="page">{title}</li>
                            </ol>
                            <h6 className="mb-0 font-bold text-white capitalize">{title}</h6>
                        </nav>

                        <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
                            <div className="flex items-center md:ml-auto md:pr-4">
                                
                            </div>
                            <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
                                {/* <!-- online builder btn  --> */}

                                <li className="flex items-center md:px-4">
                                    <a href="../pages/sign-in.html" className="block px-0 py-2 text-sm font-semibold text-white transition-all ease-nav-brand">
                                        <i className="fa fa-user sm:mr-1"></i>
                                        <span className="hidden sm:inline">Sign In</span>
                                    </a>
                                </li>
                                <li className="flex items-center pl-4 xl:hidden px-4">
                                    <a href="javascript:;" className="block p-0 text-sm text-white transition-all ease-nav-brand">
                                        <div className="w-4.5 overflow-hidden">
                                            <i className="ease mb-0.75 relative block h-0.5 rounded-sm bg-white transition-all"></i>
                                            <i className="ease mb-0.75 relative block h-0.5 rounded-sm bg-white transition-all"></i>
                                            <i className="ease relative block h-0.5 rounded-sm bg-white transition-all"></i>
                                        </div>
                                    </a>
                                </li>


                                {/* <!-- notifications --> */}

                                <li className="relative flex items-center pr-2">
                                    <p className="hidden transform-dropdown-show"></p>
                                    <a href="javascript:;" className="block p-0 text-sm text-white transition-all ease-nav-brand" dropdown-trigger aria-expanded="false">
                                        <i className="cursor-pointer fa fa-bell"></i>
                                    </a>

                                    <ul dropdown-menu className="text-sm transform-dropdown before:font-awesome before:leading-default before:duration-350 before:ease lg:shadow-3xl duration-250 min-w-44 before:sm:right-8 before:text-5.5 pointer-events-none absolute right-0 top-0 z-50 origin-top list-none rounded-lg border-0 border-solid border-transparent dark:shadow-dark-xl dark:bg-slate-850 bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 opacity-0 transition-all before:absolute before:right-2 before:left-auto before:top-0 before:z-50 before:inline-block before:font-normal before:text-white before:antialiased before:transition-all before:content-['\f0d8'] sm:-mr-6 lg:absolute lg:right-0 lg:left-auto lg:mt-2 lg:block lg:cursor-pointer">
                                        {/* <!-- add show className on dropdown open js --> */}
                                        <li className="relative mb-2">
                                            <a className="dark:hover:bg-slate-900 ease py-1.2 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 hover:bg-gray-200 hover:text-slate-700 lg:transition-colors" href="javascript:;">
                                                <div className="flex py-1">
                                                    <div className="my-auto">
                                                        <img src="../assets/img/team-2.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white h-9 w-9 max-w-none rounded-xl" />
                                                    </div>
                                                    <div className="flex flex-col justify-center">
                                                        <h6 className="mb-1 text-sm font-normal leading-normal dark:text-white"><span className="font-semibold">New message</span> from Laur</h6>
                                                        <p className="mb-0 text-xs leading-tight text-slate-400 dark:text-white/80">
                                                            <i className="mr-1 fa fa-clock"></i>
                                                            13 minutes ago
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>

                                        <li className="relative mb-2">
                                            <a className="dark:hover:bg-slate-900 ease py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700" href="javascript:;">
                                                <div className="flex py-1">
                                                    <div className="my-auto">
                                                        <img src="../assets/img/small-logos/logo-spotify.svg" className="inline-flex items-center justify-center mr-4 text-sm text-white bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 h-9 w-9 max-w-none rounded-xl" />
                                                    </div>
                                                    <div className="flex flex-col justify-center">
                                                        <h6 className="mb-1 text-sm font-normal leading-normal dark:text-white"><span className="font-semibold">New album</span> by Travis Scott</h6>
                                                        <p className="mb-0 text-xs leading-tight text-slate-400 dark:text-white/80">
                                                            <i className="mr-1 fa fa-clock"></i>
                                                            1 day
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>

                                        <li className="relative">
                                            <a className="dark:hover:bg-slate-900 ease py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700" href="javascript:;">
                                                <div className="flex py-1">
                                                    <div className="inline-flex items-center justify-center my-auto mr-4 text-sm text-white transition-all duration-200 ease-nav-brand bg-gradient-to-tl from-slate-600 to-slate-300 h-9 w-9 rounded-xl">
                                                        <svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                            <title>credit-card</title>
                                                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fillRule="nonzero">
                                                                    <g transform="translate(1716.000000, 291.000000)">
                                                                        <g transform="translate(453.000000, 454.000000)">
                                                                            <path className="color-background" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" opacity="0.593633743"></path>
                                                                            <path className="color-background" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div className="flex flex-col justify-center">
                                                        <h6 className="mb-1 text-sm font-normal leading-normal dark:text-white">Payment successfully completed</h6>
                                                        <p className="mb-0 text-xs leading-tight text-slate-400 dark:text-white/80">
                                                            <i className="mr-1 fa fa-clock"></i>
                                                            2 days
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* <!-- end Navbar --> */}

                {/* <!-- cards --> */}
                <div className="w-full px-6 py-6 mx-auto h-[90vh] flex flex-col justify-between">
                    {children}

                    <footer className="pt-4 ">
                        <div className="w-full px-6 mx-auto">
                            <div className="flex flex-wrap items-center -mx-3 lg:justify-between">
                                <div className="w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none">
                                    <div className="text-sm leading-normal text-center text-slate-500 lg:text-left">
                                        &copy; 2023, made with <i className="fa fa-heart"></i> by <strong>Transport</strong> All rights reserved .
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
                {/* <!-- end cards --> */}
            </main>
        </div>
    );
}

export default Layout;