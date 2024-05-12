import React from "react";
import PropTypes from "prop-types";
import FormLabel from "./FormLabel";

function FormInput({
  label,
  type = "text",
  name,
  placeholder = "Enter field",
  register,
  error,
  required,
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-gray-600">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        {...register}
        className="mt-2 outline-none bg-gray-100 px-4 py-2 w-full rounded"
      />
      {error && <small className="text-sm text-red-500">{error.message}</small>}
    </div>
  );
}

FormInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.object,
  error: PropTypes.object,
  required: PropTypes.bool,
};

export default FormInput;
