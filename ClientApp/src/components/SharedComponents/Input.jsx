import React from "react";

const Input = props => {
  console.log(props.value);
  return (
    <div className="form-group">
      <label htmlFor={props.name} className=" control-label col-sm-3 labelText">
        {props.title}
      </label>
      <div className="col-md-5">
        <input
          className="form-control control-label col-sm-2"
          id={props.name}
          name={props.name}
          type={props.type}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;
