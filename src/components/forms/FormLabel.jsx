import React from "react";
import PropTypes from "prop-types";

const FormLabel = ({ name, text, required, children }) => {
  return (
    <div>
      <label htmlFor={name} className="block text-gray-600">
        {text} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
};

FormLabel.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  required: PropTypes.bool,
  children: PropTypes.node,
};

export default FormLabel;
