import React from 'react';
import StyledFeatureBox from "./feature-box.styles";

const FeatureBox = ({children}) => {
    return (
        <StyledFeatureBox>{children}</StyledFeatureBox>
    )
}

export default FeatureBox