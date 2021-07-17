import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { checkDelivery, validateInputs } from '../utils/helperFunctions';
import QuoteSection from './QuoteInfoSection';
import ShipmentInfoSection from './ShipmentInfoSection';


// Parent body rendering input section and shipment details
const ParentSection = () => {

    // set initial states for variable states
    const [quoteData, setQuoteData] = useState({shippingChannel: "air"});
    const [result, setResult] = useState({calculated:false});
    const [errors, setErrors] = useState({});

    const [channelData, setChannelData] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            const channelData = [{ channel: "air", displayString: "Air", imgUrl: "./assets/plane.png", minDays: 1, maxDays: 2 },
            { channel: "ocean", displayString: "Ocean", imgUrl: "./assets/ship.png", minDays: 5, maxDays: 10 },
            { channel: "rail", displayString: "Rail", imgUrl: "./assets/ship.png", minDays: 10, maxDays: 20 }]
            setChannelData(channelData);

        }, 3000);

    }, [])

    // set structure for quote info validation
    const quoteDataStructure = ["destinationCountry", "quotePrice", "shippingChannel", "startingCountry"];

    const createQuote = () => {

        //call validation function on inputs 
        // console.log({channelData})
        
        let validationResult = validateInputs(quoteData, quoteDataStructure);
        if(validationResult.error){

            // set error object to validation result 
            setErrors(validationResult);
            setTimeout(()=> {
                setErrors({});
            }, 5000)
            return;
        }
        setResult((!errors.error) && {...checkDelivery(quoteData.shippingChannel, channelData), ...quoteData, calculated: true});
    }

    return (
        <StyledParent>
            <QuoteSection quoteData={quoteData} setQuoteData={setQuoteData} errors={errors} channelData={channelData} createQuote={createQuote}/>
            {result.calculated && <ShipmentInfoSection result={result} /> }
            
        </StyledParent>
    )
}
// body styles
const StyledParent = styled.div`
margin: 10px 20px 0;
`;
export default ParentSection
