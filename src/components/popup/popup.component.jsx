import React from "react";
import StyledPopup from "./popup.styles";
import Nat8 from "../../img/nat-8.jpg";
import Nat9 from "../../img/nat-9.jpg";
import Button from "../commons/button/button.component";
import HeadingSecondary from "../commons/heading-secondary/heading-secondary.component";
import HeadingTertiary from "../commons/heading-tertiary/heading-tertiary.component";

const Popup = () => {
  return (
    <StyledPopup id="popup">
      <div className="content">
        <div className="left">
          <img src={Nat8} alt="Tour" />
          <img src={Nat9} alt="Tour" />
        </div>
        <div className="right">
          <a href="#section-tours" className="close">
            &times;
          </a>
          <HeadingSecondary>Start booking now</HeadingSecondary>
          <HeadingTertiary>
            Important &ndash; Please read these terms before booking
          </HeadingTertiary>
          {/*<h2 className="heading-secondary u-margin-bottom-small"></h2>*/}
          <p className="text">
            Rump frankfurter prosciutto short loin hamburger, pork belly
            kielbasa. Ground round venison burgdoggen, ham chicken pork loin
            corned beef. Tongue chislic meatloaf strip steak. Jowl shankle
            buffalo, prosciutto hamburger tail ribeye sausage flank. Bacon ipsum
            dolor amet bacon fatback salami meatloaf corned beef pork chop,
            t-bone kielbasa picanha doner cow drumstick ball tip tongue sausage.
            Picanha tri-tip pork belly meatloaf corned beef short loin. Salami
            hamburger turducken chicken pork belly. Tail meatloaf rump, alcatra
            cow spare ribs andouille ribeye porchetta pig ball tip. Short ribs
            pork belly shoulder, filet mignon kielbasa pork ground round. Bacon
            bresaola jerky sausage. Pork belly ham hock short ribs shankle
            tri-tip leberkas corned beef, flank pastrami brisket prosciutto
            meatloaf porchetta.
          </p>
          <Button href="#" btn green>
            Book now
          </Button>
        </div>
      </div>
    </StyledPopup>
  );
};

export default Popup;
