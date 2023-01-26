
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './signup.css';
import { Link } from 'react-router-dom';
import Form from '../../components/dashboard/form/components/Form/Form';
import FormField from '../../components/dashboard/form/components/FormField/FormField';
import Button from '../../components/dashboard/form/components/Button/Button';
import * as Yup from 'yup';
import AuthLayout from '../../components/dashboard/form/components/Layout/AuthLayout';

import { registerUser } from '../../services/auth';
import { toast } from 'react-toastify';

const initialValues= {
    username: '',
    email: '',
    password: '',
    confirm_password: ''
}

const Index = () => {
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Name field is required'),
        email: Yup.string().email('Enter a valid email').required('Email field is required'),
        password: Yup.string().min(4, 'Password must be above 4 characters').required('Password Required'),
        confirm_password: Yup.string().min(4, 'Password must be above 4 characters').required('Confirm Password Required'),
    })

    const handleRegister = (values ) => {
        console.log('VALUES: ', values);

        if(values.password != values.confirm_password) {
            toast.error("Passwords Must Match", {
                pauseOnHover: false,
                closeOnClick: true,
            })

            return;
        }

        registerUser(values).then((res) => {
            // console.log('REGISTERED USER');
            // console.log(res);
            if(res.ok) {
                toast.success("User Registered", {
                    pauseOnHover: false,
                    closeOnClick: true,
                  })
                setTimeout(() => {
                    navigate('/login');
                },2000)
            }else {
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
    },[]);


    return (
        <AuthLayout title="Create Account">
            <form action="" className="auth-form">
                <p>Register</p>
                <Form 
                    initialValues={initialValues}
                    onSubmit={handleRegister}
                    validationSchema={validationSchema}
                >

                        <FormField  name="name" type="text" placeholder="Username"/>

                        <FormField  name="email" type="email" placeholder="Email"/>

                        <FormField  name="password" type="password" placeholder="Password"/>

                        <FormField  name="bdate" type="date" placeholder="birth date"/>

                        <Button title="Register"/>
                        </Form>
                </form>
                <p className="u-padding-bottom-small label-link">
                    Already have an account? <Link to="/login" className="text-primary">Sign in</Link>
                </p>
            </AuthLayout>

    );
}

export default Index;