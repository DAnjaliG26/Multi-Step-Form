import React, { Component } from "react";
import { CheckBox } from '../SharedComponents/CheckboxNew';
import { Upload } from '@progress/kendo-react-upload';
import * as Constants from "../../Services/constants";
import { SupplierApi } from '../../Services/WebApi/SupplierApi';

let fileList = [];

class Files extends Component {
  constructor(props) {
    super(props);

    this.filesOptions = [

      { id: 1, name: "vat", value: "VAT Certificate", isChecked: false },
      { id: 2, name: "validTrade", value: "Valid Trade or Commercial Licence Copy", isChecked: false },
      { id: 3, name: "bankDetails", value: "Bank details supporting document (Copy of cancelled cheque/Bank statement/Bank constter etc.)", isChecked: false },
      { id: 4, name: "taxCard", value: "Tax Card(Qatar only)", isChecked: false },
      { id: 5, name: "iso9001", value: "ISO 9001", isChecked: false },
      { id: 6, name: "iso14001", value: "ISO 14001", isChecked: false },
      { id: 7, name: "companyProfile", value: "Company Profile", isChecked: false },
      { id: 8, name: "oshas18001", value: "OSHAS 18001", isChecked: false },
      { id: 9, name: "InsuranceCopies", value: "Insurance copies", isChecked: false },
    ];

    this.state = {
      files: [],
      model: props.supplierRequest,
      filesOption: this.filesOptions,
    };

    this.handleCheckElement = this.handleCheckElement.bind(this);

  }

  componentWillMount() {
    const { model } = this.state;
    const filesOptions = this.state.filesOption;
    { model.vat ? filesOptions[0].isChecked = true : filesOptions[0].isChecked = false }
    { model.validTrade ? filesOptions[1].isChecked = true : filesOptions[1].isChecked = false }
    { model.bankDetails ? filesOptions[2].isChecked = true : filesOptions[2].isChecked = false }
    { model.taxCard ? filesOptions[3].isChecked = true : filesOptions[3].isChecked = false }
    { model.iso9001 ? filesOptions[4].isChecked = true : filesOptions[4].isChecked = false }
    { model.iso14001 ? filesOptions[5].isChecked = true : filesOptions[5].isChecked = false }
    { model.companyProfile ? filesOptions[6].isChecked = true : filesOptions[6].isChecked = false }
    { model.oshas18001 ? filesOptions[7].isChecked = true : filesOptions[7].isChecked = false }
    { model.InsuranceCopies ? filesOptions[8].isChecked = true : filesOptions[8].isChecked = false }
  }

  handleCheckElement = (e) => {
    const field = e.target.name;
    const { model } = this.state;
    model[field] = e.target.checked;
    this.setState({ model });

    const filesOptions = this.state.filesOption;
    filesOptions.forEach(filesOptions => {
      if (filesOptions.value === e.target.value)
        filesOptions.isChecked = e.target.checked;
    });
    this.setState({ filesOption: filesOptions });
  }

  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
    document.getElementsByClassName('step9')[0].classList.remove("is-active");
    document.getElementsByClassName('finish')[0].classList.add("is-active");
  }

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
    document.getElementsByClassName('step9')[0].classList.remove("is-active");
    document.getElementsByClassName('step8')[0].classList.add("is-active");
  }

  onRemove = (id, event) => {
    debugger
    this.setState({
      files: event.newState,
    });
    //const url = `${Constants.API_URL_PREFIX}/api/SupplierRequest/DeleteAttachment?attachment=${event.affectedFiles[0].name}`
    // console.log(url);
    var index = 0;
    for (var i = fileList.length - 1; i >= 0; i--) {
      if (fileList[i].filetypeID === id) {
        index = i;
        fileList.splice(index, 1);
        break;
      }
    }
    console.log(fileList);
  }

  onAdd = (event) => {
    this.setState({
      files: event.newState,
    });
  }


  onProgress = (event) => {
    this.setState({
      files: event.newState,
    });
  }

  onStatusChange = (id, event) => {
    debugger;
    this.setState({
      files: event.newState,
    });
    var index = 0;
    if (event.response !== undefined) {
      if (fileList.length > 0) {
        for (var i = fileList.length - 1; i >= 0; i--) {
          if (fileList[i].filetypeID === id) {
            index = i;
            break;
          }
        }

        if (index) {
          fileList[index].AttachmentPath = event.response.response.attachmentPath;
          index = 0;
        }
        else {
          fileList.push(
            {
              filetypeID: id,
              AttachmentPath: event.response.response.attachmentPath
            }
          );
        }
      }
      else {
        fileList.push(
          {
            filetypeID: id,
            AttachmentPath: event.response.response.attachmentPath
          }
        );
      }
      let model = this.state.model;
      model.attachmentPath = fileList;
      return this.setState({ model: model });
    }
  }

  handleDelete = (id, attachment, name, e) =>
  {
    debugger
    const supplierApi = new SupplierApi();
    supplierApi.Delete(attachment)
    var index = 0;
    for (var i = fileList.length - 1; i >= 0; i--) {
      if (fileList[i].filetypeID === id) {
        index = i;
        fileList.splice(index, 1);
        break;

      }
    }
    debugger
    let model = this.state.model;
    model.attachmentPath = fileList;
    model[name] = false;
    const filesOptions = this.state.filesOption;
    filesOptions[id-1].isChecked = false;
    return this.setState({ model: model });
    console.log(fileList);
   
  }

  render() {
    const state = this.state;
    return (
      <div>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td className="SecondColumn">
                <label className="Label">FILES (ATTACHMENTS)</label>
              </td>
            </tr>
            <tr>
              <td>
                <label className="LabelNum">
                  Please provide the following documents, where appropriate:
              </label>

                <div>
                  <dl className="LabelNum margincheckbox">
                    {
                      state.filesOption.map((filesOptions) => {
                        return (
                          <div className="form-group">
                            <div class="row">
                              <div class="col-sm-5">
                                <CheckBox key={filesOptions.name}  handleCheckElement={this.handleCheckElement} {...filesOptions} />
                              </div>
                              <div className="col-sm-6" hidden={filesOptions.isChecked ? false : true}>
                                <div className={filesOptions.name}>
                                <Upload                                  
                                  batch={false}
                                  multiple={false}
                                  files={this.state.files}
                                  onAdd={this.onAdd}
                                  onRemove={(e) => this.onRemove(filesOptions.id, e)}
                                  onProgress={this.onProgress}
                                  onStatusChange={(e) => this.onStatusChange(filesOptions.id, e)}
                                  autoUpload={true}
                                  withCredentials={false}
                                  showFileList={false}
                                  saveUrl={`${Constants.API_URL_PREFIX}/api/SupplierRequest/UploadAttachment`}
                                  //removeUrl={`${Constants.API_URL_PREFIX}/api/SupplierRequest/DeleteAttachment?attachment=${this.state.model.attachmentPath.map((file) => {
                                  //  if (file.filetypeID === filesOptions.id) {
                                  //    var filename = file.AttachmentPath;
                                  //    return filename
                                  //  }

                                  //})}`}
                                />
                                </div>
                                <ul className="k-upload-files k-reset">
                                {
                                    this.state.model.attachmentPath.map((attachements) => {
                                      debugger
                                      if (attachements.filetypeID == filesOptions.id)
                                        return (
                                          <li className="list-group-item  k-file k-file-success" key={attachements.filetypeID}>                          
                                            <span>
                                          {attachements.AttachmentPath}
                                            </span>
                                            <strong class="k-upload-status">
                                              <button type="button" tabindex="-1" class="k-button k-button-icontext k-upload-action pull-right k-progress" onClick={(e) => this.handleDelete(attachements.filetypeID, attachements.AttachmentPath, filesOptions.name, e)}>
                                                <span aria-label="Remove" title="Remove" class="k-icon k-delete k-i-x"></span>
                                              </button>
                                            </strong>
                                          </li>
                                          )
                                    })
                                  }
                                </ul>
                              </div>
                              
                            </div>
                          </div>
                        );
                      })
                    }
                  </dl>
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

export default Files;
