import { useState } from "react";

export function useFormInput(initialInputValue){

    const [inputValue, setInputValue] = useState(initialInputValue);


    function handleInputChange(e){
        setInputValue(e.target.value)
    }

    const inputProps = {
        value : inputValue,
        onChange : handleInputChange
    }




    return inputProps; 
}

