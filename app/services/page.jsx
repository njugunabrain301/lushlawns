import Image from "next/image";
import img1 from "@/public/images/kikuyu.jpg";
import img2 from "@/public/images/hedge.jpg";
import img3 from "@/public/images/lawn growing.jpg";
import img4 from "@/public/images/sprinkler.jpg";
import { ChevronRight } from "@mui/icons-material";
import Link from "next/link";

export default function page() {
  return (
    <div className="my-20">
      <div className="">
        <span className="text-xs">Premium</span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold">
          Services
        </h1>
        <p className="mt-10 mb-20">
          <span className="hidden md:inline">
            Our dedicated team transforms your dream home into a stunning
            reality, ensuring your home is somewhere you can be proud of.
          </span>{" "}
          Explore our services designed to elevate your compound and give you
          that homely feeling.
        </p>
      </div>
      <div className="my-20">
        <div
          className="flex flex-wrap my-20 justify-between items-center"
          id="grass-cutting"
        >
          <Image
            src={img1}
            alt="Lush Lawns Kikuyu Grass"
            className="w-full aspect-video md:aspect-[10/15] lg:aspect-[4/3] md:w-[40%] object-cover"
          />
          <div className="w-full md:w-[58%]">
            <h2 className="text-3xl font-extrabold my-10">
              Grass Cutting & Maintenance
            </h2>
            <p className="my-4">
              This service includes cutting your grass and watering your lawn in
              dry season. Depending on whether it is the dry season or the wet
              season, we check on your lawn and decide the best course of
              action.
            </p>
            <p className="my-4">
              At Ksh. 1800 a month we cut and maintain your lawn twice a month.
              This includes removing growths from areas where you want to
              maintain a clear surface.
              <br /> At Ksh. 1000 a month we cut and maintain your lawn once a
              month. This includes removing growths from areas where you want to
              maintain a clear surface.
            </p>
            <p className="my-4">
              Both of these packages include sweeping & collecting of the grass.
              Leaving your compound clean and fresh.
            </p>
            <Link href={"tel:+254717563148"}>
              <button className="my-4 border border-black p-4">
                Get in Touch <ChevronRight />
              </button>
            </Link>
          </div>
        </div>
        <div
          className="flex flex-wrap flex-row-reverse my-20 justify-between items-center"
          id="hedge-trimming"
        >
          <Image
            src={img2}
            alt="Lush Lawns Hedge Trimming"
            className="w-full aspect-video md:aspect-[10/15] lg:aspect-[4/3] md:w-[40%] object-cover"
            placeholder="blur"
          />
          <div className="w-full md:w-[58%]">
            <h2 className="text-3xl font-extrabold my-10">Hedge Trimming</h2>
            <p className="my-4">
              If you have a hedge or a fence that needs trimming we provide
              those services. <br />
              At Ksh. 2500 a month we trim your hedges twice a month.
              Maintaining the desired shape throughout.
              <br />
              This goes for common shapes such as square, oval, rectangular and
              circle. For more complex shapes the price is negotiated depending
              on the complexity of the task.
            </p>
            <p className="my-4">
              This package includes, watering, removing insects, spiders and
              weeds that may be growing beneath and around your hedge or fence.
              This gives you a full service leaving your compound looking as
              beautiful as ever.
            </p>
            <Link href={"tel:+254717563148"}>
              <button className="my-4 border border-black p-4">
                Call Now <ChevronRight />
              </button>
            </Link>
          </div>
        </div>
        <div
          className="flex flex-wrap my-20 justify-between items-center"
          id="lawn-growth"
        >
          <Image
            src={img3}
            alt="Lush Lawns Lawn Installation"
            className="w-full aspect-video md:aspect-[10/15] lg:aspect-[4/3] md:w-[40%] object-cover"
            placeholder="blur"
          />
          <div className="w-full md:w-[58%]">
            <h2 className="text-3xl font-extrabold my-10">
              Lawn Installation & Growth
            </h2>
            <p className="my-4">
              To grow your lawn naturally from the ground up, we advice on which
              seeds to buy, how to prepare the soil etc. We also take care of
              the daily watering, weeding and reseeding to make sure the lawn
              completely covers the ground without any patches.
              <br />
              Preparing the land is Ksh. 4500 for every 25 meters squared. This
              involves clearing the land, ploughing, levelling the land and
              planting the seeds
              <br />
              Watering and daily Maintenance is done twice a day at Ksh. 1000 a
              day. You can opt to do this for yourself under our guidance in
              which case we only check up on you once a week at Ksh. 1000 to do
              any extra reseeding and maintenance for each visit.
              <br />
              The process of growing a lawn usually takes 2 to 3 months
              depending on the weather conditions and level of care. The price
              of the seeds is excluded here but it usually costs Ksh. 2500 -
              3000 for a packet that can fit an area of 16m2
            </p>
            <p className="my-4">
              You can also opt to install the ready made lawn. The grass is
              usually grown elsewehere until maturity and the mature grass
              carpet is then transplanted onto your lawn.
              <br />
              The cost for purchase (transport included) is Ksh. 1500 per 25m2
              for Kikuyu Grass
              <br />
              The cost for purchase (transport included) is Ksh. 1900 per 25m2
              for TifSport Grass
            </p>
            <p className="my-4">
              Wereceommend Kikuyu grass and TifSport grass since they are both
              durable, recover quickly and require little maintenance.
            </p>
            <Link href={"tel:+254717563148"}>
              <button className="my-4 border border-black p-4">
                Call Now <ChevronRight />
              </button>
            </Link>
          </div>
        </div>
        <div
          className="flex flex-wrap flex-row-reverse my-20 justify-between items-center"
          id="sprinkler"
        >
          <Image
            src={img4}
            alt="Lush Lawns Sprinkler Installation"
            className="w-full aspect-video md:aspect-[10/15] lg:aspect-[4/3] md:w-[40%] object-cover"
            placeholder="blur"
          />
          <div className="w-full md:w-[58%]">
            <h2 className="text-3xl font-extrabold my-10">
              Sprinkler System Installation
            </h2>
            <p className="my-4">
              If you want hustle free watering of your lawn we can install
              sprinklers systems that make this possible.
            </p>
            <p className="my-4">
              The costing will depend on the sprinkler cost, pipes and any other
              parts bought to fully cover your lawn. All external purchases will
              be billed directly to you and receipts will provided.
            </p>
            <p className="my-4">
              Labor costs start from Ksh. 2000 and can go higher if the area of
              land covered is larger than a 50 by 100 plot of land.
            </p>
            <Link href={"tel:+254717563148"}>
              <button className="my-4 border border-black p-4">
                Get in Touch <ChevronRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
