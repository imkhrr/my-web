import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

function FormError(props) {
    return (
        <div>
            <span className="icon is-small is-right has-text-danger">
                <FaExclamationTriangle />
            </span>
            <p className="help is-danger">{props.message}</p>
        </div>
    );
}

export default FormError;