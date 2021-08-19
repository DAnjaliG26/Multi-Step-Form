import React, { Component } from "react";
import Input from "../SharedComponents/Input";

class Billing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      model: props.supplierRequest,
    };
  }

  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
    document.getElementsByClassName('step3')[0].classList.remove("is-active");
    document.getElementsByClassName('step4')[0].classList.add("is-active");
  }

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
    document.getElementsByClassName('step3')[0].classList.remove("is-active");
    document.getElementsByClassName('step2')[0].classList.add("is-active");
  }

  render() {
    const { model } = this.state;
    return (
      <div>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td className="SecondColumn">
                <label className="Label">BILLING (BANK DETAILS)</label>
              </td>
            </tr>
            <tr>

              <td>
                <Input
                  type="text"
                  name="accountName"
                  title="Account Name:"
                  value={model.accountName}
                  placeholder="Enter Account Name"
                  onChange={this.props.handleInput}
                />
              </td>
            </tr>
            <tr>

              <td>
                <Input
                  type="text"
                  name="accountNumber"
                  title="Account Number:"
                  value={model.accountNumber}
                  placeholder="Enter Account Number "
                  onChange={this.props.handleInput}
                />
              </td>
            </tr>
            <tr>

              <td>
                <Input
                  type="text"
                  title="Bank Name:"
                  name="BankName"
                  value={model.BankName}
                  placeholder="Enter Name Of Bank "
                  onChange={this.props.handleInput}
                />
              </td>
            </tr>
            <tr>

              <td>
                <Input
                  type="text"
                  title="Bank Address:"
                  name="bankAddress"
                  value={model.bankAddress}
                  placeholder="Enter Bank Address "
                  onChange={this.props.handleInput}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Input
                  type="text"
                  title=" Swift Code:"
                  name="swiftCode"
                  value={model.swiftCode}
                  placeholder="Enter Swift Code "
                  onChange={this.props.handleInput}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Input
                  type="text"
                  title="Sort Code(If Applicable):"
                  name="sortCode"
                  value={model.sortCode}
                  placeholder="Enter Sort Code "
                  onChange={this.props.handleInput}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Input
                  type="text"
                  title="IBAN Code:"
                  name="ibanCode"
                  value={model.ibanCode}
                  placeholder="Enter IBAN Code "
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
      </div >
    );
  }
}

export default Billing;
