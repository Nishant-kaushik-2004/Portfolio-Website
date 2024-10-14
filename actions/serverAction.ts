"use server"; // This is needed to specify that this function is a server action
import React from "react";
import EmailTemplate from "@/app/lib/email-template";
import { getErrorMessage, validateStringValue } from "@/app/lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const senderEmail = formData.get("senderEmail");
  const senderMessage = formData.get("senderMessage");

  if (!validateStringValue(senderEmail, 50)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateStringValue(senderMessage, 500)) {
    return {
      error: "Invalid message from sender",
    };
  }
  let mailResponse;
  try {
    mailResponse = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "pinkukaushik20042004@gmail.com",
      subject: "Message from contact form",
      replyTo: senderEmail as string,
      // text: senderMessage as string, // to satisfy typescript we have added as string because its not picking our above validation for null value.
      react: React.createElement(EmailTemplate, {
        //This is same as below but the below one can be done only on jsx or tsx but we do not wanted to change the type of this file to tsx just fot that little tsx element.
        message: senderMessage as string,
        senderEmail: senderEmail as string,
      }),
      // react: (
      //   <EmailTemplate message={senderMessage} senderEmail={senderEmail} />
      // ),
    });
  } catch (error) {
    console.log("Error caught in catch block:", error); // Ensure this logs the raw error
    return {
      error: getErrorMessage(error),
    };
  }
  return mailResponse; // This is required here as the actual error or email failure reason is not captured by catch block, Resend is giving silent error i.e, inside response (here mailResponse).
}
