import React from 'react';
import{withStorageListener} from './withStorageListener';
import './ChangeAlert.css';

function ChangeAlert({show,toggleShow}){
    
    if(show){
        return(
        <div className="ChangeAlert-bg">
            <div className="ChangeAlert-container">
                <p>It looks like you changed your TODOs in another browser tab or window.</p>
                <p>Do you want to sync your TODOs?</p>
                <button
                    className="TodoForm-button--add"
                    onClick={toggleShow}>Yes!
                </button>
            </div>
        </div>
    );
    }else{
        return null;
    }
}

const ChangeAlertWithStorageListener=withStorageListener(ChangeAlert);

export{ChangeAlertWithStorageListener};