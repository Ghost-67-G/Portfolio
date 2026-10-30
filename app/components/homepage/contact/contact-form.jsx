"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { isValidEmail } from "@/utils/check-email";

const empty = { name: "", email: "", message: "" };

function validate(input) {
  const errors = {};
  if (!input.name.trim()) errors.name = "Please add your name.";
  if (!isValidEmail(input.email)) errors.email = "Please add a valid email address.";
  if (!input.message.trim()) errors.message = "Please add a short message.";
  return errors;
}

async function verifyCaptcha(token) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL ?? ""}/api/google`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  });
  const data = await res.json().catch(() => ({}));
  return Boolean(data.success);
}

// `captcha` is decided on the server, so the secret key never reaches the browser.
function ContactForm({ captcha, email }) {
  const [input, setInput] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [token, setToken] = useState(null);
  const recaptchaRef = useRef(null);

  const update = (field) => (e) => {
    setInput({ ...input, [field]: e.target.value });
    if (errors[field]) setErrors({ ...errors, [field]: undefined });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate(input);
    setErrors(found);
    if (Object.keys(found).length) return;

    if (captcha && !token) {
      setStatus("captcha");
      return;
    }

    setStatus("sending");
    try {
      if (captcha) {
        const ok = await verifyCaptcha(token);
        recaptchaRef.current?.reset();
        setToken(null);
        if (!ok) {
          setStatus("captcha");
          return;
        }
      }

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        input,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY }
      );
      setInput(empty);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const fieldProps = (field) => ({
    id: `contact-${field}`,
    name: field,
    value: input[field],
    onChange: update(field),
    "aria-invalid": errors[field] ? "true" : undefined,
    "aria-describedby": errors[field] ? `contact-${field}-error` : undefined,
    className: "field",
  });

  const fieldError = (field) =>
    errors[field] && (
      <p id={`contact-${field}-error`} className="mt-1.5 text-[13px] text-red-700 dark:text-red-400">
        {errors[field]}
      </p>
    );

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium">
          Name
        </label>
        <input type="text" autoComplete="name" maxLength={100} {...fieldProps("name")} />
        {fieldError("name")}
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium">
          Email
        </label>
        <input type="email" autoComplete="email" maxLength={100} {...fieldProps("email")} />
        {fieldError("email")}
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium">
          What are you building?
        </label>
        <textarea rows={5} maxLength={1000} {...fieldProps("message")} />
        {fieldError("message")}
      </div>

      {captcha && (
        <div className="sm:col-span-2">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={(value) => {
              setToken(value);
              if (status === "captcha") setStatus("idle");
            }}
          />
        </div>
      )}

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:col-span-2">
        <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        <p aria-live="polite" className="text-sm text-ink-2">
          {status === "sent" && "Thanks, your message is on its way. I'll reply by email."}
          {status === "captcha" && "Please complete the captcha first."}
          {status === "error" && (
            <>
              Something went wrong sending that. Please email me at{" "}
              <a href={`mailto:${email}`} className="link">
                {email}
              </a>
              .
            </>
          )}
        </p>
      </div>
    </form>
  );
}

export default ContactForm;
