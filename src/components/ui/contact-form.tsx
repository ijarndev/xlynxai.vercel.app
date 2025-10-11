import { useState } from "react";
import { User, Phone, Mail } from "lucide-react";
import {useForm, ValidationError} from "@formspree/react"

const Contact = () => {
 
  //Id formspree
  const [state, handleSubmit] = useForm("movkkjjk")

  if (state.succeeded) {
    return <p role="status" aria-live="polite">Thanks for joining!</p>
  }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="relative [&:*]:disabled:opacity-50">
            <User className="text-zinc-400 absolute top-3 left-3 h-5 w-5 pointer-events-none" />
            <input
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              name="firstName"
              disabled={state.submitting}
              className="w-full h-12 pl-10 pr-4 border border-zinc-700 bg-zinc-900/50 text-zinc-100 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
              aria-describedby="firstName-error"
              required
            />
            <ValidationError field="firstName" prefix="First Name" errors={state.errors} className="text-red-400 text-sm mt-1" id="firstName-error" />
          </div>
          <div className="relative [&:*]:disabled:opacity-50">
            <User className="text-zinc-400 absolute top-3 left-3 h-5 w-5 pointer-events-none" />
            <input
            name="lastName"
              type="text"
              disabled={state.submitting}
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              className="w-full h-12 pl-10 pr-4 border border-zinc-700 bg-zinc-900/50 text-zinc-100 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
              aria-describedby="lastName-error"
              required
            />
            <ValidationError field="lastName" prefix="Last Name" errors={state.errors} className="text-red-400 text-sm mt-1" id="lastName-error" />
          </div>
        </div>

        <div className="relative [&:*]:disabled:opacity-50">
          <Phone className="text-zinc-400 absolute top-3 left-3 h-5 w-5 pointer-events-none" />
          <input
            name="phone"
            disabled={state.submitting}
            type="tel"
            placeholder="Phone No"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="w-full h-12 pl-10 pr-4 border border-zinc-700 bg-zinc-900/50 text-zinc-100 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
            aria-describedby="phone-error"
            required
          />
          <ValidationError field="phone" prefix="Phone" errors={state.errors} className="text-red-400 text-sm mt-1" id="phone-error" />
        </div>

        <div className="relative [&:*]:disabled:opacity-50">
          <Mail className="text-zinc-400 absolute top-3 left-3 h-5 w-5 pointer-events-none" />
          <input
            name="email"
            disabled={state.submitting}
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full h-12 pl-10 pr-4 border border-zinc-700 bg-zinc-900/50 text-zinc-100 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
            aria-describedby="email-error"
            required
          />
          <ValidationError field="email" prefix="Email" errors={state.errors} className="text-red-400 text-sm mt-1" id="email-error" />
        </div>

        <div className="relative [&:*]:disabled:opacity-50">
          <textarea
            name="message"
            disabled={state.submitting}
            placeholder="Your message"
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            className="w-full min-h-32 p-4 border border-zinc-700 bg-zinc-900/50 text-zinc-100 rounded-md focus:outline-none focus:border-blue-500 transition-colors resize-none"
            aria-describedby="message-error"
            required
          />
          <ValidationError field="message" prefix="Message" errors={state.errors} className="text-red-400 text-sm mt-1" id="message-error" />
        </div>
        
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Send Your Message
        </button>
      </form>
    </div>
  );
};

export default Contact;