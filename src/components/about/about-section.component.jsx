import React from 'react'
import StyledAboutSection from "./about-section.styles";
import HeadingSecondary from "../commons/heading-secondary/heading-secondary.component";
import HeadingContainer from "../commons/heading-container/heading-container.component";
import Grid from "../commons/grid/grid.component";
import HeadingTertiary from "../commons/heading-tertiary/heading-tertiary.component";
import Paragraph from "../commons/paragraph/paragraph.component";
import Button from "../commons/button/button.component";
import Composition from "../composition/composition.component";

import Nat1Large from '../../img/nat-1-large.jpg'
import Nat2Large from '../../img/nat-2-large.jpg'
import Nat3Large from '../../img/nat-3-large.jpg'

const AboutSection = () => {
    return (
        <StyledAboutSection>
            <HeadingContainer>
                <HeadingSecondary>Exciting tours for adventurous people</HeadingSecondary>
            </HeadingContainer>
            <Grid>
                <div className="col-1-of-2">
                    <HeadingTertiary>You're going to fall in love with nature</HeadingTertiary>
                    <Paragraph>
                        Bacon ipsum dolor amet rump spare ribs alcatra chislic capicola pork loin tail. Kielbasa pig shank,
                        venison corned beef chicken ground round turkey pork loin pork belly biltong chislic cupim.
                    </Paragraph>

                    <HeadingTertiary>Live adventures like you never have before</HeadingTertiary>
                    <Paragraph>
                        Bacon ipsum dolor amet rump spare ribs alcatra chislic capicola pork loin tail. Kielbasa pig shank,
                        venison corned beef chicken ground round turkey pork loin pork belly biltong chislic cupim.
                    </Paragraph>
                    <Button href="#" btnText>Learn more &rarr;</Button>
                </div>
                <div className="col-1-of-2">
                    <Composition>
                        <img src={Nat1Large} alt="Natours 1" className="photo p1"/>
                        <img src={Nat2Large} alt="Natours 2" className="photo p2"/>
                        <img src={Nat3Large} alt="Natours 3" className="photo p3"/>
                    </Composition>
                </div>
            </Grid>
        </StyledAboutSection>
    )
}

export default AboutSection