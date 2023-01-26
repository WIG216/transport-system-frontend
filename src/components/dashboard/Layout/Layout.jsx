import React, { useState } from 'react';
import { removeToken } from '../../../utils/storage';
import { useNavigate, NavLink } from "react-router-dom";
import { SiGoogleclassroom } from 'react-icons/si';
import { MdOutlineContentPaste, MdAssignmentLate, MdAssessment, MdDashboard } from 'react-icons/md';
import './Layout.css'

function Layout({ title, children }) {
    const navigate = useNavigate();

    const [showNav, setShowNav] = useState(true);
    const [showUserMenu, setShowUserMenu] = useState(false);

    const handleLogout = () => {
        removeToken();
        navigate('/');
    }

    const toggleNav = () => {
        setShowNav(!showNav);
    }

    return (

        <div className="dashboard-grid">
            <div className={`sidebar ${!showNav ? 'show' : ''}`}>
                <div className="fixed inset-y-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto antialiased transition-transform duration-200 -translate-x-full bg-white border-0 shadow-xl dark:shadow-none dark:bg-slate-850 max-w-64 ease-nav-brand z-990 xl:ml-6 rounded-2xl xl:left-0 xl:translate-x-0" aria-expanded="false">
                    <div className="h-19">
                        <i className="absolute top-0 right-0 p-4 opacity-50 cursor-pointer fas fa-times dark:text-white text-slate-400 xl:hidden" sidenav-close></i>
                        <a className="block px-8 py-6 m-0 text-sm whitespace-nowrap dark:text-white text-slate-700" href="https://demos.creative-tim.com/argon-dashboard-tailwind/pages/dashboard.html" target="_blank">
                            <img src="../../../../../assets/img/logo-ct-dark.png" className="inline h-full max-w-full transition-all duration-200 dark:hidden ease-nav-brand max-h-8" alt="main_logo" />
                            <img src="../../../../../assets/img/logo-ct.png" className="hidden h-full max-w-full transition-all duration-200 dark:inline ease-nav-brand max-h-8" alt="main_logo" />
                            <span className="ml-1 font-semibold transition-all duration-200 ease-nav-brand">Argon Dashboard 2</span>
                        </a>
                    </div>

                    <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />

                    <div className="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full">
                        <ul className="flex flex-col pl-0 mb-0">

                            <NavLink className="mt-0.5 w-full" to="/dashboard">
                                <a className="py-2.7 bg-blue-500/13 dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-colors" href="../pages/dashboard.html">
                                    <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                        <i className="relative top-0 text-sm leading-normal text-blue-500 ni ni-tv-2"></i>
                                    </div>
                                    <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Dashboard</span>
                                </a>
                            </NavLink>

                            <NavLink className="mt-0.5 w-full" to="/tables">
                                <a className=" dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors" href="../pages/tables.html">
                                    <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                        <i className="relative top-0 text-sm leading-normal text-orange-500 ni ni-calendar-grid-58"></i>
                                    </div>
                                    <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Tables</span>
                                </a>
                            </NavLink>

                            <NavLink className="mt-0.5 w-full" to="/billing">
                                <a className=" dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors" href="../pages/billing.html">
                                    <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center fill-current stroke-0 text-center xl:p-2.5">
                                        <i className="relative top-0 text-sm leading-normal text-emerald-500 ni ni-credit-card"></i>
                                    </div>
                                    <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Billing</span>
                                </a>
                            </NavLink>

                            <li className="w-full mt-4">
                                <h6 className="pl-6 ml-2 text-xs font-bold leading-tight uppercase dark:text-white opacity-60">Account pages</h6>
                            </li>

                            <NavLink className="mt-0.5 w-full" to="/login">
                                <a className=" dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors" href="../pages/sign-in.html">
                                    <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                        <i className="relative top-0 text-sm leading-normal text-orange-500 ni ni-single-copy-04"></i>
                                    </div>
                                    <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Sign In</span>
                                </a>
                            </NavLink>

                            <NavLink className="mt-0.5 w-full" to="/register">
                                <a className=" dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors" href="../pages/sign-up.html">
                                    <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                        <i className="relative top-0 text-sm leading-normal text-cyan-500 ni ni-collection"></i>
                                    </div>
                                    <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Sign Up</span>
                                </a>
                            </NavLink>
                        </ul>
                    </div>

                    <div className="mx-4">
                        <p className="invisible hidden text-gray-800 text-red-500 text-red-600 text-blue-500 dark:bg-white bg-slate-500 bg-gray-500/30 bg-cyan-500/30 bg-emerald-500/30 bg-orange-500/30 bg-red-500/30 after:bg-gradient-to-tl after:from-zinc-800 after:to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 after:from-blue-700 after:to-cyan-500 after:from-orange-500 after:to-yellow-500 after:from-green-600 after:to-lime-400 after:from-red-600 after:to-orange-600 after:from-slate-600 after:to-slate-300 text-emerald-500 text-cyan-500 text-slate-400"></p>
                        <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border" sidenav-card>
                            <img className="w-1/2 mx-auto" src="../assets/img/illustrations/icon-documentation.svg" alt="sidebar illustrations" />
                            <div className="flex-auto w-full p-4 pt-0 text-center">
                                <div className="transition-all duration-200 ease-nav-brand">
                                    <h6 className="mb-0 dark:text-white text-slate-700">Need help?</h6>
                                    <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">Please check our docs</p>
                                </div>
                            </div>
                        </div>
                        <a href="https://www.creative-tim.com/learning-lab/tailwind/html/quick-start/argon-dashboard/" target="_blank" className="inline-block w-full px-8 py-2 mb-4 text-xs font-bold leading-normal text-center text-white capitalize transition-all ease-in rounded-lg shadow-md bg-slate-700 bg-150 hover:shadow-xs hover:-translate-y-px">Documentation</a>
                        <a className="inline-block w-full px-8 py-2 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-blue-500 border-0 rounded-lg shadow-md select-none bg-150 bg-x-25 hover:shadow-xs hover:-translate-y-px" href="https://www.creative-tim.com/product/argon-dashboard-pro-tailwind?ref=sidebarfree" target="_blank">Upgrade to pro</a>
                    </div>
                </div>
            </div>
            <div className={`sidebar ${!showNav ? 'show' : ''}`}>
                
                
            </div>
            <div className={`main ${!showNav ? 'expand' : ''}`}>
                <header className={`${!showNav ? 'expand' : ''}`}>
                    <div className="con">
                        <div className="nav-toggler-btn" onClick={toggleNav}>
                            <i className="fa fa-bars" aria-hidden="true"></i>
                        </div>
                        <span>
                            <select value="en" id="" className="language-dashboard">
                                <option value="en">🏴󠁧󠁢󠁥󠁮󠁧󠁿 EN</option>
                                <option value="fr">🇫🇷 FR</option>
                            </select>
                            <div className="divider"></div>
                            <a href="" className="link notify">
                                <i className="fa fa-bell" aria-hidden="true"></i>
                            </a>
                            <div className="divider"></div>
                            <div className="profile-btn" onClick={() => setShowUserMenu(!showUserMenu)}>
                                <div className="name">Hello Admin</div>
                                {/* <img src="./assets/images/users/user-1.png" alt=""> */}
                            </div>
                        </span>
                    </div>
                </header>
                <div className={`user-menu ${showUserMenu ? 'show' : ''}`}>
                    <div className="user-menu-top">
                        <i className="fa fa-times" onClick={() => setShowUserMenu(!showUserMenu)}></i>
                        <img src={require("../../../assets/images/users/avatar.jpg")} alt="" />
                        <p>Odin</p>
                        <span>Admin User</span>
                    </div>
                    <div className="user-menu-footer">
                        <a><i className="fas fa-cog"></i> Settings</a>
                        <a onClick={handleLogout} className="logout-link"><i className="fas fa-door-open"></i> Logout</a>
                    </div>
                </div>

                <div className="content">
                    <div className="con">
                        <div className="page-title">
                            <p>{title}</p>
                            <div className="crumb">
                                <NavLink to="/dashboard" className="crumb-item">Dashboard</NavLink>
                                <span>{'>'}</span>
                                <a className="crumb-item">Home</a>
                            </div>
                        </div>

                        <div className="section">
                            {children}
                        </div>

                    </div>
                </div>

                <footer className={`${!showNav ? 'expand' : ''}`}>
                    <div className="pt-4">
                        <div className="w-full px-6 mx-auto">
                            <div className="flex flex-wrap items-center -mx-3 lg:justify-between">
                                <div className="w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none">
                                    <div className="text-sm leading-normal text-center text-slate-500 lg:text-left">
                                        &copy; 2023, made with <i className="fa fa-heart"></i> by <strong>Transport</strong> All rights reserved .
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Layout;