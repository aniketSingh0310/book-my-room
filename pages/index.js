import HotelCard from "@/components/HotelCard";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/form";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* <ContactForm /> */}
      <HotelCard />
    </div>
  );
}
