import ContactForm from "@/components/ContactForm";
import { LocationOn, MailOutline, Phone } from "@mui/icons-material";
import React from "react";

export default function page() {
  return (
    <div className="my-20">
      <span className="text-xs">Premium</span>
      <h1 className="text-4xl font-extrabold">Contact Details</h1>
      <p>For direct communication, please reach out to us</p>
      <div className="flex justify-between my-10 flex-wrap">
        <div className="w-full xs:w-[35%]">
          <div className="my-3">
            <p>
              <MailOutline />
            </p>
            <p>
              <b>Email</b>
            </p>
            <p>Send us an email</p>
            <p>lushlawns@go-duka.com</p>
          </div>
          <div className="my-3">
            <p>
              <Phone />
            </p>
            <p>
              <b>Phone</b>
            </p>
            <p>Call us for assistance</p>
            <p>+254 717 563 148</p>
          </div>
          <div className="my-3">
            <p>
              <LocationOn />
            </p>
            <p>
              <b>Office</b>
            </p>
            <p>Visit our offices</p>
            <p>Brnabas, Pipeline, Nakuru</p>
          </div>
        </div>
        <div className="w-full xs:w-[63%]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
