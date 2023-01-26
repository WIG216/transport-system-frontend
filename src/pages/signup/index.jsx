
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Form from '../../components/dashboard/form/components/Form/Form';
import FormField from '../../components/dashboard/form/components/FormField/FormField';
import Button from '../../components/dashboard/form/components/Button/Button';
import * as Yup from 'yup';
import AuthLayout from '../../components/dashboard/form/components/Layout/AuthLayout';
import ErrorMessage from '../../components/dashboard/form/components/ErrorMessage/ErrorMessage';

import { registerUser } from '../../services/auth';
import { toast } from 'react-toastify';

const initialValues = {
    name: '',
    email: '',
    password: '',
    bdate: '',
    image: ''
}

const Index = () => {
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name field is required'),
        bdate: Yup.string().required('Enter a valid age'),
        email: Yup.string().email('Enter a valid email').required('Email field is required'),
        password: Yup.string().min(4, 'Password must be above 4 characters').required('Password Required'),
        image: Yup.string(),
    })

    const handleRegister = (values) => {
        console.log('VALUES: ', values);

        // if(values.password != values.confirm_password) {
        //     toast.error("Passwords Must Match", {
        //         pauseOnHover: false,
        //         closeOnClick: true,
        //     })

        //     return;
        // }

        registerUser(values).then((res) => {
            console.log('REGISTERED USER');
            // console.log(res);
            if (res.ok) {
                toast.success("User Registered", {
                    pauseOnHover: false,
                    closeOnClick: true,
                })
                setTimeout(() => {
                    navigate('/login');
                }, 2000)
            } else {
                toast.error(res.data.message, {
                    pauseOnHover: false,
                    closeOnClick: true,
                })
            }
        }).catch(err => {
            console.log('ERROR REGISTRATION', err);
            toast.error("Registration Failed", {
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
                <p>Register</p>
                <Form
                    initialValues={initialValues}
                    onSubmit={handleRegister}
                    validationSchema={validationSchema}
                >

                    <FormField name="name" type="text" placeholder="Username" />

                    <FormField name="email" type="email" placeholder="Email" />

                    <FormField name="password" type="password" placeholder="Password" />

                    <FormField name="bdate" type="date" placeholder="Birth date" />

                    <FormField name="image" type="file" placeholder="Choose image" />

                    <Button title="Register" />
                </Form>
            </form>
            <p className="text-base">
                Already have an account? <Link to="/login" className="font-semibold">Sign in</Link>
            </p>
        </AuthLayout>

    );
}

export default Index;