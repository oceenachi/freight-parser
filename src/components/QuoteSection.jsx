import React from 'react';
import styled from "styled-components";

const QuoteSection = () => {
    return (
        <StyledQuote>
            <label htmlFor="startingCountry">Starting country</label>
            <input type="text" name="startingCountry"/>

            <label htmlFor="destinationCountry">Destination country</label>
            <input type="text" name="destinationCountry"/>

            <label htmlFor="quotePrice">Quote price</label>
            <input type="text" name="quotePrice"/>

            <label htmlFor="shippingChannel">Shipping Channel</label>
            <select name="shippingChannel" id="shippingChannel">
                <option value="ocean">Ocean</option>
                <option value="air">Air</option>
            </select>

            <button>Create quote</button>
            
            
        </StyledQuote>
    )
}
const StyledQuote = styled.div`

input[type=text], select, label{
    display: block;
}

label{
font-weight: 700;
font-size: 15px;
}

input[type=text]{
    margin-bottom: 10px;
}
button{
    margin: 10px 0;
    width: 100px;
    padding: 10px;
    background-color:#3898ec;
    color: white;
    border: none;
}


`;
export default QuoteSection;
