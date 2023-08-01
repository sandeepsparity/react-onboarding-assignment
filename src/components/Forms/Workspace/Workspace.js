import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { FormContext } from "../../../App";
import * as yup from "yup";

function Workspace() {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  const renderError = (message) => (
    <p className="italic text-red-600">{message}</p>
  );

  const ValidationSchema = yup.object().shape({
    workspaceName: yup.string().label("Workspace Name").required(),
    workspaceURL: yup.string().matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Enter correct url!'
  ),
  });


  return (
    <Formik
      initialValues={{
        workspaceName: "",
        workspaceURL: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={(values) => {
        const data = { ...formData, ...values };
        setFormData(data);
        setActiveStepIndex(activeStepIndex + 1);
      }}
    >
      <Form className="flex flex-col justify-center items-center">
        <div className="text-2xl font-medium self-center mb-2 tracking-wide">Let's set up a home for all your work</div>
        <div className="font-light self-center mb-2 text-gray-500 mb-2 tracking-normal pb-2 grayscale text-sm">You can always create another workspace later.</div>
        <div className="flex flex-col w-full mb-2">
          <label className="font-medium text-gray-900 inter-font medium text-base text-sm">Workspace Name</label>
          <Field
            name="workspaceName"
            className="rounded border p-2"
            placeholder="Eden"
          />
        </div>
        <ErrorMessage name="workspaceName" render={renderError} />
        <div className="flex flex-col w-full mb-2">
          <label className="font-medium text-gray-900 inter-font medium text-sm">Workspace URL <span className="gray">(optional)</span></label>
          <div className="flex w-full">
            <div className="flex items-center justify-center bg-blue-lighter border-t border-l border-b border-blue-lighter rounded-l text-blue-dark px-2 disabled">www.eden.com/</div>
            <Field
              name="workspaceURL"
              className="rounded-r p-2 w-full text-md border-t border-b border-r border-blue-lighter"
              placeholder="Example"
            />
          </div>
        </div>
        <ErrorMessage name="workspaceURL" render={renderError} />
        <button
          className="text-xs rounded-md w-full btn-bg-color font-light text-white my-2 p-2"
          type="submit"
        >
          Create Workspace
        </button>
      </Form>
    </Formik>
  );
}

export default Workspace;
