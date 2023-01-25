import React, { useState, useEffect } from 'react';
import './AddClassModal.css';
import * as Yup from 'yup';
import Form from '../../form/components/Form/Form';
import FormField from '../../form/components/FormField/FormField';
import Button from '../../form/components/Button/Button';
import ErrorMessage from '../../form/components/ErrorMessage/ErrorMessage';
import { ImCancelCircle } from 'react-icons/im';

import { toast } from 'react-toastify';

import { createClass, getClasses, deleteClass } from '../../../services/classroom';

const initialValues= {
    name: '',
}


function AddClassModal({ onClose, onClassAdded }) {
    const [error, setError] = useState(null);


    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Class Name is required'),
    })

    const handleAddClass = (values) => {
        console.log('CLASS NAME: ', values);

        createClass(values).then((res) => {
            if(res.ok) {
                toast.success(res.data.message, {
                    pauseOnHover: false,
                    closeOnClick: true,
                })
                onClassAdded();
            }else {
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
        <div>
            <div  className='add-modal-container'>
                <div className='modal-head'>
                    <p className="modal-title">Add New Classroom</p>
                    <ImCancelCircle style={{cursor: 'pointer'}} onClick={onClose} size={22} color="#fff"/>
                </div>
                <div className='modal-content'>
                <form action="" className="auth-form">

                {error && <ErrorMessage error={error} visible={true} />}
                <Form 
                    initialValues={initialValues}
                    onSubmit={handleAddClass}
                    validationSchema={validationSchema}
                >

                        <FormField  name="name" type="general" placeholder="Classroom Name"/>

                        <Button isOutLined={true} isFullWidth={false} title="CREATE CLASSROOM"/>
                        </Form>
                </form>
                </div>
            </div>
            <div className="modal-shadow" onClick={onClose}>
           
            </div>
        </div>
    );
}

export default AddClassModal;