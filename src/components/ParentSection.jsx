import React, {useState} from 'react'
import styled from 'styled-components'
import { checkDelivery, validateInputs } from '../utils/helperFunctions'
import QuoteSection from './QuoteInfoSection'
import ShipmentInfoSection from './ShipmentInfoSection'

const ParentSection = () => {

    const [quoteData, setQuoteData] = useState({shippingChannel: "ocean"});
    const [result, setResult] = useState({calculated:false});
    const [errors, setErrors] = useState({});

    const quoteDataStructure = ["destinationCountry", "quotePrice", "shippingChannel", "startingCountry"];

    const createQuote = () => {

        let validationResult = validateInputs(quoteData, quoteDataStructure);
        if(validationResult.error){

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
const StyledParent = styled.div`
margin: 10px 20px 0;
`;
export default ParentSection
