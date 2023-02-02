import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import Form from '../../form/components/Form/Form';
import FormField from '../../form/components/FormField/FormField';
import Button from '../../form/components/Button/Button';
import ErrorMessage from '../../form/components/ErrorMessage/ErrorMessage';
import { ImCancelCircle } from 'react-icons/im';
import { MdOutlineAdd } from "react-icons/md";
import ButtonHome from "../../ButtonHome/Button";


import { toast } from 'react-toastify';

import { updateDriver } from '../../../../services/driver';

const initialValues = {
    driverName: '',
    bdate: '',
    email: '',
    password: '',
    // driverImage: '',
}


function EditDriverModal({ onClose, onDriverAdded }) {
    const [error, setError] = useState(null);


    const validationSchema = Yup.object().shape({
        driverName: Yup.string(),
        bdate: Yup.string(),
        email: Yup.string().email('Enter a valid email'),
        password: Yup.string().min(4, 'Password must be above 4 characters'),
        // driverImage: Yup.string().required("Image is required"),
        // status: Yup.string().required
    })


    const handleEditDriver = (values) => {
        console.log('Driver info: ', values);

        updateDriver(values).then((res) => {
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
                                    Add Driver
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
                                    onSubmit={handleEditDriver}
                                    validationSchema={validationSchema}
                                >


                                    <FormField name="driverName" type="text" placeholder="Driver Name" />

                                    <FormField name="bdate" type="date" placeholder="Date of Birth" />

                                    <FormField name="email" type="email" placeholder="Email" />
                                    <FormField name="password" type="password" placeholder="Password" />

                                    {/* <FormField name="driverImage" type="file" placeholder="Driver Image" /> */}
                                    <div className="flex justify-between p-6 border-t border-solid border-slate-200 rounded-b">
                                        <ButtonHome type='danger' onClicked={onClose} text='Close' />

                                        <Button title="Update Driver" />

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



export default EditDriverModal;