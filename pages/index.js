import HotelCard from "@/components/HotelCard";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>BookMyRoom | Get best hotels here</title>
      </Head>
      <Navbar />

      <HotelCard />
    </div>
  );
}
