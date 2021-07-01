import React from 'react'
import styled from 'styled-components'
import QuoteSection from './QuoteSection'
import ShipmentInfoSection from './ShipmentInfoSection'

const ParentSection = () => {
    return (
        <StyledParent >
            <QuoteSection/>
            <ShipmentInfoSection/>
            
        </StyledParent>
    )
}
const StyledParent = styled.div`
margin: 10px 20px 0;
`;
export default ParentSection
