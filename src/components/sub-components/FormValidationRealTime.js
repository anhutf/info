import { useEffect, useState, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function FormValidationRealTime() {
  const textRef = useRef(null);

  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string()
        .min(10, "Must be 10 characters or more")
        .required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      alert("Message has been sent");
      await postDataToGoogleForm(values);
      resetForm();
    },
  });

  useEffect(() => {
    textRef.current.style.height = "auto";
    textRef.current.style.height = `${textRef.current.scrollHeight}px`;
  }, [formik.values.message]);

  async function postDataToGoogleForm(values) {
    const formURL =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeHcMmkrfoW2FLdK0oqejJVKXc4W1Rcrh-MMoZiO4EDlanxLw/formResponse";
    const formData = new FormData();

    formData.append("entry.999060259", values.name);
    formData.append("entry.1709340148", values.email);
    formData.append("entry.1063400404", values.message);

    await fetch(formURL, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    });
  }

  const labelClassName =
    "block mb-2 text-base sm:text-lg md:text-xl text-slate-100";
  const inputClassName =
    "bg-slate-800 border border-slate-600 text-slate-50 text-base sm:text-lg md:text-xl rounded-md focus:ring-slate-500 focus:border-slate-500 block w-full px-4 py-3 placeholder-gray-600";

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="max-w-xl mx-auto flex flex-col gap-2 sm:gap-4 py-8"
    >
      <div className="field">
        <label htmlFor="name" className={labelClassName}>
          Full name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className={inputClassName}
          placeholder="Nguyen Anh Nhut"
          autoComplete="off"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <span className="inline-block h-auto text-sm sm:text-base text-red-500">
          {formik.touched.name && formik.errors.name
            ? formik.errors.name
            : null}
        </span>
      </div>
      <div className="field">
        <label htmlFor="email" className={labelClassName}>
          Email address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className={inputClassName}
          placeholder="anhutf@gmail.com"
          autoComplete="off"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <span className="inline-block h-auto text-sm sm:text-base text-red-500">
          {formik.touched.email && formik.errors.email
            ? formik.errors.email
            : null}
        </span>
      </div>
      <div className="field">
        <label htmlFor="message" className={labelClassName}>
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={5}
          className={inputClassName}
          placeholder="Write your message"
          autoComplete="off"
          ref={textRef}
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <span className="inline-block h-auto text-sm sm:text-base text-red-500">
          {formik.touched.message && formik.errors.message
            ? formik.errors.message
            : null}
        </span>
      </div>
      <button
        type="submit"
        className="border border-amber-400 hover:border-amber-500 px-6 py-3 rounded-md text-amber-400 transition duration-500 ease-in-out hover:-translate-y-0.5 text-base sm:text-lg md:text-xl font-medium uppercase mt-2"
      >
        Send message
      </button>
    </form>
  );
}
