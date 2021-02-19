import React from 'react';
import "../../index.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="bg-red-100 border-b-2 border-red-200 flex items-center md:h-20  h-28">
                <div className="w-5/6 m-auto flex  flex-col text-center   md:flex-row   justify-between ">

                    <div className="border border-gray-300 py-1 px-2 text-justify md:text-center bg-red-200 rounded-lg  w-60 ml-16  md:ml-0 md:w-auto">
                        <i class="fa fa-search text-gray-600 text-sm cursor-pointer" aria-hidden="true"></i>
                        <input className="bg-red-200 outline-none  pl-2 w-50 text-black" placeholder="Search" />
                    </div>
                    <div>
                        <h1 className="text-lg  md:text-3xl  -ml-14">LOGO</h1>
                    </div>
                    <div className="-ml-14 mt-1 md:mt-0 md:ml-0">
                        <i class="fa fa-user text-gray-700 bg-red-300 p-2 mr-3 rounded-full" aria-hidden="true"></i>
                        <Link to="/"><i class="fa fa-shopping-cart  text-gray-700 bg-red-300 p-2 mr-3 rounded-full" aria-hidden="true"></i></Link>
                        <i class="fa fa-map-marker  text-gray-700 bg-red-300 px-3 py-2  rounded-full" aria-hidden="true"></i>

                    </div>
                </div>
            </div>

            <div className="bg-red-100 h-14 flex items-center  border-b border-red-200  ">
                <div className="w-5/6 m-auto flex justify-evenly px-5  ">
                    <div className="mr-2 text-sm md:mr-0  md:text-base relative py-4 border-b-2 border-red-500 ">Home </div>
                    <div className="mr-2 text-sm md:mr-0  md:text-base py-4 ">Shop <span className="fas fa-angle-down text-red-400 relative top-0.5"></span></div>
                    <div className="mr-2 text-sm md:mr-0  md:text-base py-4">Flowers</div>
                    <div className="mr-2 text-sm md:mr-0  md:text-base py-4">Cakes</div>
                    <div className="mr-2 text-sm md:mr-0  md:text-base py-4">Chocolates</div>
                    <div className="mr-2 text-sm md:mr-0  md:text-base py-4">Teddy</div>
                    <div className="mr-2 text-sm md:mr-0  md:text-base py-4">Occasions</div>
                    <div className="mr-2 text-sm md:mr-0  md:text-base py-4">Relations</div>
                    <div className="mr-2 text-sm md:mr-0  md:text-base py-4">Cart</div>
                </div>
            </div>

        </div>

    )
}
export default Navbar;