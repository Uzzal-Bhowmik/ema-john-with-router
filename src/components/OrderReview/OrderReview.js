import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import '../Shop/Shop.css';
import { useNavigate } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb, clearTheCart } from '../../utilities/fakedb';


const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);

    // console.log(cart);

    const handleRemove = (productId) => {
        const newCart = cart.filter(product => product.key !== productId);
        setCart(newCart);
        removeFromDb(productId)
    }

    let navigate = useNavigate();
    const handlePlaceOrder = () => {
        navigate('/placeorder');
        setCart([]);
        clearTheCart();
    }


    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                    ></ReviewItem>)
                }
            </div>

            <div className='cart-container'>
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className='btn-regular'>Place Order</button>
                </Cart>

            </div>
        </div>
    );
};

export default OrderReview;