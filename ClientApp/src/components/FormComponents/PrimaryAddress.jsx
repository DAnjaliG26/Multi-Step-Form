import React, { Component } from "react";

/* Import Components */

import Input from "../SharedComponents/Input";
import TextArea from "../SharedComponents/TextArea";

class PrimaryAddress extends Component {
  constructor(props) {
    super(props);

    this.state = {
      model: props.supplierRequest,
    };

  }

  saveAndContinue = (e) => {
    e.preventDefault()
    this.props.nextStep()
    document.getElementsByClassName('step2')[0].classList.remove("is-active");
    document.getElementsByClassName('step3')[0].classList.add("is-active");
  }

  back = (e) => {
   e.preventDefault()
    this.props.prevStep()
    document.getElementsByClassName('step2')[0].classList.remove("is-active");
    document.getElementsByClassName('step1')[0].classList.add("is-active");
  }
  render() {
    const { model } = this.state;
    return (
      <div>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td className="SecondColumn">
              <label className="Label">PRIMARY ADDRESS</label>
            </td>
          </tr>
          <tr>

            <td>
              <Input
                type="text"
                name="buildingDetail"
                title="Building Number/Name:"
                value={model.buildingDetail}
                placeholder="Enter Building number/name"
                onChange={this.props.handleInput}
              />
            </td>
          </tr>
          <tr>

            <td>
              <Input
                type="text"
                name="street"
                title="Street:"
                value={model.street}
                placeholder="Enter Street name "
                onChange={this.props.handleInput}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Input
                type="text"
                name="city"
                title="City:"
                value={model.city}
                placeholder="Enter City Name "
                onChange={this.props.handleInput}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Input
                type="text"
                title="Country:"
                name="country"
                value={model.country}
                placeholder="Enter Name Of Country "
                onChange={this.props.handleInput}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Input
                type="text"
                title="Post code/PO Box:"
                name="postCode"
                value={model.postCode}
                placeholder="Enter Post code/PO Box "
                onChange={this.props.handleInput}
              />
            </td>
          </tr>
          <tr>

            <td>
              <Input
                type="text"
                title=" Email Address:"
                name="email"
                value={model.email}
                placeholder="Enter  Email Address "
                onChange={this.props.handleInput}
              />
            </td>
          </tr>
          <tr>

            <td>
              <Input
                type="text"
                title="Website Url:"
                name="url"
                value={model.url}
                placeholder="Enter WebsiteUrl "
                onChange={this.props.handleInput}
              />
            </td>
          </tr>
          <tr>

            <td>
              <label className=" col-md-2 labelText">Billing Address: (If different from primary address)</label>
              <TextArea
                rows={4}
                value={model.billingAddress}
                name="billingAddress"
                placeholder="Enter Billing Address "
                onChange={this.props.handleInput}
              />
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
      </div>
    );
  }
}


export default PrimaryAddress;
