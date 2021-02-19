import React from 'react';
import { Link } from "react-router-dom";


//Tailwindcss
import "../../index.css";

// images
import Facebook from "../../assets/Facebook.svg";
import googlePlus from "../../assets/google-plus.svg"
import instagram from "../../assets/instagram.svg"
import Linkedin from "../../assets/Linkedin.svg"
import pinterest from "../../assets/pinterest.svg"
import twitter from "../../assets/twitter.svg"
import Youtube from "../../assets/YouTube.svg"



const Footer = () => {
    return (

        <div>
            <div className="bg-gray-900 text-white px-20 md:px-28  py-5">
                <h1 className="uppercase text-2xl mb-8 md:text-3xl ">logo</h1>
                <div className="flex justify-between ">
                    <ul  className="text-sm mr-6">
                        <span className="font-bold  md:text-lg">Policies</span>
                        <li className="mt-6"> <Link to="/privacy">Privacy</Link> </li>
                        <li className="mt-6">Disclaimer</li>
                        <li className="mt-6">Terms & Condition</li>
                    </ul>

                    <ul className="text-sm mr-6">
                        <span className="font-bold  md:text-lg">My Account</span>
                        <li className="mt-6">Track Order</li>
                        <li className="mt-6">Cancellation & Refund</li>
                        <li className="mt-6">Shipping & Delivery</li>
                    </ul>

                    <ul  className="text-sm mr-6" >
                        <span className="font-bold  md:text-lg">Company</span>
                        <li className="mt-6"> <Link to="/about">About Us</Link> </li>
                        <li className="mt-6"> <Link to="/contact">Contact Us</Link> </li>
                        <li className="mt-6"> <Link to="/faq">FAQs</Link></li>
                    </ul>

                    <ul  className="text-sm">
                        <span className="font-bold  md:text-lg">Contact</span>
                        <li className="mt-6"> <i class="fa fa-phone p-2 text-white bg-red-400 rounded-full mr-2 "></i> Bangalore</li>
                        <li className="mt-4">  <i class="fa fa-envelope p-2 text-white bg-red-400 rounded-full  mr-2 "></i>9876543456</li>
                        <li className="mt-4"> <i class="fas fa-map-marker p-2 text-white bg-red-400 rounded-full  mr-2 "></i> abc@abc.com</li>
                    </ul>
                </div>
            </div>

            <div className="bg-red-300 p-2 text-white  text-center">
                <span className="mr-3">Follow us</span>
                <img  alt=""  src={Facebook} className="fa fa-phone px-3 py-2 text-black bg-white rounded-full mr-2"/>
                <img  alt="" src={googlePlus} className="fa fa-phone px-2 py-2 text-black bg-white rounded-full mr-2"/>
                <img  alt="" src={instagram} className="fa fa-phone px-2 py-2 text-black bg-white rounded-full mr-2"/>
                <img  alt="" src={Linkedin} className="fa fa-phone px-2 py-2 text-black bg-white rounded-full mr-2"/>
                <img  alt="" src={pinterest} className="fa fa-phone px-2 py-2 text-black bg-white rounded-full mr-2"/>
                <img  alt="" src={twitter} className="fa fa-phone px-2 py-2 text-black bg-white rounded-full mr-2"/>
                <img  alt="" src={Youtube} className="fa fa-phone px-2 py-2 text-black bg-white rounded-full mr-2"/>

            </div>

        </div>

    )
}

export default Footer;