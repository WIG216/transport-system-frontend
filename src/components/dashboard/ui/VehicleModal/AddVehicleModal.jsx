import React, { useEffect, useState, useRef } from 'react';
import * as Yup from 'yup';
import Form from '../../form/components/Form/Form';
import FormField from '../../form/components/FormField/FormField';
import Button from '../../form/components/Button/Button';
import ErrorMessage from '../../form/components/ErrorMessage/ErrorMessage';
import { ImCancelCircle } from 'react-icons/im';
import { MdOutlineAdd } from "react-icons/md";
import ButtonHome from "../../ButtonHome/Button";
import { FaCloudUploadAlt, FaTrashAlt } from 'react-icons/fa';
import BeatLoader from "react-spinners/BeatLoader";
import ProgressBar from '../../Progress/Progress';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { firebaseApp } from '../../../../utils/firebaseConfig';
import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';

import { toast } from 'react-toastify';

import { createVehicle } from '../../../../services/vehicle';

const initialValues = {
    vehicleName: '',
    model: '',
    color: '',
    NoSeat: '',
    carImage: ''
}

const override = {
    marginTop: '20px'
};


function AddDriverModal({ onClose, onDriverAdded }) {
    const [isUploadingImage, setIsUploadingImage] = useState(false);
    const [imageProgress, setImageProgress] = useState(0);
    const [imageUrl, setImageUrl] = useState('');
    const [showPreview, setShowPreview] = useState(false);

    const storage = getStorage(firebaseApp);

    const imageFileRef = useRef(null)

    const handleSelectImage = () => {
        imageFileRef.current.click();
    };

    const uploadImage = (e) => {
        setIsUploadingImage(true);
        const imageFile = e.target.files[0];
        const storageRef = ref(storage, `images/${Date.now()}-${imageFile.name}`);
        const uploadTask = uploadBytesResumable(storageRef, imageFile);

        console.log(e.target.files[0]);

        uploadTask.on('state_changed', (snapshot) => {
            const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

            setImageProgress(+uploadProgress);

        }, (error) => {
            console.log(error);
        }, () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setImageUrl(downloadURL);
                console.log('URL', imageUrl);
                console.log('Image  URL: ', downloadURL);
                setShowPreview(true);
                setIsUploadingImage(false);
            });
        })
    }

    const deleteImage = () => {
        const deleteRef = ref(storage, imageUrl);
        deleteObject(deleteRef).then((res) => {
            console.log('RES DELETED', res);
        }).catch((err) => {
            console.log('ERROR DELETING');
        })
    }
    const [error, setError] = useState(null);


    const validationSchema = Yup.object().shape({
        vehicleName: Yup.string().required('Name field is required'),
        model: Yup.string().required('Date field is required'),
        NoSeat: Yup.number().required('Number of Seat is required'),
        color: Yup.string().required('Color field is required'),
    })

    const handleAddDriver = (values) => {
        console.log('VALUES: ', values);

        let data = {
            ...values,
            carImage: imageUrl,
        }

        createVehicle(data).then((res) => {
            if (res.ok) {
                toast.success(res.message, {
                    pauseOnHover: false,
                    closeOnClick: true,
                })
                onDriverAdded();
            } else {
                console.log(res)
                toast.error(res.message, {
                    pauseOnHover: false,
                    closeOnClick: true,
                })
            }
        }).catch(err => {
            console.log('ERROR CREATING: ', err);
            toast.error("ERROR", {
                pauseOnHover: false,
                closeOnClick: true,
            })
        })

    }



    return (
        <>
            <>
                <div
                    className="backdrop-blur-sm justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                <h3 className="text-3xl font-semibold">
                                    Add Vehicle
                                </h3>
                                {/* <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black font-extrabold h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button> */}
                                <ImCancelCircle style={{ cursor: 'pointer' }} onClick={onClose} size={22} color="#fff" />
                            </div>
                            {/*body*/}
                            <form className='relative p-6 flex-auto' >

                                {error && <ErrorMessage error={error} visible={true} />}
                                <Form
                                    initialValues={initialValues}
                                    onSubmit={handleAddDriver}
                                    validationSchema={validationSchema}
                                >


                                    <FormField name="VehicleName" type="text" placeholder="Vehicle Name" />

                                    <FormField name="model" type="text" placeholder="Vehicle model" />
                                    
                                    <FormField name="color" type="text" placeholder="Vehicle Color" />

                                    <FormField name="NoSeat" type="number" placeholder="Number of Seats" />

                                    <div className="pb-4">
                        {!showPreview && <div className="form-field-upload">
                            {/* <p className="label-text">Upload Video Content: </p> */}
                            <div className="" onClick={handleSelectImage}>
                                {!isUploadingImage && 
                                        <div className='flex items-center px-3 py-2 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900'>
                                            <FaCloudUploadAlt size={35} color="#61c3d2" /> 
                                            <h2 class="mx-3 text-gray-400">Profile Photo</h2>
                                        </div>
                                }
                                {isUploadingImage && <div style={{ width: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <BeatLoader
                                        color="#6a1b9a"
                                        loading={isUploadingImage}
                                        cssOverride={override}
                                    />
                                    <p style={{ fontSize: '14px' }}>Uploading Video</p>

                                    <ProgressBar bgcolor={'#6a1b9a'} completed={imageProgress} />

                                </div>}
                                {!isUploadingImage && <input ref={imageFileRef} onChange={uploadImage} type="file" className='w-full h-full' style={{ width: '100%', height: '100%', display: 'none' }} accept="image/png,image/jpg,image/*" name="driverImage" />}
                                {/* <ErrorMessage error={errors[driverImage]} visible={touched[driverName]} /> */}
                            </div>

                        </div>}
                        {showPreview && <div onChange={deleteImage} className="flex items-center px-3 py-2 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900">
                            <Tippy content="Delete image" animation="fade">
                                <div className="flex items-center ">
                                    <FaTrashAlt color='red' />
                                    <h2 class="mx-3 text-gray-400">Delete Image</h2>
                                </div>
                            </Tippy>
                            <image controls width="100%" height={'100%'} src={imageUrl}></image>
                        </div>}
                    </div>
                    <Button title="Register" />

                                    <div className="flex justify-between p-6 border-t border-solid border-slate-200 rounded-b">
                                        <ButtonHome type='danger' onClicked={onClose} text='Close' />

                                        <Button title="Create Driver" />

                                    </div>

                                </Form>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                <div className="modal-shadow" onClick={onClose}>
                </div>
            </>
        </>
    );
}



export default AddDriverModal;