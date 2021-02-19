import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../../assets/empty_cart.svg";

const Empty_cart = () => {
    return (
        <div className="border border-gray-400 py-40 text-center px-96">
            <img src={img} />
            <div className="mt-4 font-bold text-xl">  your cart is empty</div>
            <div className="mt-4 underline text-red-500 cursor-pointer">
                <Link to="/"> Go to Shop</Link>
            </div>
        </div>
    )
}
export default Empty_cart