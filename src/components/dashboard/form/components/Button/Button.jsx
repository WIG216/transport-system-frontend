import React from 'react';
import { useFormikContext } from 'formik';
import './Button.css'

function Button({ title, isOutLined = false, isFullWidth = true }) {
    const { handleSubmit } = useFormikContext();

    return (
        <button onClick={handleSubmit}  type="submit" className={`text-white w-full items-center bg-gray-800 hover:bg-gray-900 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700`}>{title}</button>
    );
}

export default Button;