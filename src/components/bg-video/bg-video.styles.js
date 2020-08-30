import styled from "styled-components";

const StyledBgVideo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: 0.2;
  overflow: hidden;

  .content {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export default StyledBgVideo;