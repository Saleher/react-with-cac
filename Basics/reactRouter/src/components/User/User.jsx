import React from "react";
import { useParams } from "react-router-dom";

function User(){

    const {userId} = useParams()

    return(
        <>
           <div className="flex items-center h-screen">
            <div className="bg-gray-400 my-4 p-4 text-center w-6/12 mx-auto">
            User: {userId}
            </div>
           </div>
        </>
    )
}

export default User;