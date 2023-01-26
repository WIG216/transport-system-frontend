import React from 'react';
import './Button.css'

function Button({text, type, onClicked}) {
    return (
        <div>
           {type === 'primary' && <a onClick={onClicked} className="btn primary-btn">{text}</a>}
           {type === 'danger' && <a  onClick={onClicked} className="btn btn-danger">{text}</a>}
           {type === 'outline' && <a onClick={onClicked} className="btn btn-outline-primary">{text}</a>}
        </div>
    );
}

export default Button;