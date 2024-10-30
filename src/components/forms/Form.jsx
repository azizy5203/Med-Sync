import React from "react";
import { Formik, Form as FormikForm } from "formik";
import PropTypes from "prop-types";
import Spinner from "../shared/Spinner/Spinner.jsx";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
Form.propTypes = {
  children: React.ReactNode,
  // actions: {
  //   type: React.ReactNode,
  //   required: false,
  // },
  defaultActions: PropTypes.bool,
  model: PropTypes.object,
  initialValues: PropTypes.object,
  schema: PropTypes.object,
  isEditing: PropTypes.bool,
  onSubmit: PropTypes.func,
  onReset: PropTypes.func,
};

function Form({
  children,
  defaultActions = true,
  initialValues = {},
  model = {},
  schema,
  isEditing,
  onSubmit,
  onReset,
}) {
  const isLoading = useSelector((state) => state.auth.isLoading);
  return (
    <Formik
      initialValues={isEditing ? model : initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
      onReset={onReset}>
      {isLoading ? (
        <div className="flex justify-center items-center p-4">
          <Spinner />
        </div>
      ) : (
        <FormikForm className="rounded-md p-4">
          <div>{children}</div>
          {defaultActions && (
            <div className="flex gap-4 mt-8">
              <Button
                type="submit"
                className="text-white font-medium">
                Submit
              </Button>
              <Button
                type="reset"
                variant="outline">
                Reset
              </Button>
            </div>
          )}
        </FormikForm>
      )}
    </Formik>
  );
}

export default Form;
