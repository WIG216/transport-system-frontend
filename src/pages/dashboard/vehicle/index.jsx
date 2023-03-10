import React, { useState, useEffect } from 'react';
import Layout from '../../../components/dashboard/Layout/Layout';
import Button from '../../../components/dashboard/form/components/Button/Button';
import Form from '../../../components/dashboard/form/components/Form/Form';
import FormField from '../../../components/dashboard/form/components/FormField/FormField';
import { getVehicles, deleteVehicle, updateVehicle } from '../../../services/vehicle';
import { toast } from 'react-toastify';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import moment from 'moment';
import { AiOutlineCopy } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { AddVehicleModal, DeleteDriverModal, EditDriverModal } from '../../../components/dashboard/ui/VehicleModal/index';


function Index() {
    const [showAddModal, setShowAddModal] = useState(false);
    const [deleteModal, setShowDeleteModal] = useState(false);
    const [editModal, setShowEditModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [updateId, setUpdateId] = useState(null);

    const [drivers, setDrivers] = useState([]);

    const toggleAddModal = () => {
        console.log('toggle add modal')
        setShowAddModal(!showAddModal);
    }

    const toggleDeleteModal = () => {
        setShowDeleteModal(!deleteModal);
    }
    
    const toggleEditModal = () => {
        setShowEditModal(!editModal);
    }

    const handleGetVehicles = () => {

        getVehicles().then((res) => {
            console.log('RESPONSE GET: ', res.data.docs);
            if (res.ok) {
                setDrivers(res.data.docs);
            }
        }).catch(err => {
            console.log('error: ', err);
        })
    }

    const handleDeleteDriver = () => {
        console.log('DELETE Driver');
        console.log(deleteId)
        deleteVehicle(deleteId).then((res) => {
            if (res.ok) {
                toggleDeleteModal();
                handleGetVehicles();
                toast.success(res.message, {
                    pauseOnHover: false,
                    closeOnClick: true,
                })

            } else {
                toast.error(res.message, {
                    pauseOnHover: false,
                    closeOnClick: true,
                })
            }
        }).catch(err => {
            toast.error("ERROR", {
                pauseOnHover: false,
                closeOnClick: true,
            })
        })
    }
    
    const handleEditVehicle = () => {
        console.log('DELETE Driver');
        console.log(updateId)
        updateVehicle(updateId).then((res) => {
            if (res.ok) {
                toggleDeleteModal();
                handleGetVehicles();
                toast.success(res.message, {
                    pauseOnHover: false,
                    closeOnClick: true,
                })

            } else {
                toast.error(res.message, {
                    pauseOnHover: false,
                    closeOnClick: true,
                })
            }
        }).catch(err => {
            toast.error("ERROR", {
                pauseOnHover: false,
                closeOnClick: true,
            })
        })
    }

    const handleVehicleAdded = () => {
        handleGetVehicles();
        toggleAddModal();
    }
    const handleDriverUpdated = () => {
        handleEditVehicle();
        toggleEditModal();
    }

    const handleDriverDeleted = () => {
        handleDeleteDriver();
        toggleDeleteModal();
    }   

    useEffect(() => {
        handleGetVehicles();
    }, []);
    return (
        <Layout title="Vehicle">

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
            <div className="flex items-center w-full justify-between  pb-4 bg-white dark:bg-gray-900 pt-6 px-6">
                    <label for="table-search" className="sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="table-search-users" className=" p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:outline-none focus:ring-0" placeholder="Search for Driver" />
                    </div>
                    <div className="relative">
                        <button onClick={toggleAddModal} className="btn btn-primary btn-add">Add Vehicle  <i className="fas fa-plus"></i></button>
                        {/* <a className="inline-block px-5 py-2.5 font-bold leading-normal text-center text-white align-middle transition-all bg-transparent rounded-lg cursor-pointer text-sm ease-in shadow-md bg-150 bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 hover:shadow-xs active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25" href="javascript:;"> <i class="fas fa-plus"> </i>&nbsp;&nbsp;Add New Card</a> */}
                    </div>
                    {/* <Button title="Add"/> */}
                </div>
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="checkbox-all-search" className="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Position
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img className="w-10 h-10 rounded-full" src={require("../../../assets/images/auth/banner.png")} alt="Jese image" />
                                <div className="pl-3">
                                    <div className="text-base font-semibold">Neil Sims</div>
                                    <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                React Developer
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <i className="fa-solid fa-pen-to-square pr-4 text-blue-500"></i>
                                <i className="fa-solid fa-trash-can text-red-900"></i>
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img className="w-10 h-10 rounded-full" src={require("../../../assets/images/auth/banner.png")} alt="Jese image" />
                                <div className="pl-3">
                                    <div className="text-base font-semibold">Leslie Livingston</div>
                                    <div className="font-normal text-gray-500">leslie@flowbite.com</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                SEO Specialist
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div> Offline
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <i className="fa-solid fa-pen-to-square pr-4 text-blue-500"></i>
                                <i className="fa-solid fa-trash-can text-red-900"></i>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img className="w-10 h-10 rounded-full" src={require("../../../assets/images/auth/banner.png")} alt="Jese image" />
                                <div className="pl-3">
                                    <div className="text-base font-semibold">Neil Sims</div>
                                    <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                React Developer
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <i className="fa-solid fa-pen-to-square pr-4 text-blue-500"></i>
                                <i className="fa-solid fa-trash-can text-red-900"></i>
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img className="w-10 h-10 rounded-full" src={require("../../../assets/images/auth/banner.png")} alt="Jese image" />
                                <div className="pl-3">
                                    <div className="text-base font-semibold">Leslie Livingston</div>
                                    <div className="font-normal text-gray-500">leslie@flowbite.com</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                SEO Specialist
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div> Offline
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <i className="fa-solid fa-pen-to-square pr-4 text-blue-500"></i>
                                <i className="fa-solid fa-trash-can text-red-900"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {showAddModal && <AddVehicleModal onVehicleAdded={handleVehicleAdded} onClose={toggleAddModal} />}
            {/* {editModal && <EditDriverModal onDriverAdded={handleDriverUpdated} onClose={toggleAddModal} />}
            {deleteModal && <DeleteDriverModal onAccept={handleDeleteDriver} onCancel={toggleDeleteModal} />} */}
        </Layout >
    );
}

export default Index;