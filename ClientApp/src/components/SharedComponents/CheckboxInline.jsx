import React from "react";

const CheckBoxInline = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name} className="col-sm-10 LabelNum" >
        {props.title}
      </label>

      <div className=" col-xs-7">
        {props.options.map(option => {
          return (
            <label key={option} className="checkbox-inline LabelNum"  >
              <input
                className="LabelNum"
                id={props.name}
                name={props.name}
                onChange={props.onChange}
                value={option}
                checked={props.selectedOptions.indexOf(option) > -1}
                type="checkbox"
              />
              {option}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default CheckBoxInline;

