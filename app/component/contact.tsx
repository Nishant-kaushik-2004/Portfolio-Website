"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";
import { sendEmail } from "@/actions/serverAction";
import SubmitBtn from "../lib/submit-btn";
import toast from "react-hot-toast";

// type emailResponseType = {
//   error?: string | Object;
//   data?: object;
// };

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      id="contact"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40  max-w-[600px]"
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="-mt-5 mb-3 text-center dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:pinkukaushik20042004@gmail.com">
          pinkukaushik20042004@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
      className="mt-5 flex flex-col dark:text-black "
        action={async (formData) => {
          const { error } = await sendEmail(formData);
          if (error) {
            toast.error((error as Error)?.message);
            return;
          }
          toast.success("Email sent successfully!");
        }}
      >
        <input
          type="email"
          className="w-full my-3 rounded-lg borderBlack px-4 h-14 dark:bg-white
          dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your email"
          name="senderEmail"
          required
          maxLength={50}
        />
        <textarea
          placeholder="Your message"
          className="w-full p-4 h-52 my-3 rounded-lg borderBlack dark:bg-white
          dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          required
          name="senderMessage"
          maxLength={500}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
