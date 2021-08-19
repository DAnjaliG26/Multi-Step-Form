import React, { Component } from "react";

class Environment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      model: props.supplierRequest,
    };

    this.handleradioChange = this.handleradioChange.bind(this);
  }
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
    document.getElementsByClassName('step5')[0].classList.remove("is-active");
    document.getElementsByClassName('step6')[0].classList.add("is-active");
  }

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
    document.getElementsByClassName('step3')[0].classList.remove("is-active");
    document.getElementsByClassName('step4')[0].classList.add("is-active");
  }

  handleradioChange(e) {
    const field = e.target.name;
    const { model } = this.state;
    if (e.target.value === 'No') model[field] = false;
    else model[field] = true;
    this.setState({ model });
  }

  render() {
    const { model } = this.state;
    return (
      <div>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td className="SecondColumn">
                <label className="Label">ENVIRONMENT</label>
              </td>
            </tr>
            <tr>
              <td>
                <div className="LabelNum">
                  <p>Is your organisation ISO 14001 certified?
                <label className="radio-inline margin">
                      <input
                        type="radio"
                        name="isoCertified"
                        value="Yes"
                        checked={model.isoCertified === true}
                        onChange={this.handleradioChange}
                      />
                      Yes
                  </label>
                    <label className="radio-inline">
                      <input
                        type="radio"
                        name="isoCertified"
                        value="No"
                        checked={model.isoCertified === false}
                        onChange={this.handleradioChange}
                      />
                      No
                  </label>
                  </p>
                </div>
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
          <div class="col-sm-4">
          </div>
        </div>
        <br />
      </div >
    );
  }
}

export default Environment;
