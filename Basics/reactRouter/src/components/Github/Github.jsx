import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){


    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, []);


    const data = useLoaderData();


    return(
        <>
            <div className="w-6/12 mx-auto py-[45px]">
                <h2 className="mb-4">Github</h2>
                <div className="relative flex flex-col text-gray-700 shadow-md bg-clip-border rounded-xl w-96">
                    <figure className="relative h-56 mx-4 overflow-hidden">
                        <img src={data.avatar_url} alt="Image"/>
                    </figure>
                    <div className="p-6">
                        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug">
                            {data.followers}
                        </h5>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Github;



export const githubInfoLoader = async () => {
   const response = await fetch('https://api.github.com/users/hiteshchoudhary')
   return response.json();
}