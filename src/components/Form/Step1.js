import React, { Component, Fragment } from "react";
import {
  AppBar,
  Button,
  TextField,
  Toolbar,
  Typography,
  RadioGroup,
  Radio,
  FormControlLabel
} from "@material-ui/core";
export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { values, handleChange } = this.props;
    return (
      <Fragment>
        <AppBar style={{ background: "#2E3B55" }} position="sticky">
          <Toolbar title="How are u">
            <Typography color="inherit" variant="title">
              How are u
            </Typography>
          </Toolbar>
        </AppBar>
        <RadioGroup
    aria-label="emotion"
    name="radio-buttons-group"
  >
    <FormControlLabel onChange={handleChange("emotion")}  value="5" control={<Radio />} label="Fine" />
    <FormControlLabel  onChange={handleChange("emotion")}  value="3" control={<Radio />} label="Norm" />
    <FormControlLabel  onChange={handleChange("emotion")} value="1" control={<Radio />} label="Bad" />
    
  </RadioGroup>

        <br />
        <br />
        <Button
          style={{ background: "#2E3B55", color: "#FFFFFF" }}
          label="Continue"
          onClick={this.continue}
        >
          Continue
        </Button>
      </Fragment>
    );
  }
}

export default FormUserDetails;
