import React, { Component, Fragment } from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  FormHelperText,
  FormControl,
  FormLabel,
  FormGroup,
  Checkbox,
  FormControlLabel
} from "@material-ui/core";
export class Finish  extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { values, pushChange } = this.props;
    return (
      <Fragment>
        <AppBar style={{ background: "#2E3B55" }} position="sticky">
          <Toolbar title="How are u">
            <Typography color="inherit" variant="title">
              How are u
            </Typography>
          </Toolbar>
        </AppBar>
        <FormControl component="fieldset">
        <FormLabel component="legend">Pick flavors</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                value="angry"
                onChange={pushChange("feelings")}
                name="angry"
              />
            }
            label="angry"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="good"
                onChange={pushChange("feelings")}
                name="good"
              />
            }
            label="good"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="scared"
                onChange={pushChange("feelings")}
                name="scared"
              />
            }
            label="Scared"
          />
        </FormGroup>
        <FormHelperText>
         You can choose several feelings.
        </FormHelperText>
      </FormControl>

        <br />
        <br />
        <Button
          style={{
            background: "#EE3B55",
            color: "#FFFFFF",
            marginRight: "1em"
          }}
          label="Continue"
          onClick={this.back}
        >
          Back
        </Button>
        <Button
          style={{
            background: "#3C61B8",
            color: "#FFFFFF",
            marginRight: "1em"
          }}
          label="Continue"
          onClick={this.continue}
        >
          Confirm and Continue
        </Button>
      </Fragment>
    );
  }
}

export default Finish;
