import React, { Component } from "react";
import TextArea from "../SharedComponents/TextArea";

class Political extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: props.supplierRequest,
    };

    this.handleradioChange = this.handleradioChange.bind(this);
    this.handleradioChange1 = this.handleradioChange1.bind(this);
    this.handleradioChange2 = this.handleradioChange2.bind(this);
    this.handleradioChange3 = this.handleradioChange3.bind(this);
   
  }


  handleradioChange(e) {
    const field = e.target.name;
    const { model } = this.state;
    if (e.target.value === 'No') {
      model.interestDetails = "";
      model[field] = false;
    }
    else {
      model[field] = true;
    }
    this.setState({ model });
  }

  handleradioChange1(e) {
    const field = e.target.name;
    const { model } = this.state;
    if (e.target.value === 'No') {
      model.wspemployeeDetails = "";
      model[field] = false;
    }
    else {
      model[field] = true;
    }
    return this.setState({ model });
  }

  handleradioChange2(e) {
    const field = e.target.name;
    const { model } = this.state;
    if (e.target.value === 'No') {
      model.wspagreementDetails = "";
      model[field] = false;
    }
    else {
      model[field] = true;
    }
    return this.setState({ model });
  }

  handleradioChange3(e) {
    const field = e.target.name;
    const { model } = this.state;
    if (e.target.value === 'No') {
      model.favoursDetails = "";
      model[field] = false;
    }
    else {
      model[field] = true;
    }
    this.setState({ model });
  }
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
    document.getElementsByClassName('step8')[0].classList.remove("is-active");
    document.getElementsByClassName('step9')[0].classList.add("is-active");
  }

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
    document.getElementsByClassName('step8')[0].classList.remove("is-active");
    document.getElementsByClassName('step7')[0].classList.add("is-active");
  }
  render() {
    const { model } = this.state;
    return (
      <div>
        <table className="table table-bordered">
          <tbody>
            <tr>

              <td className="SecondColumn">
                <label className="Label">POLITICAL EXPOSURE AND CONFLICTS OF INTEREST</label>
              </td>
            </tr>
            <tr>
              <td>
                <div className="LabelNum">
                  <p>Do any of the following own an interest in or exert influence over your organisation: (1) any governmental entity; (2) a Public Official; (3) a Relevant Person or (4) a Family Member of WSP (i.e. spouses, significant others, domestic partners, children, siblings, parents)?
                  <label className="radio-inline margin">
                      <input
                        type="radio"
                        name="interest"
                        value="Yes"
                        checked={model.interest === true}
                        onChange={this.handleradioChange}
                      />
                      Yes
                  </label>
                    <label className="radio-inline">
                      <input
                        type="radio"
                        name="interest"
                        value="No"
                        checked={model.interest === false}
                        onChange={this.handleradioChange}
                      />
                      No
                  </label>
                  </p>
                </div>
                <div className="Intrest-collapse" hidden={model.interest ? false : true}>
                  <TextArea
                    rows="3"
                    name="interestDetails"
                    title="Provide details: "
                    value={model.interestDetails}
                    placeholder="Enter details here "
                    onChange={this.props.handleInput}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="LabelNum">
                  <p>Are any of your organisation’s employees family members (i.e. spouses, significant others, domestic partners, children, siblings, parents) of WSP employees?
                  <label className="radio-inline margin">
                      <input
                        type="radio"
                        name="wspEmployees"
                        value="Yes"
                        checked={model.wspEmployees === true}
                        onChange={this.handleradioChange1}
                      />
                      Yes
                  </label>
                    <label className="radio-inline">
                      <input
                        type="radio"
                        name="wspEmployees"
                        value="No"
                        checked={model.wspEmployees === false}
                        onChange={this.handleradioChange1}
                      />
                      No
                  </label>
                  </p>
                </div>
                <div className="Employee-collapse" hidden={model.wspEmployees ? false : true}>
                  <TextArea
                    rows="3"
                    name="wspemployeeDetails"
                    title="Provide details: "
                    value={model.wspemployeeDetails}
                    placeholder="Enter details here "
                    onChange={this.props.handleInput}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="LabelNum">
                  <p>Does any Public Official or Relevant Person stand to benefit in any way as a result of the proposed agreement(s) with WSP?
                  <label className="radio-inline margin">
                      <input
                        type="radio"
                        name="wspAgreement"
                        value="Yes"
                        checked={model.wspAgreement === true}
                        onChange={this.handleradioChange2}
                      />
                      Yes
                  </label>
                    <label className="radio-inline">
                      <input
                        type="radio"
                        name="wspAgreement"
                        value="No"
                        checked={model.wspAgreement === false}
                        onChange={this.handleradioChange2}
                      />
                      No
                  </label>
                  </p>
                </div>
                <div className="Wsp-collapse" hidden={model.wspAgreement ? false : true}>
                  <TextArea
                    rows="3"
                    name="wspagreementDetails"
                    title="Provide details: "
                    value={model.wspagreementDetails}
                    placeholder="Enter details here "
                    onChange={this.props.handleInput}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="LabelNum">
                  <p>Has your organisation offered any financial or non-financial favours, incentives, gifts, entertainment or hospitality  to a Third Party or WSP employee prior to the award of the contract or project?
                  <label className="radio-inline margin">
                      <input
                        type="radio"
                        name="favours"
                        value="Yes"
                        checked={model.favours === true}
                        onChange={this.handleradioChange3}
                      />
                      Yes
                  </label>
                    <label className="radio-inline">
                      <input
                        type="radio"
                        name="favours"
                        value="No"
                        checked={model.favours === false}
                        onChange={this.handleradioChange3}
                      />
                      No
                  </label>
                  </p>
                </div>
                <div className="Favours-collapse" hidden={model.favours ? false : true}>
                  <TextArea
                    rows="3"
                    type="text"
                    name="favoursDetails"
                    title="Provide details: "
                    value={model.favoursDetails}
                    placeholder="Enter details here "
                    onChange={this.props.handleInput}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="row">
          <div class="col-sm-4">
          </div>
          <div class="col-sm-4">
            <button className="btn btn-default" onClick={this.back}>Back</button>
            &nbsp;
          <button className="btn btn-default" onClick={this.saveAndContinue}>Save And Continue</button>
          </div>
          <div class="col-sm-4">
          </div>
        </div>
        <br />
      </div >
    );
  }
}

export default Political;
