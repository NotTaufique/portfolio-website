"use server";

import { error } from "console";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (value: unknown, maxLenght: number) => {
  if (!value || typeof value !== "string" || value.length > maxLenght) {
    return false;
  }

  return true;
};

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const sender = formData.get("senderEmail");

  if (!validateString(sender, 500)) {
    return {
      error: "Invalid Message",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid Message",
    };
  }

  if (error instanceof Error) {
    return {
      error: error.message,
    };
  }

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "theagencycube@gmail.com",
      subject: "Contact Form Submission",
      reply_to: sender as string,
      text: message as string,
    });
   
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    } else if (error && typeof error === "object" && "message" in error) {
      return {
        error: error.message,
      };
    }
  }
};
