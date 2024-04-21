import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function ContactSection() {
  const labelClassName = "block mb-2 text-xl text-slate-100";
  const inputClassName =
    "bg-slate-800 border border-slate-600 text-slate-50 text-xl rounded-md focus:ring-slate-500 focus:border-slate-500 block w-full px-4 py-3 placeholder-gray-600";

  return (
    <section
      id="contact"
      className="contact px-8 pt-24 bg-gradient-to-b from-slate-800 to-slate-900 to-30%"
    >
      <div className=" max-w-5xl mx-auto">
        <h3 className="text-4xl uppercase text-amber-400 font-medium tracking-wider text-center">
          Contact Me
        </h3>
        <form className="max-w-xl mx-auto flex flex-col gap-7 py-8">
          <div className="field">
            <label htmlFor="name" className={labelClassName}>
              Full name
            </label>
            <input
              type="text"
              id="name"
              className={inputClassName}
              placeholder="Nguyen Anh Nhut"
              required
            />
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
              required
            />
          </div>
          <div className="field">
            <label htmlFor="message" className={labelClassName}>
              Message
            </label>
            <textarea
              id="name"
              rows={5}
              className={inputClassName}
              placeholder="Write your message"
              required
            />
          </div>
          <button
            type="submit"
            className="border border-amber-400 hover:border-amber-500 px-6 py-3 rounded-md text-amber-400 transition duration-500 ease-in-out hover:-translate-y-0.5 text-xl font-medium uppercase mt-2"
          >
            Send message
          </button>
        </form>
        <div className="mx-8 py-12 flex gap-4 justify-around text-slate-200 text-lg">
          <div className="w-1/4">
            <h4 className="flex gap-2 items-center">
              <PhoneIcon className="h-6 w-6 text-amber-400"></PhoneIcon>
              <span className="text-slate-300">Call me</span>
            </h4>
            <p className="pl-8 text-xl hover:text-amber-400">
              <a href="tel:84867532296">(+84) 86.753.2296</a>
            </p>
          </div>
          <div className="w-1/4">
            <h4 className="flex gap-2 items-center">
              <EnvelopeIcon className="h-6 w-6 text-amber-400"></EnvelopeIcon>
              <span className="text-slate-300">Email</span>
            </h4>
            <p className="pl-8 text-xl hover:text-amber-400">
              <a href="mailto:anhutf@gmail.com">anhutf@gmail.com</a>
            </p>
          </div>
          <div className="w-1/4">
            <h4 className="flex gap-2 items-center">
              <MapPinIcon className="h-6 w-6 text-amber-400"></MapPinIcon>
              <span className="text-slate-300">Location</span>
            </h4>
            <p className="pl-8 text-xl hover:text-amber-400">
              Binh Duong, Viet Nam
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
