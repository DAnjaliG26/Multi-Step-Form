import React, { Component } from "react";

import TextArea from "../SharedComponents/TextArea";

class BusinessIntegrity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      model: props.supplierRequest,
    };

    this.handleradioChange = this.handleradioChange.bind(this);
    this.handleradioChange1 = this.handleradioChange1.bind(this);
    this.handleradioChange2 = this.handleradioChange2.bind(this);
    this.handleradioChange3 = this.handleradioChange3.bind(this);
    this.handleradioChange4 = this.handleradioChange4.bind(this);
    this.handleradioChange5 = this.handleradioChange5.bind(this);
    this.handleradioChange6 = this.handleradioChange6.bind(this);
    this.handleradioChange7 = this.handleradioChange7.bind(this);
    this.handleradioChange8 = this.handleradioChange8.bind(this);
    this.handleradioChange9 = this.handleradioChange9.bind(this); 
  }

  handleradioChange(e) {
    const field = e.target.name;
    const { model } = this.state;
    if (e.target.value === 'No') {
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
    if (e.target.value === 'No') model[field] = false;
    else model[field] = true;
    return this.setState({ model });
  }

  handleradioChange2(e) {
    const field = e.target.name;
    const { model } = this.state;
    if (e.target.value === 'No') {
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
      model[field] = false;
    }
    else {
      model[field] = true;
    }
   
    this.setState({ model });
  }

  handleradioChange4(e) {
    const field = e.target.name;
    const { model } = this.state;
    if (e.target.value === 'No') {
      model[field] = false;
    }
    else {
      model[field] = true;
    }
    
    return this.setState({ model });
  }

  handleradioChange5(e) {
    const field = e.target.name;
    const { model } = this.state;
    if (e.target.value === 'No') {
      model[field] = false;
    }
    else {
      model[field] = true;
    }
  
    return this.setState({ model });
  }

  handleradioChange6(e) {
    const field = e.target.name;
    const { model } = this.state;
    if (e.target.value === 'No') {
      model[field] = false;
    }
    else {
      model[field] = true;
    }
    
    this.setState({ model });
  }

  handleradioChange7(e) {
    const field = e.target.name;
    const { model } = this.state;
    if (e.target.value === 'No') {
      model[field] = false;
    }
    else {
      model[field] = true;
    }
   
    return this.setState({ model });
  }

  handleradioChange8(e) {
    const field = e.target.name;
    const { model } = this.state;
    if (e.target.value === 'No') {
      model[field] = false;
    }
    else {
      model[field] = true;
    }
    return this.setState({ model });
  }

  handleradioChange9(e) {
    const field = e.target.name;
    const { model } = this.state;
    if (e.target.value === 'No') model[field] = false;
    else model[field] = true;
    return this.setState({ model });
  }


  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
    document.getElementsByClassName('step7')[0].classList.remove("is-active");
    document.getElementsByClassName('step8')[0].classList.add("is-active");
  }

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
    document.getElementsByClassName('step7')[0].classList.remove("is-active");
    document.getElementsByClassName('step6')[0].classList.add("is-active");
  }
  render() {
    const { model } = this.state;
    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <td className="SecondColumn">
                <label className="Label">BUSINESS INTEGRITY</label>
              </td>
            </tr>
            <tr>
              <td>
                <div className="LabelNum">
                  <p>Are you Certified for ISO 37001 ?
                <label className="radio-inline margin" htmlFor="Yes">
                      <input
                        type="radio"
                        name="businessIso"
                        value="Yes"
                        checked={model.businessIso === true}
                        onChange={this.handleradioChange}
                      />
                      Yes
                  </label>
                    <label className="radio-inline">
                      <input
                        type="radio"
                        name="businessIso"
                        value="No"
                        checked={model.businessIso === false}
                        onChange={this.handleradioChange}
                      />
                      No
                  </label>
                  </p>
                </div>
              </td>
            </tr>
          </thead>
          <tbody className="business-collapse" hidden={model.businessIso ? true : false}>
            <tr>
              <td>
                <div className="LabelNum">
                  <p>Does your organisation have policies and a program to ensure ethical business practices and prevent fraud, bribery, kickbacks, corruption, collusion, money-laundering or related offences?
                <label className="radio-inline margin">
                      <input
                        type="radio"
                        name="offences"
                        value="Yes"
                        checked={model.offences === true}
                        onChange={this.handleradioChange1}
                      />
                      Yes
                  </label>
                    <label className="radio-inline">
                      <input
                        type="radio"
                        name="offences"
                        value="No"
                        checked={model.offences === false}
                        onChange={this.handleradioChange1}
                      />
                      No
                  </label>
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="LabelNum">
                  <p>A code of conduct and/or anti-corruption policies?
                <label className="radio-inline margin">
                      <input
                        type="radio"
                        name="codeConduct"
                        value="Yes"
                        checked={model.codeConduct === true}
                        onChange={this.handleradioChange2}
                      />
                      Yes
                  </label>
                    <label className="radio-inline">
                      <input
                        type="radio"
                        name="codeConduct"
                        value="No"
                        checked={model.codeConduct === false}
                        onChange={this.handleradioChange2}
                      />
                      No
                  </label>
                  </p>
                </div>
                <div className="Code-collapse" hidden={model.codeConduct ? false : true} >
                  <TextArea
                    rows="3"
                    name="codeconductDetails"
                    title="Provide details: "
                    value={model.codeconductDetails}
                    placeholder="Enter details here "
                    onChange={this.props.handleInput}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="LabelNum">
                  <p>Ethics and compliance training?
                <label className="radio-inline margin">
                      <input
                        type="radio"
                        name="businessTraninig"
                        value="Yes"
                        checked={model.businessTraninig === true}
                        onChange={this.handleradioChange3}
                      />
                      Yes
                  </label>
                    <label className="radio-inline">
                      <input
                        type="radio"
                        name="businessTraninig"
                        value="No"
                        checked={model.businessTraninig === false}
                        onChange={this.handleradioChange3}
                      />
                      No
                  </label>
                  </p>
                </div>
                <div className="Training-collapse" hidden={model.businessTraninig ? false : true}>
                  <TextArea
                    rows="3"
                    name="businesstraninigDetails"
                    title="Provide details: "
                    value={model.businesstraninigDetails}
                    placeholder="Enter details here "
                    onChange={this.props.handleInput}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="LabelNum">
                  <p>Has your organisation or, so far as you are aware, any of its Principals been the subject of investigations, convictions, debarments and/or professional suspensions related to, or have otherwise been involved in, fraud, bribery,  corruption, collusion, money-laundering or related offences?
                <label className="radio-inline margin">
                      <input
                        type="radio"
                        name="businessOffences"
                        value="Yes"
                        checked={model.businessOffences === true}
                        onChange={this.handleradioChange4}
                      />
                      Yes
                  </label>
                    <label className="radio-inline">
                      <input
                        type="radio"
                        name="businessOffences"
                        value="No"
                        checked={model.businessOffences === false}
                        onChange={this.handleradioChange4}
                      />
                      No
                  </label>
                  </p>
                </div>
                <div className="offense-collapse" hidden={model.businessOffences ? false : true}>
                  <TextArea
                    rows="3"
                    name="businessoffencesDetails"
                    title="Provide details: "
                    value={model.businessoffencesDetails}
                    placeholder="Enter details here "
                    onChange={this.props.handleInput}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="LabelNum">
                  <p>Has your organisation or, so far as you are aware, any of its Principals been the subject of a criminal or government investigation or proceeding relating to bribery or corruption?
                  <label className="radio-inline margin">
                      <input
                        type="radio"
                        name="corruption"
                        value="Yes"
                        checked={model.corruption === true}
                        onChange={this.handleradioChange5}
                      />
                      Yes
                  </label>
                    <label className="radio-inline">
                      <input
                        type="radio"
                        name="corruption"
                        value="No"
                        checked={model.corruption === false}
                        onChange={this.handleradioChange5}
                      />
                      No
                  </label>
                  </p>
                </div>
                <div className="Corruption-collapse" hidden={model.corruption ? false : true}>
                  <TextArea
                    rows="3"
                    name="corruptionDetails"
                    title="Provide details: "
                    value={model.corruptionDetails}
                    placeholder="Enter details here "
                    onChange={this.props.handleInput}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="LabelNum">
                  <p>Has your organisation or, so far as you are aware, any of its Principals been subject to or involved in circumstances likely to give rise to a criminal or government investigation or proceeding relating to bribery, corruption or related offence?
                <label className="radio-inline margin">
                      <input
                        type="radio"
                        name="criminalOffence"
                        value="Yes"
                        checked={model.criminalOffence === true}
                        onChange={this.handleradioChange6}
                      />
                      Yes
                  </label>
                    <label className="radio-inline">
                      <input
                        type="radio"
                        name="criminalOffence"
                        value="No"
                        checked={model.criminalOffence === false}
                        onChange={this.handleradioChange6}
                      />
                      No
                </label>
                  </p>
                </div>
                <div className="Crime-collapse" hidden={model.criminalOffence ? false : true}>
                  <TextArea
                    rows="3"
                    name="criminaloffenceDetails"
                    title="Provide details: "
                    value={model.criminaloffenceDetails}
                    placeholder="Enter details here "
                    onChange={this.props.handleInput}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="LabelNum">
                  <p>Will your organisation use subcontractors or other third parties to perform its agreement(s) with WSP?
                  <label className="radio-inline margin">
                      <input
                        type="radio"
                        name="agreement"
                        value="Yes"
                        checked={model.agreement === true}
                        onChange={this.handleradioChange7}
                      />
                      Yes
                  </label>
                    <label className="radio-inline">
                      <input
                        type="radio"
                        name="agreement"
                        value="No"
                        checked={model.agreement === false}
                        onChange={this.handleradioChange7}
                      />
                      No
                </label>
                  </p>
                </div>
                <div className="Agree-collapse" hidden={model.agreement ? false : true}>
                  <TextArea
                    rows="3"
                    name="agreementDetails"
                    title="Provide details: "
                    value={model.agreementDetails}
                    placeholder="Enter details here "
                    onChange={this.props.handleInput}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="LabelNum">
                  <p>If the answer to the previous question is YES, are you aware of such subcontractors or other third parties having engaged in fraud, bribery or corrupt practices?
                <label className="radio-inline margin">
                      <input
                        type="radio"
                        name="subContractors"
                        value="Yes"
                        checked={model.subContractors === true}
                        onChange={this.handleradioChange8}
                      />
                      Yes
                  </label>
                    <label className="radio-inline">
                      <input
                        type="radio"
                        name="subContractors"
                        value="No"
                        checked={model.subContractors === false}
                        onChange={this.handleradioChange8}
                      />
                      No
                  </label>
                  </p>
                </div>
                <div className="Contract-collapse" hidden={model.subContractors ? false : true}>
                  <TextArea
                    rows="3"
                    name="subcontractorsDetails"
                    title="Provide details: "
                    value={model.subcontractorsDetails}
                    placeholder="Enter details here "
                    onChange={this.props.handleInput}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="LabelNum">
                  <p>What steps do you take to ensure that any such subcontractors or other third parties will not engage in fraud, bribery or corrupt practices?
               <div>
                      <TextArea
                        className="Textarea"
                        rows="3"
                        name="steps"
                        title="Provide details: "
                        value={model.steps}
                        placeholder="Enter details here "
                        onChange={this.props.handleInput}
                      />
                    </div>
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <p className="LabelNum">
                  Will your company comply with the WSP Code of Conduct and the WSP Third Party Code of Conduct?
                  <label className="radio-inline margin">
                    <input
                      type="radio"
                      name="wspConduct"
                      value="Yes"
                      checked={model.wspConduct === true}
                      onChange={this.handleradioChange9}
                    />
                    Yes
                  </label>
                  <label className="radio-inline">
                    <input
                      type="radio"
                      name="wspConduct"
                      value="No"
                      checked={model.wspConduct === false}
                      onChange={this.handleradioChange9}
                    />
                    No
                  </label>
                </p>
                <a className="LabelNum" href="http://cdn.wsp-pb.com/ld2hpi/third-party-code-of-conduct.pdf">http://cdn.wsp-pb.com/ld2hpi/third-party-code-of-conduct.pdf</a>
              </td>
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

export default BusinessIntegrity;
