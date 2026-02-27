"use client";

import { Button } from "@/components/ui/button";
import { FloatingLabelInput } from "@/components/floating-label-input";
import { FloatingLabelTextarea } from "@/components/floating-label-textarea";
import { useForm } from '@formspree/react';
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

  const [state, formspreeSubmit] = useForm("xkoveogz");
  const [formData, setFormData] = useState<FormData>({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

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

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      await formspreeSubmit(e);
    }
  };

  return (
    <div className="bg-[#1b2232] min-h-screen">
      <div className="max-w-2xl mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl font-bold text-white text-center pb-6">
          Contact Us
        </h1>
        <p className="text-gray-300 text-center mb-8">
          Have a question or want to work with us? Send us a message and we&apos;ll get back to you as soon as possible.
        </p>

        {state.succeeded ? (
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
              disabled={state.submitting}
              className="w-full h-11.25 bg-[#e80500] hover:bg-[#c00400] text-white font-semibold py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2"
            >
              {state.submitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
