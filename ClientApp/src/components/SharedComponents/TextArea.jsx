import React from "react";
import "./Style.css";

const TextArea = props => (
  <div className="form-group">

    <label className=" control-label col-sm-1 labelText">
      {props.title}
    </label>
    <div className="col-md-5">
      <textarea
        className="form-control "
        id={props.name}
        name={props.name}
        rows={props.rows}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </div>
  </div>
);

export default TextArea;
