import React from "react";
import StyledForm from "./form.styles";
import HeadingSecondary from "../commons/heading-secondary/heading-secondary.component";
import Button from "../commons/button/button.component";

const Form = () => {
  return (
    <>
      <StyledForm>
        <form action="#">
          <div className="u-margin-bottom-medium">
            <HeadingSecondary>Start booking now</HeadingSecondary>
          </div>

          <div className="group">
            <input
              type="text"
              className="input"
              placeholder="Full Name"
              id="name"
              required
            />
            <label htmlFor="name" className="label">
              Full Name
            </label>
          </div>
          <div className="group">
            <input
              type="email"
              className="input"
              placeholder="Email Address"
              id="email"
              required
            />
            <label htmlFor="email" className="label">
              Email address
            </label>
          </div>

          <div className="group u-margin-bottom-medium">
            <div className="radio-group">
              <input
                type="radio"
                className="radio-input"
                id="small"
                required
                name="size"
              />
              <label htmlFor="small" className="radio-label">
                <span className="radio-button" />
                Small tour group
              </label>
            </div>

            <div className="radio-group">
              <input
                type="radio"
                className="radio-input"
                id="large"
                required
                name="size"
              />
              <label htmlFor="large" className="radio-label">
                <span className="radio-button" />
                Large tour group
              </label>
            </div>
          </div>
          <div className="group">
            <Button as="button" btn green>
              Next steps &rarr;
            </Button>
          </div>
        </form>
      </StyledForm>
    </>
  );
};

export default Form;
