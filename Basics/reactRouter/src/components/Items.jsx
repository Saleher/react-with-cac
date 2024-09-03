import React from "react";


function Item({itemName, isPacked}){
    return(
        <>
            <li className="item">{isPacked ? itemName + '✅' : itemName + '❌'}</li>
        </>
    )
}

export default Item;