import React from "react";


function Card({name, content}){
    return(
        <>
            <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border ">
                <div className="p-6">
                    <h5 className="block mb-2 text-xl font-sans text-base font-semibold leading-snug tracking-normal text-blue-gray-900">{name}</h5>
                    <p className="text-block text-base font-sans">
                    {content}
                    </p>
                </div>
            </div>
        </>
    )
}



export default Card;