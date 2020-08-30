import React from "react";
import StyledBookSection from "./book-section.styles";
import Book from "../book/book.component";
import Grid from "../commons/grid/grid.component";

const BookSection = () => {
  return (
    <StyledBookSection>
      <Grid>
        <Book />
      </Grid>
    </StyledBookSection>
  );
};
export default BookSection;
