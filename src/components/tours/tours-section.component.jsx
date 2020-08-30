import React from "react";
import StyledToursSection from "./tours-section-styles";
import HeadingSecondary from "../commons/heading-secondary/heading-secondary.component";
import HeadingContainer from "../commons/heading-container/heading-container.component";
import Card from "../card/card.component";

const ToursSection = () => {
  return (
    <StyledToursSection id="section-tours">
      <HeadingContainer>
        <HeadingSecondary>MOST POPULAR TOURS</HeadingSecondary>
      </HeadingContainer>
      <Card />
    </StyledToursSection>
  );
};

export default ToursSection;
