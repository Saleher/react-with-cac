import {React, useId} from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChnage,
    currencyOptions = [],
    selectCurrency = "usd",
    ammountDisabled = false,
    currencyDisable = false,
    className=""
}){


    const amountInputId = useId()

   

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2 text-left">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    <strong className="text-black">{label}</strong>
                </label>
                <input         
                    id={amountInputId}           
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled = {ammountDisabled}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full"><strong>Currency Type</strong></p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onSelect={(e) => onCurrencyChnage && onCurrencyChnage(e.target.value)}
                    disabled={currencyDisable}
                    onChange={(e) => onCurrencyChnage && onCurrencyChnage(e.target.value)}
                >                    
               
               {currencyOptions.map((currency) => (
                 <option key={currency} value={currency}>
                    {currency}
                </option>
               ) )}
                
                </select>
            </div>
        </div>
    );
}


export default InputBox;