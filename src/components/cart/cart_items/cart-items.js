import React, { Component } from 'react';
import "../../../index.css";
import img from "../../../assets/rose_bucket.jpeg"

class CartItem extends Component {



    render() {
        return (
            <div>

                <div>
                    <h2 className="text-2xl capitilize mb-7 ">Your Cart</h2>
                </div>

                {
                    this.props.items.map((item, i) => {
                        return (
                            <div key={i} className="bg-red-100 py-4 px-2  flex justify-between mb-5 ">

                                <div className="flex  w-3/3">
                                    <img src={img} className="w-14 flex items-center mr-3" alt=""/>
                                    <div>
                                        <p className="text-sm capitilize text-gray-900 mb-3 tracking-wider pr-2"> {item.name || "Pretty Pink Rose Basket made from Bengal Bamboo"} </p>
                                        <p className="text-gray-900 text-md">&#8377;  {item.total || "30000"} <span className="px-2 line-through text-gray-600 text-sm"> &#8377;  {this.props.amount || " 30000"}</span>   </p>
                                    </div>

                                </div>

                                <div className=" w-1/3 flex justify-center items-center select-none md:mr-1 mr-3" >
                                    <p className="border border-gray-300 lg:px-2   px-0 py-1 bg-white text-black rounded-lg">
                                        <i className="fa fa-angle-left md:mr-1.5  mr-2 text-red-500 cursor-pointer" onClick={() => this.props.less(item.id)}></i>
                                        {item.qty}
                                        <i className="fa fa-angle-right md:ml-1.5  ml-2 text-red-500 cursor-pointer" onClick={() => this.props.add(item.id)}></i>
                                    </p>
                                </div>

                                <div className=" w-1/3 flex flex-col justify-between items-end p-2">
                                    <p className="text-gray-900 text-sm md:text-base"> {item.total || "$  300000"} </p>
                                    <p className="text-gray-600 text-sm underline cursor-pointer" onClick={() => this.props.remove(item.id)}>Remove</p>
                                </div>
                            </div>
                        )

                    })
                }


            </div>
        )
    }
}

export default CartItem;