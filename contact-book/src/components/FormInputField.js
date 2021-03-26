import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const FormInputField = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        className={classnames("form-control form-control-sm", {
          "is-invalid": error,
        })}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></input>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

FormInputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

FormInputField.defaultProps = {
  type: "text",
};

export default FormInputField;
