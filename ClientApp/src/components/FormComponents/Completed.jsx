import React, { Component } from "react";
/* Import Components */
import Input from "../SharedComponents/Input";
import { Upload } from '@progress/kendo-react-upload';
import { SupplierApi } from '../../Services/WebApi/SupplierApi';
import * as Constants from "../../Services/constants";

let Electarray = [];
let stamparray = [];

class Completed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      electronicSign: [],
      OrganizationalStamp: [],
      isLoading: false,
      isSubmit: false,
      model: props.supplierRequest,
    };

    this.handleSave = this.handleSave.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentWillMount() {
    this.setState({ isLoading: true });
    debugger;
    this.setState({ electronicSign: Electarray })
    this.setState({ OrganizationalStamp: stamparray })
    console.log(this.state);
    console.log(Electarray);

  }

  handleSave = async () => {
    //const ProgressBar = (
    //  <div >
    //    <img src={require('../Images/Loader.gif')} className="Imagestyle" height />
    //  </div>
    //);
    debugger;
    //{ this.state.isLoading ? ProgressBar:false }

    console.log(this.state.model);
    const supplierApi = new SupplierApi();
    this.state.model.attachmentPath = JSON.stringify(this.state.model.attachmentPath);
    const save = await supplierApi.save(this.state.model);
    console.log(this.state.model);
    const savefiles = await supplierApi.Savefiles(this.state.model);
    console.log(this.state.model);
    if (savefiles && save)
      debugger;
      this.setState({ isSubmit: true });
  }
 

  handleInput(e) {
    const field = e.target.name;
    const { model } = this.state;
    model[field] = e.target.value;
    return this.setState({ model });
  }

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
    document.getElementsByClassName('finish')[0].classList.remove("is-active");
    document.getElementsByClassName('step9')[0].classList.add("is-active");
  }

  onAdd = (name,event) => {
    debugger;
    console.log(event);
    if (name == 'sign') {
      this.setState({
        electronicSign: event.newState,
      }, () => {
        this.setState({
          electronicSign: event.newState,
        });
        Electarray = this.state.electronicSign
        console.log(this.state);
        console.log(Electarray);
      })
    }
    if (name == 'stamp') {
      this.setState({
           OrganizationalStamp: event.newState,
      }, () => {
        this.setState({
          OrganizationalStamp: event.newState,
        });
        stamparray = this.state.OrganizationalStamp
        console.log(this.state);
        console.log(stamparray);

      })

    }
  }

  onRemove = (name,event) => {
    debugger
    if (name == 'sign') 
      this.setState({
        electronicSign: event.newState,  
      });
   
    if (name=='stamp')
      this.setState({      
        OrganizationalStamp: event.newState,
      });

  }


  onStatusChangeSign = (event) => {
    debugger;
    this.setState({
      electronicSign: event.newState,
    });
    if (event.response !== undefined) {
      let modelState = this.state.model;
      modelState.electronicSign = event.response.response.attachmentPath;
      return this.setState({ model: modelState });
    }
  }
  onStatusChangeStamp = (event) => {
    debugger;
    this.setState({
      OrganizationalStamp: event.newState
    });
    if (event.response !== undefined) {
      let modelState = this.state.model;
      modelState.organizationStamp = event.response.response.attachmentPath;
      return this.setState({ model: modelState });
    }
  }
  render() {
    const state = this.state;
    const { model } = this.state;

    const Thanks = (
      <div className="thanks">
        <h2>Thanks</h2>
        <h4>Your submission has been recieved</h4>
      </div>
    );

    const Completed = (<div>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td className="SecondColumn">
              <label className="Label">We confirm that this questionnaire has been compconsted to the best of our knowledge and belief and is signed by a person of authority to bind the company</label>
            </td>
          </tr>
          <tr>

            <td>
              <Input
                type="text"
                name="name"
                title="Name:"
                value={model.name}
                placeholder="Enter Name "
                onChange={this.handleInput}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Input
                type="text"
                name="designation"
                title="Designation:"
                value={model.designation}
                placeholder="Enter Designation  "
                onChange={this.handleInput}
              />
            </td>
          </tr>
          <tr>
            <td>
              <div className="form-group">
                <label className="control-label col-sm-3 labelText">Electronic SIgnature:</label>
                <div className="col-md-5"  >
                  
                  <Upload
                    batch={false}
                    multiple={false}
                    files={this.state.electronicSign}
                    //defaultFiles={this.state.electronicSign}
                    onAdd={(e) => this.onAdd('sign', e)}
                    onRemove={(e) => this.onRemove('sign', e)}
                    //onProgress={this.onProgress}                   
                    onStatusChange={this.onStatusChangeSign}
                    autoUpload={false}
                    withCredentials={false}
                    showFileList={true}
                    saveUrl={`${Constants.API_URL_PREFIX}/api/SupplierRequest/UploadAttachment`}
                    removeUrl={`${Constants.API_URL_PREFIX}/api/SupplierRequest/DeleteAttachment?attachment=${this.state.model.electronicSign}`}
                  />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="form-group">
                <label className="control-label col-sm-3 labelText">Organization stamp:</label>
                <div className="col-md-5">
                  <Upload
                    batch={false}
                    multiple={false}
                    files={this.state.OrganizationalStamp}
                    onAdd={(e) => this.onAdd('stamp', e)}
                    onRemove={(e) => this.onRemove('stamp', e)}
                    onStatusChange={this.onStatusChangeStamp}
                    autoUpload={false}
                    withCredentials={false}
                    showFileList={true}
                    saveUrl={`${Constants.API_URL_PREFIX}/api/SupplierRequest/UploadAttachment`}
                    removeUrl={`${Constants.API_URL_PREFIX}/api/SupplierRequest/DeleteAttachment?attachment=${this.state.model.organizationStamp}`}
                  />
                </div>
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
            <button className="btn btnstyle" onClick={this.handleSave}>Confirm & Submit</button>
        </div>
        <div class="col-sm-4">
        </div>
      </div>
      <br />
    </div >
    )
    return (
      <div>
        {state.isSubmit ? Thanks : Completed}
      </div>
    )
  }
}


export default Completed;
