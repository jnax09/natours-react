import React from "react";
import StyledStoriesSection from "./stories-section.styles";
import BgVideo from "../bg-video/bg-video.component";
import VideoMp4 from "../../img/video.mp4";
import VideoWebm from "../../img/video.webm";
import HeadingContainer from "../commons/heading-container/heading-container.component";
import HeadingSecondary from "../commons/heading-secondary/heading-secondary.component";
import Story from "../story/story.component";
import Button from "../commons/button/button.component";

const StoriesSection = () => {
  return (
    <StyledStoriesSection>
      <BgVideo>
        <video className="content" autoPlay muted loop>
          <source src={VideoMp4} type="video/mp4" />
          <source src={VideoWebm} type="video/webm" />
          Your browser cannot be supported!
        </video>
      </BgVideo>
      <HeadingContainer>
        <HeadingSecondary>We make people genuinely happy</HeadingSecondary>
      </HeadingContainer>
      <Story />
      <div className="read-btn">
        <Button href="#" btnText>
          Read all stories &rarr;
        </Button>
      </div>
    </StyledStoriesSection>
  );
};

export default StoriesSection;
