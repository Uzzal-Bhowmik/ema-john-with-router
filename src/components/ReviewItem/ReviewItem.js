import React from 'react';

const ReviewItem = (props) => {
    const { name, seller, price, quantity, key } = props.product;
    return (
        <div className='product' >
            <div>
                <h4 className="product-name">{name}</h4>
                <p>Price: ${price}</p>
                <p><small>by: {seller}</small></p>
                <p>Quantity: {quantity}</p>
                <button className='btn-regular' onClick={() => {
                    props.handleRemove(key)
                }}>Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;