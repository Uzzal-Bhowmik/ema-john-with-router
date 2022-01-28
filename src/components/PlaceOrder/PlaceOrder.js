import React from 'react';
import confirmationImg from '../../images/cheers.gif';

const PlaceOrder = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <img style={{ boxShadow: "5px 5px 20px" }} src={confirmationImg} alt="" />
        </div>
    );
};

export default PlaceOrder;