import React from 'react';
import './TextInput.css'
import { RiKeyboardLine } from 'react-icons/ri';
import { SlCalender }  from 'react-icons/sl';

function TextInput({type, name, placeholder, value, onChange, onBlur}) {
    return (
        <div className="input-with-icon-form-group">
           {type === 'text' && <i className="fas fa-user text-primary"></i>}
           {type === 'password' && <i className="fas fa-lock text-primary"></i>}
           {type === 'email' && <i className="fas fa-envelope text-primary"></i>}
           {type === 'general' && <i className="text-primary"><RiKeyboardLine size={20}/></i>}
           {type === 'date' && <i className="text-primary"><SlCalender size={17}/></i>}
            <input onBlur={onBlur} value={value} name={name} onChange={onChange} type={type === 'general' ? 'text' : type} placeholder={placeholder} />
      </div>
    );
}

export default TextInput;