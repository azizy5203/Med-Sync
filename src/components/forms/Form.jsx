import React from "react";
import { Formik, Form as FormikForm } from "formik";
import PropTypes from "prop-types";
import Spinner from "../shared/Spinner/Spinner";
import { Button } from "../ui/button";

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
  return (
    <Formik
      initialValues={isEditing ? model : initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
      onReset={onReset}>
      {({ isSubmitting }) =>
        isSubmitting ? (
          <div className="flex justify-center items-center">
            <Spinner />
          </div>
        ) : (
          <FormikForm className="rounded-md p-4">
            <div>{children}</div>
            {defaultActions && (
              <div className="flex gap-4 mt-8">
                <Button type="submit">Submit</Button>
                <Button
                  type="reset"
                  variant="outline">
                  Reset
                </Button>
              </div>
            )}
          </FormikForm>
        )
      }
    </Formik>
  );
}

export default Form;
