import React, { Component } from 'react';
import FormUserDetails from './Form/Step1';
import FormPersonalDetails from './Form/Step2';
import Confirm from './Form/Confirm';
import Finish from './Form/Step3';
import Success from './Form/Finish';
export class UserForm extends Component {
  state = {
    step: 1,
    emotion: '',
    description: '',
    feelings: '',
  };
  // Go to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };
  firstStep = () => {
    this.setState({
      step: 1,
    });
  };
  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  pushChange = (input) => (e) => {
    if (e.target.checked) {
      if (this.state.feelings)
        this.setState({ [input]: `${this.state.feelings},${e.target.value}` });
      else {
        this.setState({ [input]: e.target.value });
      }
    } else {
      if (
        this.state.feelings.indexOf(e.target.value) ===
        this.state.feelings.length - e.target.value.length - 1
      ) {
        this.setState({
          [input]: this.state.feelings.replace(e.target.value, ''),
        });
      } else {
        this.setState({
          [input]: this.state.feelings.replace(`${e.target.value},`, ''),
        });
      }
    }
  };

  render() {
    const { step } = this.state;
    const { emotion, description, feelings } = this.state;
    const values = { emotion, description, feelings };

    switch (step) {
      default:
        return <h1>User Forms not working. Enable Javascript!</h1>;
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Finish
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            pushChange={this.pushChange}
            values={values}
          />
        );
      case 4:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 5:
        return (
          <Success
            firstStep={this.firstStep}
          />
        );
    }
  }
}
export default UserForm;
