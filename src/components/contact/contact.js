import React from "react";

const Contact = () => {
    return (
        <div>
            <div className=" bg-red-100">
                <div className="flex flex-col justify-center items-center p-24  w-10/12  md:w-8/12 m-auto">
                    <h1 className="font-bold text-2xl md:text-4xl mb-4">Contact us</h1>
                    <p className="text-sm md:text-base mb-8 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem nobis incidunt rerum reiciendis architecto. Accusamus sit laudantium, corrupti necessitatibus.</p>


                    <div className="bg-white  px-4 md:px-20 py-6">
                        <div className="mb-5 text-sm md:text-base"> <i class="fa fa-phone p-3 text-white bg-red-400 rounded-full mr-2 md:mr-10"></i>   +91 912345674</div>
                        <div className="mb-5 text-sm md:text-base"> <i class="fa fa-envelope p-3 text-white bg-red-400 rounded-full  mr-2 md:mr-10"></i> test@gmail.com</div>
                        <div className="text-sm md:text-base"> <i class="fas fa-map-marker p-3 text-white bg-red-400 rounded-full  mr-2 md:mr-10"></i> Test Address test street test cbe-545678 </div>
                    </div>
                </div>
            </div>

            <div className="w-5/12 m-auto mb-4" >
                <h1 className="m-8 text-center font-bold text-xl md:text-2xl">Drop us a line</h1>
                <form>
                    <input placeholder="Full Name *" className="border-2 border-gray-200 block w-full h-11 rounded-lg mb-5 outline-none px-3 text-black"  />
                    <input placeholder="Email *" className="border-2 border-gray-200 block w-full h-11 rounded-lg mb-5 outline-none px-3 text-black" />
                    <textarea className="border-2 border-gray-200 block w-full h-24 pt-3 rounded-lg mb-5 outline-none px-3 text-black"> Message</textarea>
                    <button className="px-8 py-2 rounded-lg uppercase text-white bg-red-400">Submit</button>
                </form>
            </div>
        </div>

    )
}

export default Contact;