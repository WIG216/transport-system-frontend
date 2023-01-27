import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router";
import Form from '../../components/dashboard/form/components/Form/Form';
import FormField from '../../components/dashboard/form/components/FormField/FormField';
import Button from '../../components/dashboard/form/components/Button/Button';
import * as Yup from 'yup';
import AuthLayout from '../../components/dashboard/form/components/Layout/AuthLayout';
import { Link } from 'react-router-dom';
import ErrorMessage from '../../components/dashboard/form/components/ErrorMessage/ErrorMessage';
import { loginUser } from '../../services/auth';
import { storeToken, getToken } from '../../utils/storage';
import { toast } from 'react-toastify';

const initialValues = {
    email: '',
    password: ''
}

function Index() {
    const navigate = useNavigate();

    const [error, setError] = useState(null);
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Enter a valid email').required('Email field is required'),
        password: Yup.string().min(4, 'Password must be above 4 characters').required('Password Required')
    })

    const handleLogin = (values) => {
        console.log(values)
        loginUser(values).then((res) => {
            setError(null);
            if (res.ok) {
                console.log(res);
                storeToken(res.data.accessToken);
                navigate('/dashboard');

                toast.success("Logged In Succesfuly", {
                    pauseOnHover: false,
                    closeOnClick: true,
                })

            } else {
                console.log(res);
                toast.error(res.data.message, {
                    pauseOnHover: false,
                    closeOnClick: true,
                })
                setError(res.data.message);
            }
        }).catch(err => {
            console.log(err);
        })
    }


    if (getToken() != null) {
        return <Navigate to="/dashboard" replace />
    }

    return (
        <AuthLayout title="Welcome Back">
            <form action="" className="auth-form">
                <p>Login</p>
                {error && <ErrorMessage error={error} visible={true} />}
                <Form
                    initialValues={initialValues}
                    onSubmit={handleLogin}
                    validationSchema={validationSchema}
                >

                    <FormField name="email" type="email" placeholder="Email" />

                    <FormField name="password" type="password" placeholder="Password" />

                    <Button title="Login" />
                </Form>
            </form>
            <p className="text-base">
                Don't have an account? <Link to="/register" className="font-semibold">Sign up</Link>
            </p>
        </AuthLayout>
    );
}

export default Index;
