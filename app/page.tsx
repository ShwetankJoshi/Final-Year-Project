import HeroCarousel from "@/components/HeroCarousel";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import React from "react";

const home = () => {
  return (
    <div>
      <section className="px-6 border-2 md:px-20 py-24 border-red-500">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className=" small-text">
              Smart Shopping Starts Here
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </p>
            <h1 className="head-text">
              Experience the magic of
              <span className="text-primary"> DealSeeker</span>
            </h1>
            <p className="mt-6">
              {" "}
              Your ultimate companion for finding unbeatable deals and saving
              big on every purchase. Explore a world of discounts, coupons, and
              exclusive offers, all in one place, and watch your savings grow.
            </p>
            <SearchBar/>
          </div>

          <HeroCarousel/>

        </div>
      </section>

      <section className="trending-section">
        <h2 className="section-text">Trending</h2>
        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {['Apple iphone 15', 'Book'].map ((product) => (<div>{product}</div>))}
        </div>
      </section>

    </div>
  );
};

export default home;
