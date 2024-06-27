"use client";

import { useState } from "react";
import axios from "@/utils/axios.config";

export default function GetStartedForm() {
  const [error, setError] = useState();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const sendMessage = async () => {
    setError("");
    if (submitting) return;
    if (!name || name === "") {
      setError("* Please provide a name");
      return;
    }
    if (!contact || contact === "") {
      setError("* Please provide an email or phone number");
      return;
    }
    let emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    let pattern = /^\+\d{12}$/;
    let pattern2 = /^[0-9]{10}$/;

    if (
      !emailRegex.test(contact) &&
      !pattern.test(contact) &&
      !pattern2.test(contact)
    ) {
      setError("* Please provide a valid email or phone number");
      return;
    }

    if (!message || message === "") {
      setError("* Please provide a message");
      return;
    }
    setSubmitting(true);
    let res = await axios.post("/contact", {
      message:
        "Name: " + name + "\nContact: " + contact + "\nMessage: " + message,
      name: "Bunika Main Website",
      phone: "0717563148",
      email: "bjmbugua7@gmail.com",
    });
    if (res.data.success) {
      setSent(true);
    } else {
      setError(
        "* Unable to send inquiry. Kindly refresh the page and try again"
      );
    }
    setSubmitting(false);
  };
  return (
    <div>
      <div>
        <h2 className="text-2xl font-extrabold mb-3">
          Let's Start With a Quick Overview
        </h2>
        <p className="mb-2">Name/Organization</p>
        <input
          className="border border-black p-2 w-full mb-3"
          placeholder="Name/Organization"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p className="mb-2">Contact</p>
        <input
          placeholder="Email/Phone"
          className="border border-black p-2 w-full mb-3"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <p className="mb-2">Tell us More About your Organization</p>
        <textarea
          className="border border-black p-2 w-full mb-3"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <br />
        {error && <p>{error}</p>}
        {sent ? (
          <p>We have received your request. We'll get back to you ASAP</p>
        ) : (
          <button className="border p-4 border-black" onClick={sendMessage}>
            {submitting ? "Submitting..." : "Submit"}
          </button>
        )}
      </div>
    </div>
  );
}
