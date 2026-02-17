"use client";

import { Button } from "@/components/ui/button";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";
import { FloatingLabelTextarea } from "@/components/ui/floating-label-textarea";
import { useState } from "react";

interface FormData {
  fullname: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  fullname?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullname.trim()) {
      newErrors.fullname = "Full name is required";
    } else if (formData.fullname.trim().length < 2) {
      newErrors.fullname = "Full name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      console.log("Form submitted:", formData);
      setTimeout(() => {
        setFormData({
          fullname: "",
          email: "",
          phone: "",
          message: "",
        });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="bg-[#1b2232] min-h-screen">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white text-center pb-6">
          Contact Us
        </h1>
        <p className="text-gray-300 text-center mb-8">
          Have a question or want to work with us? Send us a message and we&apos;ll get back to you as soon as possible.
        </p>

        {isSubmitted ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-8 rounded-lg text-center">
            <p className="text-lg font-semibold">Thank you for your message!</p>
            <p className="mt-2">We will get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-[#f5f5f5] rounded-lg p-8 shadow-lg">
            <FloatingLabelInput
              id="fullname"
              name="fullname"
              type="text"
              value={formData.fullname}
              onChange={handleChange}
              placeholder="Full Name"
              error={errors.fullname}
            />
            <FloatingLabelInput
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              error={errors.email}
            />
            <FloatingLabelInput
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number "
              error={errors.phone}
            />
            <FloatingLabelTextarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message "
              error={errors.message}
            />
            <Button
              type="submit"
              className="w-full h-[45px] bg-[#e80500] hover:bg-[#c00400] text-white font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Send Message
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
