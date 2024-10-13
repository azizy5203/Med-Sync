import PropTypes from "prop-types";
import { useField } from "formik";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function TextField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 py-3">
      {/* {props.required && <span className="text-red-500 ms-1">*</span>} */}

      <Label
        htmlFor={props.name}
        className="mb-2">
        <span>{label}</span>
        {props.required && <span className="text-red-500 ms-1">*</span>}
      </Label>
      <Input
        type="text"
        id={props.name}
        placeholder={label}
        className="w-full"
        {...field}
        {...props}
        value={field.value || ""}
        onChange={field.onChange}
        onBlur={field.onBlur}
        toggleMask
        feedback={false}
      />
      {meta.touched && meta.error && (
        <small className="text-red-400">{meta.error}</small>
      )}
    </div>
  );
}

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default TextField;
