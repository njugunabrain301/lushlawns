import Link from "next/link";

export default function Banner() {
  return (
    <div className="flex justify-between my-20 flex-wrap">
      <h1 className="w-full sm:w-[48%] text-4xl font-black">
        Nakuru's Greenest Lawns, Your Pride and Joy
      </h1>
      <div className="w-full sm:w-[48%]">
        <p className="my-5 sm:my-0">
          Welcome to our lawn care company, where beauty meets precision. We
          specialize in creating and maintaining premium lawns that not only
          look stunning but also thrive with exceptional health and vigor.
        </p>
        <div className="py-4">
          <Link href="/getStarted">
            <button className="p-4 bg-black border border-black text-white mr-4">
              Get In Touch
            </button>
          </Link>
          <Link href={"/contact"}>
            <button className="p-4 border-black border">Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
