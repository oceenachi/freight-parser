import React, {useState} from 'react';
import styled from 'styled-components';
import { checkDelivery, validateInputs } from '../utils/helperFunctions';
import QuoteSection from './QuoteInfoSection';
import ShipmentInfoSection from './ShipmentInfoSection';


// Parent body rendering input section and shipment details
const ParentSection = () => {

    // set initial states for variable states
    const [quoteData, setQuoteData] = useState({shippingChannel: "ocean"});
    const [result, setResult] = useState({calculated:false});
    const [errors, setErrors] = useState({});

    // set structure for quote info validation
    const quoteDataStructure = ["destinationCountry", "quotePrice", "shippingChannel", "startingCountry"];

    const createQuote = () => {

        //call validation function on inputs 
        let validationResult = validateInputs(quoteData, quoteDataStructure);
        if(validationResult.error){

            // set error object to validation result 
            setErrors(validationResult);
            setTimeout(()=> {
                setErrors({});
            }, 5000)
            return;
        }
        setResult((!errors.error) && {...checkDelivery(quoteData.shippingChannel), ...quoteData, calculated: true});
    }

    return (
        <StyledParent>
            <QuoteSection quoteData={quoteData} setQuoteData={setQuoteData} errors={errors} createQuote={createQuote}/>
            {result.calculated && <ShipmentInfoSection result={result} /> }
            
        </StyledParent>
    )
}
// body styles
const StyledParent = styled.div`
margin: 10px 20px 0;
`;
export default ParentSection
