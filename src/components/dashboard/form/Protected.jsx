import React, { useEffect, useState} from 'react';
import { Navigate } from "react-router";
import { getToken } from '../../utils/storage';

const Protected = ({ children }) => {

    if(!getToken()) {
        return <Navigate to="/login" replace/>
    }
    return children;
}

export default Protected;
