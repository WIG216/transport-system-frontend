import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Form from '../../../components/dashboard/form/components/Form/Form';
import FormField from '../../../components/dashboard/form/components/FormField/FormField';
import Button from '../../../components/dashboard/form/components/Button/Button';
import * as Yup from 'yup';
import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import AuthLayout from '../../../components/dashboard/form/components/Layout/AuthLayout';
import { useFormikContext } from 'formik'

import { registerDriver } from '../../../services/auth';
import { toast } from 'react-toastify';
import { FaCloudUploadAlt, FaTrashAlt } from 'react-icons/fa';
import BeatLoader from "react-spinners/BeatLoader";
import ProgressBar from '../../../components/dashboard/Progress/Progress';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { firebaseApp } from '../../../utils/firebaseConfig';
import ErrorMessage from '../../../components/dashboard/form/components/ErrorMessage/ErrorMessage';


const initialValues = {
    driverName: '',
    bdate: '',
    email: '',
    password: '',
    // driverImage: '',
    status: ''
}

const override = {
    marginTop: '20px'
};

const Index = () => {
    const [isUploadingImage, setIsUploadingImage] = useState(false);
    const [imageProgress, setImageProgress] = useState(0);
    const [imageUrl, setImageUrl] = useState('');
    const [showPreview, setShowPreview] = useState(false);
    // const { errors, touched } = useFormikContext();


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

    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        driverName: Yup.string().required('Name field is required'),
        bdate: Yup.string().required('Date field is required'),
        email: Yup.string().email('Enter a valid email').required('Email field is required'),
        password: Yup.string().min(4, 'Password must be above 4 characters').required('Password Required'),
        // driverImage: Yup.string().required("Required"),
        status: Yup.string().required("Status field is required")
        // confirm_password: Yup.string().min(4, 'Password must be above 4 characters').required('Confirm Password Required'),
    })

    const handleRegister = (values) => {
        console.log('VALUES: ', values);

        let data = {
            ...values,
            driverImage: imageUrl,
        }

        registerDriver(data).then((res) => {
            // console.log('REGISTERED USER');
            console.log(res);
            if (res.ok) {
                toast.success("User Registered", {
                    pauseOnHover: false,
                    closeOnClick: true,
                })
                setTimeout(() => {
                    navigate('/login-driver');
                }, 2000)
            } else {
                toast.error(res.data.message, {
                    pauseOnHover: false,
                    closeOnClick: true,
                })
            }
        }).catch(err => {
            console.log('ERROR REGISTRATION', err);
            toast.error("Resgistration Failed", {
                pauseOnHover: false,
                closeOnClick: true,
            })
        })
    }

    useEffect(() => {
        console.log('ran')
    }, []);


    return (
        <AuthLayout title="Create Account">
            <form action="" className="auth-form">
                <p>Register as a Driver</p>
                <Form
                    initialValues={initialValues}
                    onSubmit={handleRegister}
                    validationSchema={validationSchema}
                >

                    <FormField name="driverName" type="text" placeholder="Drivername" />

                    <FormField name="email" type="email" placeholder="Email" />

                    <FormField name="bdate" type="date" placeholder="Date of Birth" />

                    <FormField name="password" type="password" placeholder="Password" />

                    <FormField name="status" type="text" placeholder="Status" />

                    {/* <FormField  name="confirm_password" type="password" placeholder="Confirm password"/> */}

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
                </Form>
            </form>
            <p className="u-padding-bottom-small label-link">
                Already have an account? <Link to="/login-driver" className="text-primary">Sign in</Link>
            </p>

        </AuthLayout>

    );
}

export default Index;