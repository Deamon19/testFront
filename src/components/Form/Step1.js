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
import axios from 'axios'

import image1 from '../../img/Emotion6.png'
import image2 from '../../img/Emotion2(1).png'
import image3 from '../../img/Emotion3(1).png'
import image4 from '../../img/Emotion4(1).png'
import image5 from '../../img/Emotion5(1).png'
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
    fetch('https://mentalhealthapi2.azurewebsites.net/Account/register',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: {
        "email": "stringasdasdasazxc@list.ru",
        "birthDate": "2011-12-15T17:34:43.513Z",
        "jobTitle": "striasdasng",
        "password": "striasdngstringstring"
      }
    })
    .then(response => console.log(response))
    .then(data => console.log(data));
    axios.post('https://mentalhealthapi2.azurewebsites.net/Account/register', {
        email: "stringasdasdasazxc@list.ru",
        birthDate: "2011-12-15T17:34:43.513Z",
        jobTitle: "striasdasng",
        password: "striasdngstringstring"
    })
    .then(response => console.log(response.data))
    .catch(err=>console.log(err))
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
    <FormControlLabel onChange={handleChange("emotion")}  value="5" control={<Radio style={{visibility:'hidden'}} />} label={<img src={image5}/>}/>
    <FormControlLabel  onChange={handleChange("emotion")}  value="4" control={<Radio style={{visibility:'hidden'}}/>} label={<img src={image4}/>} />
    <FormControlLabel  onChange={handleChange("emotion")} value="3" control={<Radio style={{visibility:'hidden'}}/>} label={<img src={image3}/>} />
    <FormControlLabel onChange={handleChange("emotion")}  value="2" control={<Radio style={{visibility:'hidden'}}/>} label={<img src={image2}/>} />
    <FormControlLabel  onChange={handleChange("emotion")}  value="1" control={<Radio style={{visibility:'hidden'}}/>} label={<img src={image1}/>} />
    
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


