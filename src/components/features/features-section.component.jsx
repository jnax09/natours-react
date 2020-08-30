import React from "react";
import StyledFeaturesSection from "./features-section.styles";
import Grid from "../commons/grid/grid.component";
import FeatureBox from "../feature-box/feature-box.component";
import HeadingTertiary from "../commons/heading-tertiary/heading-tertiary.component";
import Paragraph from "../commons/paragraph/paragraph.component";

const FeaturesSection = () => {
  return (
    <StyledFeaturesSection>
      <Grid>
        <div className="col-1-of-4">
          <FeatureBox>
            <i className="icon icon-basic-world" />
            <HeadingTertiary>Explore the world</HeadingTertiary>
            <Paragraph>
              Chicken ground round turkey pork loin pork belly biltong chislic
              cupim cupim cupim.
            </Paragraph>
          </FeatureBox>
        </div>
        <div className="col-1-of-4">
          <FeatureBox>
            <i className="icon icon-basic-heart" />
            <HeadingTertiary>Live a healthier life</HeadingTertiary>
            <Paragraph>
              Chicken ground round turkey pork loin pork belly biltong chislic
              cupim cupim cupim.
            </Paragraph>
          </FeatureBox>
        </div>
        <div className="col-1-of-4">
          <FeatureBox>
            <i className="icon icon-basic-compass" />
            <HeadingTertiary>Meet nature</HeadingTertiary>
            <Paragraph>
              Chicken ground round turkey pork loin pork belly biltong chislic
              cupim cupim cupim.
            </Paragraph>
          </FeatureBox>
        </div>
        <div className="col-1-of-4">
          <FeatureBox>
            <i className="icon icon-basic-map" />
            <HeadingTertiary>Find your way</HeadingTertiary>
            <Paragraph>
              Chicken ground round turkey pork loin pork belly biltong chislic
              cupim cupim cupim.
            </Paragraph>
          </FeatureBox>
        </div>
      </Grid>
    </StyledFeaturesSection>
  );
};

export default FeaturesSection;
