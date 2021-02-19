import React, { Component } from 'react';
import "../../../index.css";

class OrderSummary extends Component {

    state = {
        text: "CODE2021",
        error: false,
        success: false,
        value: ""
    }

    onChangeEvent = (event) => {
        if (event.target.value === "") {
            this.setState({ error: false, success: false });
        }
        this.setState({ value: event.target.value });
    }

    checkData = () => {

        if (this.state.text === this.state.value) {
            this.setState({ success: true, error: false });
        }
        else {
            this.setState({ error: true, success: false });
        }
    }


    render() {
        return (
            <div className="font-serif w-11/12 ml-3">

                <div>
                    <h2 className="text-2xl capitilize mb-7">Order Summary</h2>
                </div>

                <div className="flex justify-between mb-5 pr-4 items-center">
                    <p className="text-sm text-gray-700"> Lorem ipsum dolor sit amet consectetu </p>
                    <div className="border-dashed border-2 border-red-400 px-5 py-2 rounded-lg uppercase text-sm tracking-wider">code2021</div>
                </div>

                <div className="flex justify-between mb-5 pr-4 items-center">
                    <p className="text-sm text-gray-700"> Lorem ipsum dolor sit amet consectetu </p>
                    <div className="border-dashed border-2 border-red-400 px-5 py-2 rounded-lg uppercase text-sm tracking-wider">code2021</div>
                </div>

                <div className="flex mb-4 relative">

                    {this.state.success ? <div className="text-green-500 text-xs absolute right-24 top-2"> Code applied !</div> : null}
                    {this.state.error ? <div className="text-red-500 text-xs absolute right-24 top-2"> Invalid code! <i class="fa fa-exclamation-triangle"></i> </div> : null}

                    <input
                        className="border-2 rounded-lg h-9 w-54 outline-none px-3 pr-2"
                        placeholder="Enter the coupon"
                        onChange={(event) => this.onChangeEvent(event)} />

                    <button
                        className="uppercase py-1 ml-3  rounded-lg text-white px-4 bg-red-400 outline-none border-none focus:outline-none"
                        onClick={this.checkData} >apply</button>
                </div>

                <div className="border p-4">
                    <div className="flex justify-between mb-3">
                        <p className="text-sm text-gray-700"> Sub Total </p>
                        <div className="uppercase text-sm tracking-wider">&#8377;  {this.props.total}</div>
                    </div>
                    <div className="flex justify-between mb-3">
                        <p className="text-sm text-gray-700"> Shipping </p>
                        <div className="uppercase text-sm tracking-wider">$ 50</div>
                    </div>
                    <div className="flex justify-between mb-3">
                        <p className="text-sm text-gray-700"> Discount </p>
                        <div className="uppercase text-sm tracking-wider text-red-500 "> - &#8377;  300</div>
                    </div>
                    <div className="flex justify-between mb-3 bg-gray-300 px-2 py-1">
                        <p className="text-sm text-gray-700 font-bold"> Total </p>
                        <div className="uppercase text-sm tracking-wider font-bold"> &#8377;  {this.props.total - 300} </div>
                    </div>

                    <button className="uppercase py-1 text-md rounded-lg text-white px-4 bg-red-400 w-full">checkout</button>
                </div>

            </div>
        )
    }
}

export default OrderSummary;