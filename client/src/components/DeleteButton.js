import React from 'react';
import axios from 'axios';

export default props => {
    const { productId, successCallback } = props;
    const deleteMe = e => {
        axios.delete(`http://localhost:8000/api/product/${productId}`)
            .then(res => { successCallback(); })
    }
    return (
        <button onClick={ deleteMe } className="btn btn-outline-secondary btn-sm">
            Delete
        </button>
    )
}