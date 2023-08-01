import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { FormContext } from "../../../App";
import * as yup from "yup";

function Basic() {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  const renderError = (message) => (
    <p className="italic text-red-600">{message}</p>
  );

  const ValidationSchema = yup.object().shape({
    fullName: yup.string().label('Name').required(),
    displayName: yup.string().label('Display Name').required(),
  });

  return (
    <Formik
      initialValues={{
        fullName: "",
        displayName: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={(values) => {
        const data = { ...formData, ...values };
        setFormData(data);
        setActiveStepIndex(activeStepIndex + 1);
      }}
    >
      <Form className="flex flex-col justify-center items-center">
        <div className="text-2xl font-medium self-center mb-2 tracking-wide">Welcome! First things first...</div>
        <div className="font-light self-center mb-2 text-gray-500 mb-2 tracking-normal pb-2 grayscale text-base">You can always change them later.</div>
        <div className="flex flex-col w-full mb-2">
          <label className="font-normal text-gray-900 text-sm">Full Name</label>
          <Field
            name="fullName"
            className="rounded-md border p-2"
            placeholder="John Doe"
          />
        </div>
        <ErrorMessage name="fullName" render={renderError} />
        <div className="flex flex-col w-full mb-2">
          <label className="font-normal text-gray-900 text-sm">Display Name</label>
          <Field
            name="displayName"
            className="rounded-md border p-2"
            placeholder="Steve"
          />
        </div>
        <ErrorMessage name="displayName" render={renderError} />
        <button
          className="font-light text-xs rounded-md w-full btn-bg-color font-medium text-white my-2 p-2"
          type="submit"
        >
          Create Workspace
        </button>
      </Form>
    </Formik>
  );
}

export default Basic;
