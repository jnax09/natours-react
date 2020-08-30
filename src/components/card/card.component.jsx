import React from "react";
import StyledCard from "./card.styles";
import Button from "../commons/button/button.component";
import Grid from "../commons/grid/grid.component";

const Card = () => {
  return (
    <>
      <Grid>
        <div className="col-1-of-3">
          <StyledCard>
            <div className="side front">
              <div className="picture p1">&nbsp;</div>
              <h4 className="heading">
                <span className="sp1">The sea explorer</span>
              </h4>
              <div className="details">
                <ul>
                  <li>3 day tours</li>
                  <li>Up tp 30 people</li>
                  <li>2 tour guides</li>
                  <li>Sleep in cozy hotels</li>
                  <li>Difficulty: easy</li>
                </ul>
              </div>
            </div>
            <div className="side back b1">
              <div className="cta">
                <div className="price-box">
                  <p className="price-only">Only</p>
                  <div className="price-value">$297</div>
                </div>
                <Button href="#popup" btn white>
                  Book now!
                </Button>
              </div>
            </div>
          </StyledCard>
        </div>

        <div className="col-1-of-3">
          <StyledCard>
            <div className="side front">
              <div className="picture p2">&nbsp;</div>
              <h4 className="heading">
                <span className="sp2">The Forest Hiker</span>
              </h4>
              <div className="details">
                <ul>
                  <li>7 day tours</li>
                  <li>Up to 40 people</li>
                  <li>6 tour guides</li>
                  <li>Sleep in provided tents</li>
                  <li>Difficulty: medium</li>
                </ul>
              </div>
            </div>
            <div className="side back b2">
              <div className="cta">
                <div className="price-box">
                  <p className="price-only">Only</p>
                  <div className="price-value">$497</div>
                </div>
                <Button href="#popup" btn white>
                  Book now!
                </Button>
              </div>
            </div>
          </StyledCard>
        </div>

        <div className="col-1-of-3">
          <StyledCard>
            <div className="side front">
              <div className="picture p3">&nbsp;</div>
              <h4 className="heading">
                <span className="sp3">The Snow Adventurer</span>
              </h4>
              <div className="details">
                <ul>
                  <li>5 day tours</li>
                  <li>Up to 15 people</li>
                  <li>3 tour guides</li>
                  <li>Sleep in provided tents</li>
                  <li>Difficulty: hard</li>
                </ul>
              </div>
            </div>
            <div className="side back b3">
              <div className="cta">
                <div className="price-box">
                  <p className="price-only">Only</p>
                  <div className="price-value">$897</div>
                </div>
                <Button href="#popup" btn white>
                  Book now!
                </Button>
              </div>
            </div>
          </StyledCard>
        </div>
      </Grid>
      <div className="discover-btn">
        <Button href="#" btn green>
          Discover all tours
        </Button>
      </div>
    </>
  );
};

export default Card;
