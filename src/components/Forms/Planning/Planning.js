import { Form, Formik } from "formik";
import React, { useContext } from "react";
import { FormContext } from "../../../App";
import * as yup from "yup";

function Planning() {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  const ValidationSchema = yup.object().shape({
    plan: yup.string().required(),
  });

  return (
    <Formik
      initialValues={{plan: ""}}
      validationSchema={ValidationSchema}
    >
      <Form className="flex flex-col justify-center items-center">
      <div className="form-wrapper">
        <div className="text-2xl font-medium self-center mb-2 tracking-wide">How are you planning to use Eden?</div>
        <div className="font-light self-center mb-2 text-gray-500 mb-2 tracking-normal pb-2 grayscale text-sm">We'll streamline your setup experience accordingly.</div>
        <div className="flex flex-row">
          <button className={`planning-card pointer-events-auto rounded-lg bg-white p-4 m-4 ${formData?.plan === "self" ? "ring-2 ring-indigo-600": "ring-gray-2"}`}
            onClick={() => {
              let data = { ...formData };
              data.plan = data.plan === "" || !("plan" in formData) || data.plan === "team" ? "self" : "";
              setFormData(data);
            }}
          >
            <div className="flex justify-between">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div className="font-medium text-slate-900 text-left p-1">For myself</div>
            <p className="text-gray-700 text-base break-words overflow-hidden gray text-left text-xs p-1">Write better. Think more clearly. Stay organized</p>
          </button>

          <button
            onClick={() => {
              let data = { ...formData };
              data.plan = data.plan === "" || !("plan" in formData) || data?.plan === "self" ? "team" : "";
              setFormData(data);
            }}
            className={`planning-card pointer-events-auto rounded-lg bg-white p-4 m-4 ${formData?.plan === "team" ? "ring-2 ring-indigo-600": "ring-gray-2"}`}>
            <div className="flex justify-between">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </div>
            <div className="font-medium text-slate-900 text-left p-1">With my team</div>
            <p className="text-gray-700 text-base break-words overflow-hidden gray text-left text-xs p-1">Wikis, docs, tasks & projects, all in one place</p>
          </button>
        </div>
        <button
          className="w-full rounded-md btn-bg-color font-medium text-white my-2 p-2"
          type="submit"
          onClick={()=> setActiveStepIndex(activeStepIndex + 1)}>
          Continue
        </button>
        </div>
      </Form>
    </Formik>
  );
}

export default Planning;
