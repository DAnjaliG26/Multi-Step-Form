import React, { Component } from "react";
import { DatePicker } from '@progress/kendo-react-dateinputs';
import Input from "../SharedComponents/Input";
import TextArea from "../SharedComponents/TextArea";

class CompanyDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      model: props.supplierRequest,
    }; 
  }

  saveAndContinue = (e) => {
    e.preventDefault()
    this.props.nextStep()
    document.getElementsByClassName('step1')[0].classList.remove("is-active");
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
              <label className="Label">COMPANY DETAILS</label>
            </td>
          </tr>
          <tr>
            <td>
              <Input
                type="text"
                name="companyName"
                title="Full legal company name:"
                value={model.companyName}
                  placeholder="Enter company name"
                  onChange={this.props.handleInput}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Input
                type="text"
                name="businessName"
                title="Other trade/business names:"
                value={model.businessName}
                placeholder="Enter trade/business names "
                  onChange={this.props.handleInput}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Input
                type="text"
                name="licenseNo"
                title="Professional licence number:"
                value={model.licenseNo}
                placeholder="Enter Professional licence number: "
                  onChange={this.props.handleInput}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Input
                type="text"
                name="registrationNo"
                title="Commercial registration number:"
                value={model.registrationNo}
                placeholder="Enter Commercial registration number: "
                  onChange={this.props.handleInput}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Input
                type="text"
                title="Place of registration:"
                name="regPLace"
                value={model.regPLace}
                placeholder="Enter Place of registration "
                  onChange={this.props.handleInput}
              />
            </td>
          </tr>
          <tr>
            <td>
              <div className="form-group">
                <label className=" control-label col-sm-3 labelText">
                  Company Registration Date:
                </label>
                <div className="col-md-5">
                  <DatePicker
                    className="form-control control-label col-sm-2"
                    name="regDate"
                    value={model.regDate}
                      onChange={this.props.handleInput}
                    format={"dd-MMM-yyyy"}
                  />
                </div>
              </div>

            </td>
          </tr>
          <tr>
            <td>
              <Input
                type="text"
                title=" Parent organisations and any subsidiaries or affiliates:"
                name="subsidiaries"
                value={model.subsidiaries}
                placeholder="Enter  Parent organisations and any subsidiaries or affiliates "
                  onChange={this.props.handleInput}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Input
                type="text"
                title="Who has the ultimate beneficial ownership?"
                name="ownership"
                value={model.ownership}
                placeholder="Enter ultimate beneficial ownership "
                  onChange={this.props.handleInput}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Input
                type="text"
                title="VAT registration Number:"
                name="vatNo"
                value={model.vatNo}
                placeholder="Enter VAT registration Number "
                  onChange={this.props.handleInput}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Input
                type="text"
                title="TAX registration Number:"
                name="taxregistrationNo"
                value={model.taxregistrationNo}
                placeholder="Enter TAX registration Number "
                  onChange={this.props.handleInput}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Input
                type="text"
                name="telephoneNo"
                title="Telephone number (Including country code):"
                value={model.telephoneNo}
                placeholder="Enter Telephone number "
                  onChange={this.props.handleInput}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label className="col-sm-2 labelText">Names of Statutory Directors / General Manager:</label>
              <TextArea
                rows={4}
                value={model.directors}
                name="directors"
                  onChange={this.props.handleInput}
                placeholder="Mention List of Names of Statutory Directors / General Manager"
              />
            </td>
          </tr>
        </tbody>
        <tfoot>
             
        </tfoot>
        </table>
        <div className="row">
          <div className="col-sm-4">
          </div>
          <div className="col-sm-4">
            <button className=" btn btn-default " onClick={this.saveAndContinue}>Save And Continue</button>
          </div>
          <div className="col-sm-4">
          </div>
        </div>
        <br/>
      </div>
        );
      }
    }
    
    
    export default CompanyDetails;
