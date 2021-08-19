import React from 'react';

export const CheckBox = props => {
  return (
    <div className="LabelNum">
      <div className="checkbox">
        <input
          name={props.name}
          onClick={props.handleCheckElement}
           type="checkbox"
           checked={props.isChecked}
           value={props.value}
        />
        {props.value}
      </div>
    </div>
  );
};

export default CheckBox;
