import Image from "next/image";
import loadingGif from "@/public/images/loading.gif";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function loading() {
  return (
    <div className="flex flex-col min-h-[100vh] justify-between">
      <div>
        <div className="flex flex-col justify-center items-center py-7">
          <Image src={loadingGif} alt="Loading" />
          <p className="text-center p-3">Loading</p>
        </div>
      </div>
    </div>
  );
}
