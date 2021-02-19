import React, { Component } from 'react';
import "../../index.css";
import CartItem from "./cart_items/cart-items";
import Empty_cart from './empty_cart/empty_cart';
import OrderSummary from "./order_summary/orderSummary";



class Cart extends Component {


    state = {
        items: [
            {
                id: 1,
                name: "Pretty Pink Rose Basket made from Bengal Bamboo",
                qty: 100,
                total: "30000"
            },
            {
                id: 2,
                name: "Pretty Pink Rose Basket made from Bengal Bamboo",
                qty: 300,
                total: "30000"
            }
        ]
    }

    onAddQty = (id) => {
        const newItem = [...this.state.items];
        for (let data in newItem) {
            if (newItem[data].id === id) {
                newItem[data].qty += 1;
            }
        }

        this.setState({ item: newItem });

    }
    onLessQty = (id) => {
        const newItem = [...this.state.items];
        for (let data in newItem) {
            if (newItem[data].id === id) {
                newItem[data].qty -= 1;
            }
        }

        this.setState({ item: newItem });
    }

    onRemove = (id) => {
        let newArr = [...this.state.items];
        newArr = newArr.filter((data) => data.id !== id);
        this.setState({ items: newArr });
    }

    getTotalPrice = () => {
        let total = 0;
        const newArr = [...this.state.items]
        for (let data in newArr) {
            total += +newArr[data].total
        }
        return total;
    }


    render() {

        let cart = <div className="flex flex-col pb-10 md:flex-row justify-center">
            <div className="md:w-4/5">
                <CartItem
                    items={this.state.items}
                    add={this.onAddQty}
                    less={this.onLessQty}
                    remove={this.onRemove}
                />
                <br />
            </div>
            <div className="md:w-2/5">
                <OrderSummary
                    total={this.getTotalPrice()} />
            </div>

        </div>



        console.log(this.getTotalPrice())
        return (
            <div className="w-4/5 m-auto">
                <div className="mt-6 md:mb-14 md:text-base text-sm mb-8">Home / Flowers / <span className="text-red-400"> {this.props.name || "Pretty Pink Rose Basket made from Bengal Bamboo"} </span> </div>

                <div className="flex flex-col pb-10 md:flex-row justify-center">

                    { this.state.items.length <= 0 ? <Empty_cart /> : cart }

                </div>

            </div>
        )
    }
}

export default Cart;