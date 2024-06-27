import Banner from "@/components/Banner";
import Image from "next/image";
import img1 from "@/public/images/bermuda.jpg";
import img2 from "@/public/images/paspalum.jpg";
import img3 from "@/public/images/lawn growing.jpg";
import img6 from "@/public/images/hedge.jpg";
import img7 from "@/public/images/kikuyu.jpg";
import {
  ChevronRight,
  Email,
  LocationOn,
  MailOutline,
  Phone,
  Star,
} from "@mui/icons-material";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <Banner />
      <Image
        className="w-full aspect-video object-cover"
        alt="Lush Lawns Bermuda Grass"
        src={img1}
        placeholder="blur"
      />
      <div className="flex items-center justify-between my-20 flex-wrap">
        <div className="w-full sm:w-[48%]">
          <span className="text-xs">Value for Money</span>
          <h1 className="text-4xl font-black my-3">
            Premium Lawn Care Services at Competitive Prices
          </h1>
          <p className="mb-3">
            Our lawn care company offers top-quality lawn maintenance services
            at competitive prices. We believe that beautiful, well-maintained
            lawns should be accessible to homeowners of all sizes.
          </p>
          <Link href={"/services"}>
            <button className="p-4 border border-black">Learn More</button>
          </Link>
        </div>
        <div className="w-full sm:w-[48%] my-5 sm:my-0">
          <Image
            alt="Lush Lawns Paspalum Grass"
            src={img2}
            className="aspect-video sm:aspect-square object-cover"
            placeholder="blur"
          />
        </div>
      </div>

      <div className="my-20">
        <h2 className="text-4xl font-black text-center sm:w-[60%] mx-auto my-20">
          Premium Lawn Care Services at Competitive Prices
        </h2>
        <div className="flex justify-evenly flex-wrap">
          <div className="w-[30%] min-w-[300px] m-5">
            <Image
              alt="Lush Lawns Grass Cutting"
              src={img7}
              placeholder="blur"
              className="object-cover aspect-video"
            />
            <div className="text-center">
              <h3 className="text-xl font-extrabold my-3">
                Monthly Grass-Cutting Services
              </h3>
              <p className="mb-3">
                We mow your lawns using professional grass-cutting machines.
                Whether it's once a month, twice a month or thrice a month; we
                can adapt to your needs
              </p>
              <Link href={"/services#grass-cutting"}>
                <p>
                  See Prices <ChevronRight />
                </p>
              </Link>
            </div>
          </div>

          <div className="w-[30%] min-w-[300px] m-5">
            <Image
              alt="Lush Lawns Hedge Trimming"
              src={img6}
              placeholder="blur"
              className="aspect-video object-cover"
            />
            <div className="text-center">
              <h3 className="text-xl font-extrabold my-3">
                Hedge Trimming Services
              </h3>
              <p className="mb-3">
                We shape your hedges to properly reflect your tastes. Clean and
                professional worksmanship
              </p>
              <Link href={"/services/#hedge-trimming"}>
                <p>
                  See Prices <ChevronRight />
                </p>
              </Link>
            </div>
          </div>

          <div className="w-[30%] min-w-[300px] m-5">
            <Image
              alt="Lush Lawns Lanw Growing"
              src={img3}
              placeholder="blur"
              className="object-cover aspect-video"
            />
            <div className="text-center">
              <h3 className="text-xl font-extrabold my-3">
                Lawn Growing/Installation & Sprinkler System
              </h3>
              <p className="mb-3">
                We install lush and easy to maintain lawns in your homes. We
                also advice on the right seeds to use to grow and install
                sprinkler systems to keep your lawn fresh
              </p>
              <Link href={"/services/#lawn-growth"}>
                <p>
                  See Prices <ChevronRight />
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="my-20">
        {/* <div className="flex justify-between items-center flex-wrap">
          <Image
            src={avatar}
            alt="Testimonial"
            className="w-full sm:w-[48%] sm:aspect-square md:aspect-auto object-cover"
            placeholder="blur"
          />
          <div className="w-full sm:w-[48%]">
            <span className="flex">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </span>
            <p className="my-4">
              <b>
                I really like my company's website (Chresished Treasure) that
                has been done by Go-Duka. It has helped me to have all the
                merchandise that I brand and framing works that I do in a single
                place where they are well laid out through a unique theme for my
                clients to look it.
                <br /> The website helps me do analysis of who visited the
                website. It allows the clients to create an account making it
                easy for me to reach out to them. The person assisted is always
                available when needed and tend to guide me on how best to
                improve and increase my sales. <br />
                I'm glad to be part of Go-Duka
              </b>
            </p>
            <div className="flex justify-start text-xs">
              <div className="w-fit border-r border-black pr-2 mr-2">
                <p>
                  <b>Charles</b>
                </p>
                <p>Owner, Cherished Treasure</p>
              </div>
              <div className="">Go-Duka</div>
            </div>
          </div>
        </div> */}
      </div>

      <div className="flex justify-between my-20 flex-wrap">
        <h1 className="w-full sm:w-[48%] text-4xl font-extrabold">
          Experience the Power of Professional Lawn Services
        </h1>
        <div className="w-full sm:w-[48%]">
          <p className="mt-5 sm:mt-0">
            Our lawn care company has a proven track record of delivering
            exceptional lawn maintenance that transforms landscapes. With our
            expertise and attention to detail, we create and maintain visually
            stunning, healthy lawns that leave a lasting impression.
          </p>
          <div className="my-10 flex justify-between">
            <div>
              <p className="text-5xl font-black">50%</p>
              <p>Enhanced Curb Appeal and Property Value</p>
            </div>
            <div>
              <p className="text-5xl font-black">50%</p>
              <p>Improved Outdoor Living Space</p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-20">
        <span className="text-xs">Creative</span>
        <div className="border mt-20 border-black mx-auto p-2">
          <h1 className="text-4xl font-extrabold my-10 sm:w-[60%] text-center mx-auto">
            Transforming your dream home into reality
          </h1>
          <p className="text-center">
            where you can relax and raise your family
          </p>
          <div className="text-center my-7">
            <Link href={"/contact"}>
              <button className="p-4 bg-black text-white border border-black mr-5">
                Contact
              </button>
            </Link>
            <Link href={"/services"}>
              <button className="p-4 border border-black">Learn More</button>
            </Link>
          </div>
        </div>
      </div>

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
              <p>Barnabas, Pipeline, Nakuru</p>
            </div>
          </div>
          <div className="w-full xs:w-[63%]">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
