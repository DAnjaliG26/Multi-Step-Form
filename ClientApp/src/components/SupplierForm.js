import React, { Component } from 'react';
import CompanyDetails from "./FormComponents/CompanyDetails";
import PrimaryAddress from "./FormComponents/PrimaryAddress";
import Billing from "./FormComponents/Billing";
import Insurance from "./FormComponents/Insurance";
import HealthAndSafety from "./FormComponents/HealthAndSafety";
import Environment from "./FormComponents/Environment";
import Quality from "./FormComponents/Quality";
import BusinessIntegrity from "./FormComponents/BusinessIntegrity";
import Political from "./FormComponents/Political";
import Files from "./FormComponents/Files";
import Completed from "./FormComponents/Completed";
import "./FormComponents/Style.css";
import { SupplierRequest } from '../Services/Entities/SupplierRequest';

export class SupplierForm extends Component {
  displayName = SupplierForm.name
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      model: new SupplierRequest(),
    };

    this.handleInput = this.handleInput.bind(this);
  }

  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1
    })
  }

  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1
    })
  }

  handleInput(e) {
    const field = e.target.name;
    const { model } = this.state;
    model[field] = e.target.value;
    this.setState({ model });
  }

  render() {
    const state  = this.state;
    const { step } = this.state;

    switch (step) {
      case 1:
        return <CompanyDetails
          nextStep={this.nextStep}
          supplierRequest={state.model}
          handleInput={this.handleInput} />

      case 2:
        return <PrimaryAddress
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          supplierRequest={state.model}
          handleInput={this.handleInput} />

      case 3:
        return <Billing
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          supplierRequest={state.model}
          handleInput={this.handleInput} />

      case 4:
        return <Insurance
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          supplierRequest={state.model}
          handleInput={this.handleInput} />

      case 5:
        return <div>
          <HealthAndSafety
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            supplierRequest={state.model}
            handleInput={this.handleInput} />
          <Environment
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            supplierRequest={state.model}
            handleInput={this.handleInput} />
        </div>

      case 6:
        return <Quality
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          supplierRequest={state.model}
          handleInput={this.handleInput} />

      case 7:
        return <BusinessIntegrity
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          supplierRequest={state.model}
          handleInput={this.handleInput} />

      case 8:
        return <Political
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          supplierRequest={state.model}
          handleInput={this.handleInput} />

      case 9:
        return <Files
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          supplierRequest={state.model}
          handleInput={this.handleInput} />

      case 10:
        return <Completed
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          supplierRequest={state.model}
          handleInput={this.handleInput} />

    }
  }
}

