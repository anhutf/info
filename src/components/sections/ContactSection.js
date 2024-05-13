import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import FormValidation from "../sub-components/FormValidation";
import FormValidationRealTime from "../sub-components/FormValidationRealTime";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="contact px-4 sm:px-8 pt-10 sm:pt-20 bg-gradient-to-b from-slate-800 to-slate-900 to-30%"
    >
      <div className="max-w-5xl mx-auto">
        <h3 className="text-2xl sm:text-3xl md:text-4xl uppercase text-amber-400 font-medium tracking-wider text-center">
          Contact Me
        </h3>
        <FormValidationRealTime />
        <div className="mx-4 md:mx-8 py-12 sm:py-16 flex flex-col sm:flex-row gap-4 justify-between text-slate-200 text-base sm:text-lg">
          <div className="">
            <h4 className="flex gap-2 items-center">
              <PhoneIcon className="h-6 w-6 text-amber-400"></PhoneIcon>
              <span className="text-slate-300">Call me</span>
            </h4>
            <p className="pl-8 text-lg md:text-xl hover:text-amber-400">
              <a href="tel:84867532296">(+84) 86.753.2296</a>
            </p>
          </div>
          <div className="">
            <h4 className="flex gap-2 items-center">
              <EnvelopeIcon className="h-6 w-6 text-amber-400"></EnvelopeIcon>
              <span className="text-slate-300">Email</span>
            </h4>
            <p className="pl-8 text-lg md:text-xl hover:text-amber-400">
              <a href="mailto:anhutf@gmail.com">anhutf@gmail.com</a>
            </p>
          </div>
          <div className="sm:ustify-self-end">
            <h4 className="flex gap-2 items-center">
              <MapPinIcon className="h-6 w-6 text-amber-400"></MapPinIcon>
              <span className="text-slate-300">Location</span>
            </h4>
            <p className="pl-8 text-lg md:text-xl hover:text-amber-400">
              Binh Duong, Viet Nam
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
