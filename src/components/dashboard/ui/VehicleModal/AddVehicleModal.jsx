import React from "react";
import * as Yup from 'yup';
import Form from '../../form/components/Form/Form';
import FormField from '../../form/components/FormField/FormField';
import Button from '../../form/components/Button/Button';
import ButtonHome from "../../ButtonHome/Button";
import { toast } from 'react-toastify';
import { createVehicle } from '../../../../services/vehicle';
import { MdOutlineAdd,MdClose } from "react-icons/md";
import Uploader from "../../form/components/Uploader/upload";


const initialValues = {
    name: "",
    model: "",
    color: "",
    NoSeat: "",
    carImage: "",
}


export default function AddVehicleModal() {
    console.log("======================")
    const [showModal, setShowModal] = React.useState(false);

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name field is required'),
        model: Yup.string().required('Model field is required'),
        color: Yup.string().required('Color field is required'),
        NoSeat: Yup.number().positive("Invalid number of seat").integer("Invalid seat number").required('Number of seat required'),
        carImage: Yup.string().required("Image is required"),
        // status: Yup.string().required
    })

    const handleAddVehicle = (values) => {
        console.log('VALUES: ', values);

        createVehicle(values).then((res) => {
            if (res.ok) {
                console.log(res)
                toast.success(res.data.message, {
                    pauseOnHover: false,
                    closeOnClick: true,
                })
                // onDriverAdded();
            } else {
                console.log(res)
                toast.error(res.data.message, {
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
            <button
                className="flex text-white w-full items-center bg-gray-800 hover:bg-gray-900 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                type="button"
                onClick={() => setShowModal(true)}
            >
                <MdOutlineAdd size={20} />
                Add vehicle
            </button>
            {showModal ? (
                <>
                    <div
                        className="backdrop-blur-sm justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-[90rem] my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Add Vehicle
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <MdClose className="text-black"/>
                                    </button>
                                </div>
                                {/*body*/}
                                <form className='relative p-6 flex-auto' >

                                    {/* {error && <ErrorMessage error={error} visible={true} />} */}
                                    <Form
                                        initialValues={initialValues}
                                        onSubmit={handleAddVehicle}
                                        validationSchema={validationSchema}
                                    >
                                        <FormField name="name" type="text" placeholder="Vehicle Name" />

                                        <FormField name="model" type="text" placeholder="Vehicle Model" />

                                        <FormField name="color" type="text" placeholder="Color" />

                                        <FormField name="NoSeat" type="number" placeholder="Number of seat" />
 
                                        {/* <label for="dropzone-file" class="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                            </svg>

                                            <h2 class="mx-3 text-gray-400">Profile Photo</h2>

                                            <input id="dropzone-file" type="file" class="hidden" />
                                            
                                        </label> */}
                                        <Uploader name="carImage" />

                                        {/* <Button title="Create Driver" /> */}
                                        <div className="flex justify-between p-6 border-t border-solid border-slate-200 rounded-b">
                                            <ButtonHome type='danger' onClicked={() => setShowModal(false)} text='Close' />

                                            <Button title="Create Vehicle" onClick={() => setShowModal(false)} />

                                        </div>

                                    </Form>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}