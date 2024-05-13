import { useEffect, useState, useRef } from "react";

export default function FormValidation() {
  const textRef = useRef(null);
  const [currentValue, setCurrentValue] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setFormData({ ...formData, [id]: value });
    if (id === "message") setCurrentValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = {};

    if (!formData.name.trim()) {
      err.name = "Name is required";
    }

    if (!formData.email.trim()) {
      err.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      err.email = "Email is not valid";
    }

    if (!formData.message.trim()) {
      err.message = "Message is required";
    } else if (formData.message.length < 10) {
      err.message = "Message is too short";
    }

    setErrors(err);
    if (Object.keys(err).length === 0) {
      alert("Form submitted successfully");
    }
  };

  useEffect(() => {
    textRef.current.style.height = "auto";
    textRef.current.style.height = `${textRef.current.scrollHeight}px`;
  }, [currentValue]);

  const labelClassName =
    "block mb-2 text-base sm:text-lg md:text-xl text-slate-100";
  const inputClassName =
    "bg-slate-800 border border-slate-600 text-slate-50 text-base sm:text-lg md:text-xl rounded-md focus:ring-slate-500 focus:border-slate-500 block w-full px-4 py-3 placeholder-gray-600";

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto flex flex-col gap-2 sm:gap-4 py-8"
    >
      <div className="field">
        <label htmlFor="name" className={labelClassName}>
          Full name
        </label>
        <input
          type="text"
          id="name"
          className={inputClassName}
          placeholder="Nguyen Anh Nhut"
          autoComplete="on"
          onChange={handleChange}
        />
        <span className="inline-block h-auto text-sm sm:text-base text-red-500">
          {errors.name}
        </span>
      </div>
      <div className="field">
        <label htmlFor="email" className={labelClassName}>
          Email address
        </label>
        <input
          type="email"
          id="email"
          className={inputClassName}
          placeholder="anhutf@gmail.com"
          autoComplete="on"
          onChange={handleChange}
        />
        <span className="inline-block h-auto text-sm sm:text-base text-red-500">
          {errors.email}
        </span>
      </div>
      <div className="field">
        <label htmlFor="message" className={labelClassName}>
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className={inputClassName}
          placeholder="Write your message"
          autoComplete="off"
          ref={textRef}
          value={currentValue}
          onChange={handleChange}
        />
        <span className="inline-block h-auto text-sm sm:text-base text-red-500">
          {errors.message}
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
