import { useState } from "react";
import { User, Phone, Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="relative">
            <User className="text-zinc-400 absolute top-3 left-3 h-5 w-5 pointer-events-none" />
            <input
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              className="w-full h-12 pl-10 pr-4 border border-zinc-700 bg-zinc-900/50 text-zinc-100 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
              required
            />
          </div>
          <div className="relative">
            <User className="text-zinc-400 absolute top-3 left-3 h-5 w-5 pointer-events-none" />
            <input
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              className="w-full h-12 pl-10 pr-4 border border-zinc-700 bg-zinc-900/50 text-zinc-100 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
              required
            />
          </div>
        </div>

        <div className="relative">
          <Phone className="text-zinc-400 absolute top-3 left-3 h-5 w-5 pointer-events-none" />
          <input
            type="tel"
            placeholder="Phone No"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="w-full h-12 pl-10 pr-4 border border-zinc-700 bg-zinc-900/50 text-zinc-100 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
            required
          />
        </div>

        <div className="relative">
          <Mail className="text-zinc-400 absolute top-3 left-3 h-5 w-5 pointer-events-none" />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full h-12 pl-10 pr-4 border border-zinc-700 bg-zinc-900/50 text-zinc-100 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
            required
          />
        </div>

        <div>
          <textarea
            placeholder="Your message"
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            className="w-full min-h-32 p-4 border border-zinc-700 bg-zinc-900/50 text-zinc-100 rounded-md focus:outline-none focus:border-blue-500 transition-colors resize-none"
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
        >
          Send Your Message
        </button>
      </form>
    </div>
  );
};

export default Contact;