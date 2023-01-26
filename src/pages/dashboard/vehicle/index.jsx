import React, { useState, useEffect }  from 'react';

import Layout from '../../../components/dashboard/Layout/Layout';
import { AddCourseContentModal, EditCourseContentModal, DeleteModal } from '../../../components/dashboard';

import { AiOutlineCopy } from 'react-icons/ai';
import {  BsPencilSquare } from 'react-icons/bs';

import { toast } from 'react-toastify';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { getClasses, deleteClass } from '../../../services/classroom';
import { deleteCourseContent, getCourseContents } from '../../../services/courseContent';

import BeatLoader from "react-spinners/BeatLoader";

import moment from 'moment';

const rows = [
    {
        label: '#',
        name: 'num'
    },
    {
        label: 'Title',
        name: 'name'
    },
    {
        label: 'Description',
        name: 'name'
    },
    {
        label: 'Expectation',
        name: 'name'
    },
    {
        label: 'Class Name',
        name: 'name'
    },
    {
        label: 'Publish Date',
        name: 'name'
    },
    {
        label: 'Created Date',
        name: 'name'
    },
    {
        label: 'Action',
        name: 'action'
    }
]


const override = {
    marginTop: '20px'
  };



function Index() {
    const [ showAddModal, setShoowAddModal ] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false); 
    const [deleteModal, setShowDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [contents, setContents] = useState([]);

    const [editData, setEditData] = useState(null);

    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(false);

    const toggleAddModal = () => {
        setShoowAddModal(!showAddModal);
    }

    const toggleEditModal = () => {
        setShowEditModal(!showEditModal);
    }

    const toggleDeleteModal = () => {
        setShowDeleteModal(!deleteModal);
    }

    const handleGetClasses = ()  => {


        getClasses().then((res) => {
            if(res.ok) {
                setClasses(res.data.data);
            }
        }).catch(err => {
            console.log('error: ', err);
        })
    }

    const handleDeleteCourseContent = () => {
        console.log('DELETE COURSE CONTENT');
        console.log(deleteId)
        deleteCourseContent(deleteId).then((res) => {
            if(res.ok) {
                toggleDeleteModal();
                handleGetClasses();
                toast.success(res.data.message, {
                    pauseOnHover: false,
                    closeOnClick: true,
                })
          
            }else {
                toast.error(res.data.message, {
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

    const handleContentAdded = ()  => {
        handleGetContent();
        toggleAddModal();
    }


    const handleGetContent = () => {
        setLoading(true);
        getCourseContents().then((res) => {
            console.log("COURSE CONTENT RES: ",res);
            setLoading(false);
            setContents(res.data.data);
        }).catch((err) => {
            console.log('Error: ', err);
            setLoading(false);
        })
    }

    useEffect(() => {
        console.log('USER EFFECT RAN')
        handleGetContent();
        handleGetClasses();
    },[]);

    return (
        <Layout title="Course Content">
      <div className="section">
            <div className="parent-con">
                <div className="data-table">
                    <div className="top">
                        <div className="span">
                            <select name="" id="" className="select-field">
                                <option value="all">All</option>
                                {classes.map((classData, index) => <option key={index} value={classData._id}>{classData.name}</option>)}
                            </select>
                        </div>
                        {/* <form className="search">
                            <input type="search" name="" id="" placeholder="Find ..." />
                            <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                        </form> */}
                        <button onClick={toggleAddModal} className="btn btn-primary btn-add">Add Content  <i className="fas fa-plus"></i></button>
                    </div>
                    <div className="table-con">
                    <div style={{textAlign: 'center',}}>
                        <BeatLoader
                                color="#623d91" 
                                loading={loading}
                                cssOverride={override}
                        />
                    </div>
                        <table>
                            <thead>
                                <tr>
                                    {rows.map((row, index) => <th key={index} className={row.name}>{row.label}</th>)}
                                    
                                </tr>
                            </thead>
                        
                            <tbody>
                                {contents?.map((data, index) => <tr>
                                    <td className="flex-center">{index + 1}</td>
                                    <td className="flex-start">
                                        <p>{data.title}</p>
                                    </td>
                            
                    
                                    <td className="flex-start">{data?.description}</td>
                                    <td className="flex-start">{data?.expectation}</td>
                                    <td className="flex-start">{data?.classroom_id?.name}</td>
                                    <td className="flex-start">{moment(new Date(data?.publish_date)).format('MMMM d, YYYY')}</td>
                                    
                                    <td className="flex-start">
                                        <p>{moment(new Date(data?.createdAt)).format('MMMM d, YYYY')}</p>
                                    </td>

                                    <td className="flex-center">
                                        <div className="action">
                                            <Tippy content="Copy Class Url"  animation="fade">
                                            <a onClick={() => {
                                                setEditData(data);
                                                toggleEditModal();
                                            }} className="see"><BsPencilSquare onClick={() => null} size={14}/></a>
                                            </Tippy>
                                            <Tippy content="Delete Class"  animation="fade">
                                                <a onClick={() => {
                                                    setDeleteId(data._id);
                                                    toggleDeleteModal();
                                                }} className="delete"><i className="fa fa-trash" aria-hidden="true"></i></a>
                                            </Tippy>
                                        </div>
                                    </td>
                                </tr> )}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>

        {showAddModal &&  <AddCourseContentModal onContentAdded={handleContentAdded} onClose={toggleAddModal} />}
        {showEditModal &&  <EditCourseContentModal data={editData} onContentAdded={handleContentAdded} onClose={toggleEditModal} />}
        {deleteModal && <DeleteModal onAccept={handleDeleteCourseContent} onCancel={toggleDeleteModal} />}
        </Layout>
    );
}

export default Index;