import React from 'react';
import { useFormikContext } from 'formik';
import './Button.css';

function Button({ title, isOutLined = false, isFullWidth = true }) {
    const { handleSubmit } = useFormikContext();

    return (
        <button onClick={handleSubmit}  type="submit" className={`u-margin-bottom-small btn-auth ${!isFullWidth ? 'not-full-width ' : ''} ${isOutLined ? 'outlined' : ''}`}>{title}</button>
    );
}

export default Button;