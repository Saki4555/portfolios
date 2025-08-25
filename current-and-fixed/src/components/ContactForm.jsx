"use client";
import React, { useState } from "react";

import { cn } from "@/lib/utils";

import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/Textarea";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import {motion} from 'motion/react'

const toastOptions = {
  success: {
    style: {
      background: "#1a1a2e", // Dark background matching site theme
      color: "#ffffff",
      padding: "16px",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
      border: "1px solid #5d4dff", // Purple accent from your UI
    },
    iconTheme: {
      primary: "#5d4dff", // Purple brand color
      secondary: "#1a1a2e",
    },
    duration: 4000,
  },
  error: {
    style: {
      background: "#1a1a2e", // Dark background matching site theme
      color: "#ffffff",
      padding: "16px",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
      border: "1px solid #ff4d4d", // Red for errors
    },
    iconTheme: {
      primary: "#ff4d4d", // Red for errors
      secondary: "#1a1a2e",
    },
    duration: 3000,
  },
};

export function ContactForm() {
  const [formData, setState] = useState({
    name: "",
    email: "",

    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setLoading(true);
    emailjs
      .sendForm(
        `${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}`,
        e.target,
        {
          publicKey: `${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}`,
        }
      )
      .then(() => {
        toast.success(
          "Your message has been sent successfully!",
          toastOptions.success
        );
        setLoading(false);
        setState({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error(
          "Oops! Something went wrong while sending your message. Please try again.",
          toastOptions.error
        );
        setLoading(false);
      });
  };
  return (
    <div className="bg-gradient-to-br py-20  from-purple-950/20 via-sky-950/30 to-gray-900/50">
      <div
        id="contact"
        className=" mx-auto w-full max-w-md md:max-w-lg   px-3 sm:px-0"
      >
        <h2 className="text-3xl text-center  md:text-4xl mb-10 tracking-wider text-slate-300 font-bold ">
          Get In Touch
        </h2>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" },
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="my-8 shadow-input p-4 md:p-8 rounded-lg"
          onSubmit={handleSubmit}
        >
          <LabelInputContainer>
            <Label htmlFor="Name">Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={handleChange}
              required={true}
              name="name"
              placeholder="Your name"
              type="text"
            />
          </LabelInputContainer>

          <LabelInputContainer className="my-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              type="email"
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-8">
            <Label htmlFor="message">Message</Label>

            <Textarea
              id="message"
              name="message"
              value={formData.message}
              required={true}
              onChange={handleChange}
              placeholder="Write your message..."
              rows={5}
            />
          </LabelInputContainer>

          <button
            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br   font-medium text-white  bg-zinc-800 from-zinc-900 to-zinc-900 shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
            type="submit"
          >
            {loading ? "Processing..." : "Send Message"}
            <BottomGradient />
          </button>
        </motion.form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
