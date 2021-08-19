import React, { Component } from "react";


class Quality extends Component {
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
    return this.setState({ model });
  }

  handleradioChange1(e) {
    const field = e.target.name;
    const { model } = this.state;
    if (e.target.value === 'No') {
      model[field] = false;
    }
    else model[field] = true;
    return this.setState({ model });
  }

  handleradioChange2(e) {
    const field = e.target.name;
    const { model } = this.state;
    if (e.target.value === 'No') {
      model[field] = false;
    }
    else model[field] = true;
    return this.setState({ model });
  }

  handleradioChange3(e) {
    const field = e.target.name;
    const { model } = this.state;
    if (e.target.value === 'No') model[field] = false;
    else model[field] = true;
    return this.setState({ model });
  }

  handleradioChange4(e) {
    const field = e.target.name;
    const { model } = this.state;
    if (e.target.value === 'No') model[field] = false;
    else model[field] = true;
    return this.setState({ model });
  }

  handleradioChange5(e) {
    const field = e.target.name;
    const { model } = this.state;
    if (e.target.value === 'No') model[field] = false;
    else model[field] = true;
    return this.setState({ model });
  }
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
    document.getElementsByClassName('step6')[0].classList.remove("is-active");
    document.getElementsByClassName('step7')[0].classList.add("is-active");
  }

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
    document.getElementsByClassName('step5')[0].classList.remove("is-active");
    document.getElementsByClassName('step6')[0].classList.add("is-active");
  }
  render() {
    const { model } = this.state;

    return (
      <div>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td className="SecondColumn">
                <label className="Label">QUALITY</label>
              </td>
            </tr>
            <tr>
              <td>
                <div className="LabelNum">
                  <p>
                    Is your organisation ISO9001 certified?
                <label className="radio-inline margin">
                      <input
                        type="radio"
                        name="qualityIso"
                        value="Yes"
                        checked={model.qualityIso === true}
                        onChange={this.handleradioChange}
                      />
                      Yes
                  </label>
                    <label className="radio-inline">
                      <input
                        type="radio"
                        name="qualityIso"
                        value="No"
                        checked={model.qualityIso === false}
                        onChange={this.handleradioChange}
                      />
                      No
                  </label>
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
          <tfoot className="Row-collapse" hidden={model.qualityIso ? true : false}>
            <tr>
              <td>
                <div className="LabelNum">
                  <p>Does your organisation have a Quality Policy Statement?
  
                <label className="radio-inline margin">
                      <input
                        type="radio"
                        name="qualityPolicy"
                        value="Yes"
                        checked={model.qualityPolicy === true}
                        onChange={this.handleradioChange1}
                      />
                      Yes
                  </label>
                    <label className="radio-inline">
                      <input
                        type="radio"
                        name="qualityPolicy"
                        value="No"
                        checked={model.qualityPolicy === false}
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
                  <p>
                    Is there a procedure for checking/inspecting products/services supplied available and results recorded?
                <label className="radio-inline margin">
                      <input
                        type="radio"
                        name="qualityRecorded"
                        value="Yes"
                        checked={model.qualityRecorded === true}
                        onChange={this.handleradioChange2}
                      />
                      Yes
                  </label>
                    <label className="radio-inline">
                      <input
                        type="radio"
                        name="qualityRecorded"
                        value="No"
                        checked={model.qualityRecorded === false}
                        onChange={this.handleradioChange2}
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
                  <p>Does your organisation offer any quality related training to your employees?
                <label className="radio-inline margin">
                      <input
                        type="radio"
                        name="qualityTraining"
                        value="Yes"
                        checked={model.qualityTraining === true}
                        onChange={this.handleradioChange3}
                      />
                      Yes
                  </label>
                    <label className="radio-inline">
                      <input
                        type="radio"
                        name="qualityTraining"
                        value="No"
                        checked={model.qualityTraining === false}
                        onChange={this.handleradioChange3}
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
                  <p>Does your organisation have a procedure for competency management and the evidence of appropriate assignment of staff?
                <label className="radio-inline margin">
                      <input
                        type="radio"
                        name="qualityStaff"
                        value="Yes"
                        checked={model.qualityStaff === true}
                        onChange={this.handleradioChange4}
                      />
                      Yes
                  </label>
                    <label className="radio-inline">
                      <input
                        type="radio"
                        name="qualityStaff"
                        value="No"
                        checked={model.qualityStaff === false}
                        onChange={this.handleradioChange4}
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
                  <p>Does your organisation have supplier management (due diligence) procedures and requirements?
                <label className="radio-inline margin">
                      <input
                        type="radio"
                        name="qualitySupplier"
                        value="Yes"
                        checked={model.qualitySupplier === true}
                        onChange={this.handleradioChange5}
                      />
                      Yes
                  </label>
                    <label className="radio-inline">
                      <input
                        type="radio"
                        name="qualitySupplier"
                        value="No"
                        checked={model.qualitySupplier === false}
                        onChange={this.handleradioChange5}
                      />
                      No
                  </label>
                  </p>
                </div>
              </td>
            </tr>
          </tfoot>

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

export default Quality;
