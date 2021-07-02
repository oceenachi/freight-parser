import React from 'react';
import styled from "styled-components";

const QuoteSection = ({quoteData, setQuoteData, createQuote, errors}) => {

    const handleChange = (e) => {

        let data  = {...quoteData, [e.target.name] : e.target.value};
        setQuoteData(data);
    }

    return (
        <StyledQuote>
            <div className="quote-forminput__wrapper">
                <label htmlFor="startingCountry">Starting country</label>
                <input type="text" name="startingCountry" onChange={(e)=> handleChange(e)}/>
                <span className="error">{errors.error && errors.data.startingCountry}</span>

            </div>
           
           <div className="quote-forminput__wrapper">
                 <label htmlFor="destinationCountry">Destination country</label>
                <input type="text" name="destinationCountry" onChange={(e)=> handleChange(e)}/>
                <span className="error">{errors.error && errors.data.destinationCountry}</span>

           </div>
            
            <div className="quote-forminput__wrapper">
                <label htmlFor="quotePrice">Quote price</label>
                <input type="text" name="quotePrice" onChange={(e)=> handleChange(e)}/>
                <span className="error">{errors.error && errors.data.quotePrice}</span>
            </div>
            <div>
                <label htmlFor="shippingChannel">Shipping Channel</label>
                <select name="shippingChannel" id="shippingChannel" onChange={(e)=> handleChange(e)}>
                    <option value="ocean">Ocean</option>
                    <option value="air">Air</option>
                </select>
                <span className="error">{errors.error && errors.data.shippingChannel}</span>

            </div>

            <button onClick={() => createQuote()}>Create quote</button>
            
            
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

.quote-forminput__wrapper{
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
.error{
    color: red;
    font-size: 12px;
    margin-bottom: 0;
    padding-bottom: 0;
}


`;
export default QuoteSection;
