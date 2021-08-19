import React, { Component } from "react";
import TextArea from "../SharedComponents/TextArea";

class HealthAndSafety extends Component {
  constructor(props) {
    super(props);

    this.state = {
      model: props.supplierRequest,   
    };

    this.handleradioChange = this.handleradioChange.bind(this);
    this.handleradioChange1 = this.handleradioChange1.bind(this);
    this.handleradioChange2 = this.handleradioChange2.bind(this); 
  }
 
  handleradioChange(e) {
    debugger;
    const field = e.target.name;
    const { model } = this.state;
    if (e.target.value === 'No') {
      model.accreditationDetails = "";
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
      model.policyDetails = "";
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
      model.safetyenforcementDetails = "";
      model[field] = false;
    }
    else {
      model[field] = true;
    }
    return this.setState({ model });
  }

 
  render() {
    const { model } = this.state;
    return (
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td className="SecondColumn">
              <label className="Label">HEALTH & SAFETY</label>
            </td>
          </tr>
          <tr>

            <td>
              <div className="LabelNum">
                <p>Does your organisation have any accreditation for health and safety management, e.g. OHSAS 18001 or OSHAD SF?
                <label className="radio-inline margin">
                    <input
                      id="Acrdyes"
                      type="radio"
                      name="accreditation"
                      value="Yes"
                      checked={model.accreditation === true}
                      onChange={this.handleradioChange}
                    />
                    Yes
                  </label>

                  <label className="radio-inline">
                    <input
                      id="Acrdno"
                      type="radio"
                      name="accreditation"
                      value="No"
                      checked={model.accreditation === false}
                      onChange={this.handleradioChange}
                    />
                    No
                  </label>
                </p>
              </div>
              <div className="Accred-collapse" hidden={model.accreditation ? false:true}>
                <TextArea
                  rows={4}
                  title="Provide details: "
                  value={model.accreditationDetails}
                  name="accreditationDetails"
                  placeholder="Enter details here "
                  onChange={this.props.handleInput}
                />
              </div>
            </td>
          </tr>
          <tr>

            <td colSpan="2" width="90%">
              <div className="LabelNum">
                <p>Does your organisation have a written health and safety policy and procedures?
                <label className="radio-inline margin">
                    <input
                      type="radio"
                      name="policy"
                      value="Yes"
                      checked= {model.policy === true }
                      onChange={this.handleradioChange1}
                    />
                    Yes
                  </label>
                  <label className="radio-inline">
                    <input
                      type="radio"
                      name="policy"
                      value="No"
                      checked={model.policy === false}
                      onChange={this.handleradioChange1}
                    />
                    No
                  </label>
                </p>
              </div>
              <div className="policy-collapse" hidden={model.policy ? false : true}>
                <TextArea
                  rows={4}
                  title="Provide details: "
                  value={model.policyDetails}
                  name="policyDetails"
                  placeholder="Enter details here "
                  onChange={this.props.handleInput}
                />
              </div>
            </td>
          </tr>

          <tr>

            <td colSpan="2" width="90%">

              <div className="LabelNum">
                <p>Has your organisation had any health and safety enforcement action or legal proceedings taken against them in the last 3 years?
                <label className="radio-inline margin">
                    <input
                      type="radio"
                      name="safetyEnforcement"
                      value="Yes"
                      checked={model.safetyEnforcement === true}
                      onChange={this.handleradioChange2}
                    />
                    Yes
                  </label>
                  <label className="radio-inline">
                    <input
                      type="radio"
                      name="safetyEnforcement"
                      value="No"
                      checked={model.safetyEnforcement === false}
                      onChange={this.handleradioChange2}
                    />
                    No
                  </label>
                </p>
              </div>
              <div className="safety-collapse" hidden={model.safetyEnforcement ? false : true}>
                <TextArea
                  rows={4}
                  title="Provide details: "
                  value={model.safetyenforcementDetails}
                  name="safetyenforcementDetails"
                  placeholder="Enter details here "
                  onChange={this.props.handleInput}
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      
    );
  }
}

export default HealthAndSafety;
