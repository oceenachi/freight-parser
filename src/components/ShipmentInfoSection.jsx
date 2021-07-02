import React from 'react';
import styled from 'styled-components';
import {FaShip} from "react-icons/fa";
import {IoAirplane} from "react-icons/io5";
import { formatCurrency } from '../utils/helperFunctions';

const ShipmentInfoSection = ({result}) => {

    // destructure state from result prop.
    const {quotePrice, startingCountry, destinationCountry, shippingChannel,  start, end, rangeStart, rangeInterval} = result;

    return (
        <StyledShipmentInfo>
            <div className="quote-box-left">
                <div className="quote-box-left__header">
                    {shippingChannel === 'ocean' ? <FaShip className="quote-box__icon" size={50} /> : <IoAirplane className="quote-box__icon" size={50} />}
                {`Traditional ${shippingChannel} freight`}
                </div>
                <div className="quote-box-left__body">
                    <p className="quote-box-left__subtitle">{`${rangeStart} - ${rangeStart + rangeInterval} days`}</p>
                    <div className="quote-box-left__text">
                        <p>Estimated delivery</p>
                        <span>{`${start} - ${end}`}</span>

                    </div>
                 
                </div>

            </div>
            <div className="quote-box-right">
                <div className="quote-box-right__header">
                    {`${startingCountry} -> ${destinationCountry}`}

                </div>
                <div className="quote-box-right__body">
                    <p>US$ {formatCurrency(quotePrice)}</p>
                </div>
            </div>
            
        </StyledShipmentInfo>
    )
}
// custom shipment info styles
const StyledShipmentInfo = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    font-size: 14px;
    border: 1px black solid;

.quote-box-left{
    border-right: 1px black solid;
    min-width: 230px;

}
.quote-box-left__header{
    display: flex;
    align-items: center;
    border-bottom: 1px black solid; 
    padding-left: 10px;
}
.quote-box__icon{
    margin-right: 5px;
    color:#0070fe;
}
.quote-box-left__body{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;

}
.quote-box-left__subtitle{
    color: #4129c7;
    font-weight: 700;
    font-size: 20px;
    padding-top: 10px;

}
.quote-box-left__text{
    font-size: 15px;
    text-align: center;
    margin: 10px 0;
    span{
        font-weight: bold;
    }
}

.quote-box-right__header{
    height: 20%;
    font-weight: 600;
    color: #fff;
    background-color: #0200fe;
    display: flex;
    align-items: center;
    justify-content: center;
}
.quote-box-right__body{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
    font-size: 40px;
}

// responsive media queries styling
@media only screen and (max-width: 600px) {
    display: block;
    border: none;

    .quote-box-left, .quote-box-right {
        border: 1px black solid;
        margin-bottom: 20px;
    }
    .quote-box-left {
        margin-bottom: 20px;
    }
    .quote-box-left__header {
        justify-content: center;
    }
    .quote-box-right__header{
    }
     .quote-box-right {
         height: 150px;
    }
    .quote-box-right__body{
        p{
            font-size: 35px;
        }
    }
}

`;
export default ShipmentInfoSection
