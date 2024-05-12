import React from "react";
import PropTypes from "prop-types";
import FormLabel from "./FormLabel";

function Textarea({
  label,
  name,
  placeholder = "Enter information briefly!...",
  register,
  error,
  required,
}) {
  return (
    <div>
      <FormLabel name={name} text={label} required={required} />
      <textarea
        name={name}
        id={name}
        placeholder={placeholder}
        {...register}
        rows={3}
        className="mt-2 outline-none bg-gray-100 px-4 py-2 w-full rounded"
      ></textarea>
      {error && <small className="text-sm text-red-500">{error.message}</small>}
    </div>
  );
}

Textarea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.object,
  error: PropTypes.object,
  required: PropTypes.bool,
};

export default Textarea;
