import React, { Component, Fragment } from "react";
import {
  AppBar,
  Button,
  TextField,
  Toolbar,
  Typography,
  TextareaAutosize
} from "@material-ui/core";

export class FormPersonalDetails extends Component {
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
    const { values, handleChange } = this.props;
    return (
      <Fragment>
        <AppBar style={{ background: "#333" }} position="sticky">
          <Toolbar title="Describe your emotions">
          <br/>
          <br/>
            <Typography color="inherit" variant="title">
            { Number(new Date().toLocaleTimeString('en-US', { hour12: false, 
            hour: "numeric", 
            minute: "numeric"}).split(':')[0])<15? "How was u sleep": "What your strongest emotion"}
            </Typography>
          </Toolbar>
        </AppBar>
        <TextareaAutosize
  aria-label="Emotion description"
  placeholder="Write some sentences"
  style={{ width: 500 }}
  onChange={handleChange("description")}
/>
      
        <br />
        <br />
        <Button
          style={{
            background: "#EE3B55",
            color: "#FFFFFF",
            marginRight: "1em"
          }}
          label="Back"
          onClick={this.back}
        >
          Back
        </Button>
        <Button
          style={{
            background: "#991A76",
            color: "#FFFFFF"
          }}
          label="Continue"
          onClick={this.continue}
        >
          {" "}
          Continue
        </Button>
      </Fragment>
    );
  }
}

export default FormPersonalDetails;
