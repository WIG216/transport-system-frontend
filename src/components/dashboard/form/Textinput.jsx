import React from 'react';
import { RiKeyboardLine } from 'react-icons/ri';
import { SlCalender } from 'react-icons/sl';

function TextInput({ type, name, value, placeholder, onChange, onBlur }) {
    return (
        <div className="relative z-0 w-full mb-6 border-b border-gray-600">
            <input 
                name={name} 
                type={type} 
                onChange={onChange} 
                onBlur={onBlur} 
                value={value} 
                className="block py-2.5 px-0 w-full text-base focus:outline-none focus:ring-0 focus:border-slate-800 peer text-gray-800" placeholder=" " />
            <label className="peer-focus:font-medium absolute text-base text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:left-0 peer-focus:text-slate-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 z-10">{placeholder}</label>
        </div>
    );
}
export default TextInput;