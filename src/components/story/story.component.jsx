import React from "react";
import StyledStory from "./story.styles";
import Nat8 from "../../img/nat-8.jpg";
import Nat9 from "../../img/nat-9.jpg";
import HeadingTertiary from "../commons/heading-tertiary/heading-tertiary.component";
import Paragraph from "../commons/paragraph/paragraph.component";
import Grid from "../commons/grid/grid.component";

const Story = () => {
  return (
    <>
      <Grid>
        <StyledStory>
          <figure className="shape">
            <img src={Nat8} alt="People on a tour" />
            <figcaption>Mary Smith</figcaption>
          </figure>
          <div className="text">
            <HeadingTertiary>
              I had the best week ever with my family
            </HeadingTertiary>
            <Paragraph>
              Bacon ipsum dolor amet rump spare ribs alcatra chislic capicola
              pork loin tail. Kielbasa pig shank, venisontra chislic capicola
              pork loin tail. Kielbasa pig shank, veniso corned beef chicken
              ground round turkey pork loin pork belly biltong chislic cupim.
            </Paragraph>
          </div>
        </StyledStory>
      </Grid>

      <Grid>
        <StyledStory>
          <figure className="shape">
            <img src={Nat9} alt="People on a tour" />
            <figcaption>Jack Wilson</figcaption>
          </figure>
          <div className="text">
            <HeadingTertiary>
              WOW! My life is completely different now
            </HeadingTertiary>
            <Paragraph>
              Bacon ipsum dolor amet rump spare ribs alcatra chislic capicola
              pork loin tail. Kielbasa pig shank, venisontra chislic capicola
              pork loin tail. Kielbasa pig shank, veniso corned beef chicken
              ground round turkey pork loin pork belly biltong chislic cupim.
            </Paragraph>
          </div>
        </StyledStory>
      </Grid>
    </>
  );
};

export default Story;
