import React from 'react';
import { RiKeyboardLine } from 'react-icons/ri';
import { SlCalender }  from 'react-icons/sl';

function TextInput({ type, name, value, placeholder, onChange, onBlur }) {
    return (
    //     <div className="input-with-icon-form-group">
    //        {type == 'text' && <i className="fas fa-user text-primary"></i>}
    //        {type == 'password' && <i className="fas fa-lock text-primary"></i>}
    //        {type == 'email' && <i className="fas fa-envelope text-primary"></i>}
    //        {type == 'general' && <i className="text-primary"><RiKeyboardLine size={20}/></i>}
    //        {type == 'date' && <i className="text-primary"><SlCalender size={17}/></i>}
    //         <input onBlur={onBlur} value={value} name={name} onChange={onChange} type={type == 'general' ? 'text' : type} placeholder={placeholder} />
    //   </div>
        <div className="relative z-0 w-full mb-6 border-b border-gray-600">
            <input onBlur={onBlur} value={value} onChange={onChange} type={type} name={name} className="block py-2.5 px-0 w-full text-base focus:outline-none focus:ring-0 focus:border-slate-800 peer text-gray-800" placeholder=" " />
            <label className="peer-focus:font-medium absolute text-base text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:left-0 peer-focus:text-slate-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 z-10">{placeholder}</label>
        </div>
    );
}

export default TextInput;