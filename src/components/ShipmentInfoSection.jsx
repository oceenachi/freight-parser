import React from 'react';
import styled from 'styled-components';
import {FaShip} from "react-icons/fa";
import {IoAirplane} from "react-icons/io5";
import {TiArrowRight} from "react-icons/ti";

const ShipmentInfoSection = ({freightType}) => {
    return (
        <StyledShipmentInfo>
            <div className="quote-box-left">
                <div className="quote-box-left__header">
                    {freightType === 'Ocean' ? <FaShip color={'#0070fe'} size={50} style={{marginRight: '5px'}} /> : <IoAirplane color={'#0070fe'} size={50} style={{marginRight: '5px'}}/>}
  {`Traditional ${freightType} freight`}
                </div>
                <div className="quote-box-left__body">
                    <p className="quote-box-left__subtitle">4-6 days</p>
                    <div className="quote-box-left__text">
                        <p>Estimated delivery</p>
                        <span>Oct 10 - Oct 12</span>

                    </div>
                 

                </div>

            </div>
            <div className="quote-box-right">
                <div className="quote-box-right__header">
                    China <TiArrowRight color={'#fff'}/> USA

                </div>
                <div className="quote-box-right__body">
                    <p>US$ 40,000</p>
                </div>
            </div>
            
        </StyledShipmentInfo>
    )
}
const StyledShipmentInfo = styled.div`
display: grid;
grid-template-columns: 1fr 2fr;
/* width: 91%; */
font-size: 14px;
border: 1px black solid;

.quote-box-left{
border-right: 1px black solid;
}
.quote-box-left__header{
    display: flex;
    align-items: center;
    border-bottom: 1px black solid;
    padding-left: 10px;
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
    span{
        font-weight: bold;
    }
}



.quote-box-right{
    /* border: 1px black solid; */
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

`;
export default ShipmentInfoSection
