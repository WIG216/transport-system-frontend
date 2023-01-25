import React from 'react';
import './error.css';

function ErrorMessage({ error, visible }) {
    if(!visible || !error) return null;

    return (
        <div className="auth-error-text">{error}</div>
    );
}

export default ErrorMessage;
