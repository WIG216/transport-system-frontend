import React, { useState, useEffect } from 'react';
import './DeleteModal.css';
import * as Yup from 'yup';
import { ImCancelCircle } from 'react-icons/im';
import { Button } from '../..';

function DeleteModal({ onAccept, onCancel }) {

    return (
        <div>
            <div  className='modal-container'>
                <div className='modal-head'>
                    <p className="modal-title">Are you sure you want to delete ?</p>
                    <ImCancelCircle style={{cursor: 'pointer'}} onClick={onCancel} size={22} color="#fff"/>
                </div>
                <div className='delete modal-content'>
                    <div className="modal-buttons">
                        <Button onClicked={onAccept} text="Yes" type="danger" />
                        <Button onClicked={onCancel} text="No" type="outline" />
                    </div>
                </div>
            </div>
            <div className="modal-shadow" onClick={onCancel}>
           
            </div>
        </div>
    );
}

export default DeleteModal;