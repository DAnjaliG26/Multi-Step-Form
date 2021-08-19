import React, { Component } from "react";
import { DatePicker } from '@progress/kendo-react-dateinputs';
import CheckBox from "../SharedComponents/CheckboxNew";


class Insurance extends Component {
  constructor(props) {
    super(props);

    this.insuranceOptions = [
      { name: "indemnity", value: "Professional Indemnity Insurance", isChecked: false },
      { name: "generalLiability", value: "Commercial and General Liability Insurance", isChecked: false },
      { name: "employerLiability", value: "Workmen Compensation / Employer Liability Insurance", isChecked: false },
      { name: "risks", value: "Property All Risks Insurance", isChecked: false },
      { name: "partyliability", value: "Public / 3rd Party liability Insurance", isChecked: false },
    ];

    this.state = {
      model: props.supplierRequest,
      insuranceOptions: this.insuranceOptions,
    };

    this.handleCheckElement = this.handleCheckElement.bind(this);
  }

  componentWillMount() {
    const { model } = this.state;
  
    const InsuranceOptions = this.state.insuranceOptions;
    { model.indemnity ? InsuranceOptions[0].isChecked = true : InsuranceOptions[0].isChecked = false }
    { model.generalLiability ? InsuranceOptions[1].isChecked = true : InsuranceOptions[1].isChecked = false }
    { model.employerLiability ? InsuranceOptions[2].isChecked = true : InsuranceOptions[2].isChecked = false }
    { model.risks ? InsuranceOptions[3].isChecked = true : InsuranceOptions[3].isChecked = false }
    { model.partyliability ? InsuranceOptions[4].isChecked = true : InsuranceOptions[4].isChecked = false }
  }

  handleCheckElement = (e) => {
    const field = e.target.name;
    const { model } = this.state;
    model[field] = e.target.checked;
    this.setState({ model });

    const InsuranceOptions = this.state.insuranceOptions;
    InsuranceOptions.forEach(InsuranceOptions => {
      if (InsuranceOptions.value === e.target.value) InsuranceOptions.isChecked = e.target.checked;
    });
    this.setState({ insuranceOptions: InsuranceOptions });
  }

  saveAndContinue = (e) => {
    console.log(this.state.model);
    this.props.nextStep();
    document.getElementsByClassName('step4')[0].classList.remove("is-active");
    document.getElementsByClassName('step5')[0].classList.add("is-active");
  }

  back = (e) => {
    debugger;
    this.props.prevStep();
    document.getElementsByClassName('step4')[0].classList.remove("is-active");
    document.getElementsByClassName('step3')[0].classList.add("is-active");
  }
  render() {
    const state = this.state;
    const { model } = this.state;
    return (
<div>
      <table className="table table-bordered">
        <tbody>
          <tr>

            <td className="SecondColumn">
              <label className="Label">INSURANCE</label>
            </td>
          </tr>
          <tr>

            <td>
              <label className="LabelNum">
                Provide as applicable:
              </label>
              <br />
              <div>
                <dl className="LabelNum margincheckbox">
                  {
                    state.insuranceOptions.map((insurance) => {
                        return (
                          <CheckBox key={insurance.name}  handleCheckElement={this.handleCheckElement} {...insurance} />
                      );
                    })
                  }
                </dl>
                </div>               
            </td>
            </tr>
            <tr>
              <div className="form-group">
                <label className=" labelnum col-md-1">
                  Expiry Date:
                </label>
                <div className="col-md-2">
                  <DatePicker
                    className="form-control control-label col-sm-2"
                    name="expiryDate"
                    value={model.expiryDate}
                    onChange={this.props.handleInput}
                    format={"dd-MMM-yyyy"}
                  />
                </div>
              </div>
            </tr>
          
        </tbody>
      </table>
        <div className="row">
          <div className="col-sm-4">
        </div>
          <div className="col-sm-4">
          <button className="btn btn-default" onClick={this.back}>Back</button>
          &nbsp;
          <button className="btn btn-default" onClick={this.saveAndContinue}>Save And Continue</button>
        </div>
          <div className="col-sm-4">
        </div>
      </div>
      <br />
      </div >
    );
  }
}

export default Insurance;
