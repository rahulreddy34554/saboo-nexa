// import React from 'react'
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import ImageViewer from "../../components/IGNIS/ImageViewer";
// import OnRoadPrice from "../../components/utils/OnRoadPrice";
// import Features from "../../components/IGNIS/Features";
import {
  MdAirlineSeatReclineExtra,
  MdOutlineFileDownload,
} from "react-icons/md";
import Helmet from "react-helmet";
import Header from "../../components/Header/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { CarComp } from "./Invicto";
import { CarEnq2 } from "../../components/Invicto/CarEnq2";
import { products } from "../../constants";

import View360 from "../../components/utils/View360";
import { Tb360View, TbView360 } from "react-icons/tb";
import { GiBeltBuckles, GiReturnArrow, GiSpeedometer } from "react-icons/gi";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

function Ignis() {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  // Define the video source URL based on the browser
  const videoSource = isSafari
    ? "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/Nexa+Website+Safari/header_video/Ignis_safari.mov"
    : "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/ignis/ignis_banner.webm";

  useEffect(() => {
    // AOS.init();
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Maruti Suzuki Ignis 2025 Discounts and festive Offer - Exclusive
          Savings on the Compact Urban SUV at RKS Motor
        </title>
        <meta
          name="title"
          content="Maruti Suzuki Ignis 2025 Discounts and festive Offers - Exclusive Savings on the Compact Urban SUV at RKS Motor"
        />
        <meta
          name="description"
          content="Don't miss out on the Maruti Suzuki Ignis 2025 Discounts and festive Offers! Enjoy special savings on this compact, sporty urban SUV, packed with advanced features and robust performance. Visit your nearest Nexa showroom to avail these limited-time deals."
        />
        <meta
          name="keywords"
          content="Maruti Suzuki Ignis offers, Nexa Ignis 2025 Discounts and festive Offers, Ignis discount, compact SUV offer, Nexa Ignis savings ,2025 Discounts and festive Offers."
        />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.saboonexa.in/maruti-ignis/"
        />
        <meta
          property="og:title"
          content="  Maruti Suzuki Ignis 2025 Discounts and festive Offers - Exclusive Savings on the Compact Urban SUV at RKS Motor"
        />
        <meta
          property="og:description"
          content="  Don't miss out on the Maruti Suzuki Ignis 2025 Discounts and festive Offers! Enjoy special savings on this compact, sporty urban SUV, packed with advanced features and robust performance. Visit your nearest Nexa showroom to avail these limited-time deals. "
        />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.saboonexa.in/maruti-ignis/"
        />
        <meta
          property="twitter:title"
          content="  Maruti Suzuki Ignis 2025 Discounts and festive Offers - Exclusive Savings on the Compact Urban SUV at RKS Motor"
        />
        <meta
          property="twitter:description"
          content="  Don't miss out on the Maruti Suzuki Ignis 2025 Discounts and festive Offers! Enjoy special savings on this compact, sporty urban SUV, packed with advanced features and robust performance. Visit your nearest Nexa showroom to avail these limited-time deals."
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
      </Helmet>
      <Header />
      <div className="relative bg-black">
        <div className="top-0 left-0 w-full h-screen ">
          <video
            className="object-cover w-full h-full "
            preload="metadata"
            loop
            autoPlay
            playsInline
            muted
            poster={require("../../assets/cars/Maruti_Ignis_Price_in_Hyderabad.jpg")}
            // poster="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/360/5.jpg"
          >
            <source
              src={videoSource}
              type={isSafari ? "video/quicktime" : "video/mp4"}
            />
          </video>
          <div className="absolute bottom-40 lg:bottom-24 left-[3%] lg:left-[5%] text-white ">
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="500"
              className="text-2xl lg:text-4xl"
            >
              THE
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="500"
              className="pb-1 font-serif text-5xl uppercase lg:text-8xl"
            >
              IGNIS
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-duration="1000"
              className="mb-2 text-2xl uppercase lg:text-5xl lg:mb-4"
            >
              CREATED TO INSPIRE THE TOUGHNESS IN YOU
            </div>
            <a
              href="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Brochure/Maruti-Suzuki-Ignis-Broucher.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <button
                data-aos="fade-right"
                data-aos-delay="800"
                data-aos-duration="1000"
                className="px-4 py-2 uppercase border hover:text-white hover:bg-black hover:border-black lg:px-8"
                aria-label="Download Brochure"
              >
                BROCHURE
              </button>
            </a>
          </div>
        </div>
      </div>
      <CarEnq2 title="BOOK YOUR IGNIS" carName="Ignis" />
      <Variant />
      <IgnisFeature />
      <IgnisTechnology />
      <div className="pt-2 text-white bg-black ">
        <div className="w-full pt-10 pb-8 text-3xl text-center uppercase sm:text-4xl md:text-5xl">
          COLOURS
        </div>
      </div>
      <Colors />
      {/* <Variant /> */}
      {/* <ImageViewer /> */}
      {/* <OnRoadPrice title={"Ignis"} /> */}

      {/* <Features /> */}

      <Ignis360 />
      <div className="pt-2 ">
        <div className="w-full pt-12 pb-4 text-3xl text-center uppercase sm:text-4xl md:text-5xl">
          Design
        </div>
      </div>
      <ImageOptions />
      <CarComp details={products[4]} />
      <IgnisSafety />
      <CarEnq2 title="BOOK YOUR IGNIS" carName="Ignis" />
    </>
  );
}

const Variant = () => {
  const [price, setPrice] = useState("5,84,000");
  return (
    <div className=" bg-opacity-25  bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_bg_image/5.webp')] bg-fixed  bg-black">
      <div className="container py-20 mx-auto bg-black bg-opacity-10 ">
        <div className="grid space-y-3 md:grid-cols-3 md:space-y-0">
          <div className="mx-auto space-y-3 md:mx-0">
            <label className="text-gray-300 uppercase" htmlFor="model">
              Select car Variant
            </label>
            <select
              name="model"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              aria-labelledby="Select Car Variant"
              className="block w-full max-w-[375px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none "
            >
              <option value="5,84,000">MT Sigma</option>
              <option value="6,38,000">MT Delta</option>
              <option value="6,96,000">MT Zeta</option>
              <option value="7,10,000">MT Zeta (DT)</option>
              <option value="7,61,000">MT Alpha</option>
              <option value="7,75,000">MT Alpha (DT)</option>
              <option value="6,83,000">AGS Delta </option>
              <option value="7,41,000">AGS Zeta </option>
              <option value="7,55,000">AGS Zeta (DT)</option>
              <option value="8,06,000">AGS Alpha </option>
              <option value="8,20,000">AGS Alpha (DT)</option>
            </select>
          </div>
          <div className="text-center text-gray-200">
            <p className="text-2xl font-bold">₹ {price}*</p>
            <p className="text-xl tracking-wide">Ex-Showroom Price</p>
            <p className="text-xl tracking-wide">HYDERABAD</p>
          </div>
          <div className="text-center">
            <p className="mb-6 text-center text-gray-100">
              You might have pre-approved loan offers
            </p>
            <Link
              to="/maruti-car-finance"
              className="px-4 py-2 tracking-wide uppercase bg-white rounded shadow"
            >
              Check for loan offers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Colors = () => {
  const [selectedCar, setSelectedCar] = useState(0);
  const data = [
    {
      img: "https://az-ci-cdn-prd-nexa-01.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/car-tile/brandpage-car-nexa-blue.webp`",
      colorName: "NEXA Blue (Celestial)",
    },
    {
      img: "https://az-ci-cdn-prd-nexa-01.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/car-tile/orange.webp",
      colorName: "Lucent Orange",
    },
    {
      img: "https://az-ci-cdn-prd-nexa-01.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/car-tile/silky-silver.webp",
      colorName: "Silky Silver",
    },
    {
      img: "https://az-ci-cdn-prd-nexa-01.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/car-tile/turquosie-blue.webp",
      colorName: "Turquoise Blue",
    },
    {
      img: "https://az-ci-cdn-prd-nexa-01.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/car-tile/glistering-grey.webp",
      colorName: "Glistening Grey",
    },
    {
      img: "https://az-ci-cdn-prd-nexa-01.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/car-tile/pearl-white.webp",
      colorName: "Pearl Arctic White",
    },
    {
      img: "https://az-ci-cdn-prd-nexa-01.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/car-tile/pearl-midnight-black.webp",
      colorName: "Pearl Midnight Black",
    },
    {
      img: "https://az-ci-cdn-prd-nexa-01.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/car-tile/orange-black.webp",
      colorName: "Lucent Orange With Black Roof",
    },
    {
      img: "https://az-ci-cdn-prd-nexa-01.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/car-tile/brandpage-car-size--blue-with-silver.webp",
      colorName: "Nexa Blue With Silver Roof",
    },
    {
      img: "https://az-ci-cdn-prd-nexa-01.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/car-tile/brandpage-car-nexa-blue-with-black-roof.webp",
      colorName: "Nexa Blue With Black Roof",
    },
  ];

  return (
    <div className="bg-[url(https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/Product-Background-Banners/Saboo-RKS-Nexa-Ignis-Car-Background.webp)] bg-cover bg-no-repeat pt-6 md:pt-20 lg:pt-28 bg-center">
      <div className="container mx-auto">
        <div className="grid pb-10 md:grid-cols-2">
          <div className="py-8 mx-auto my-auto">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/Saboo-RKS-Nexa-Ignis-Title.webp"
              alt="title"
            />
            <a
              href="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Brochure/Maruti-Suzuki-Ignis-Broucher.pdf"
              className="p-3 bg-black text-gray-200 flex items-center max-w-[200px] ml-3"
              target="_blank"
              rel="noreferrer"
            >
              <MdOutlineFileDownload size={20} />
              &nbsp;Download Brochure
            </a>
          </div>
          <div>
            <img
              src={data[selectedCar].img}
              alt={data[selectedCar].colorName}
            />
            <div className="grid grid-cols-5 gap-4 lg:gap-6 md:grid-cols-10">
              <div
                onClick={() => setSelectedCar(0)}
                className={` ${
                  selectedCar === 0 &&
                  "border-2 border-white shadow-lg shadow-black "
                } rounded-full w-6 h-6 border  duration-200 cursor-pointer shadow-xl shadow-gray-400  bg-[#183f66] mx-auto`}
              ></div>
              <div
                onClick={() => setSelectedCar(1)}
                className={` ${
                  selectedCar === 1 &&
                  "border-2 border-white shadow-lg shadow-black"
                } rounded-full w-6 h-6 border  duration-200 cursor-pointer  shadow-xl shadow-gray-400 bg-[#E34C26] mx-auto`}
              ></div>
              <div
                onClick={() => setSelectedCar(2)}
                className={` ${
                  selectedCar === 2 &&
                  "border-2 border-white shadow-lg shadow-black"
                } rounded-full w-6 h-6 border  duration-200 cursor-pointer shadow-xl shadow-gray-400  bg-[#afb3b8] mx-auto`}
              ></div>
              <div
                onClick={() => setSelectedCar(3)}
                className={` ${
                  selectedCar === 3 &&
                  "border-2 border-white shadow-lg shadow-black"
                } rounded-full w-6 h-6 border  duration-200 cursor-pointer shadow-xl shadow-gray-400  bg-[#00648F] mx-auto`}
              ></div>
              <div
                onClick={() => setSelectedCar(4)}
                className={` ${
                  selectedCar === 4 &&
                  "border-2 border-white shadow-lg shadow-black"
                } rounded-full w-6 h-6 border  duration-200 cursor-pointer  shadow-xl shadow-gray-400 bg-[#545454] mx-auto`}
              ></div>
              <div
                onClick={() => setSelectedCar(5)}
                className={` ${
                  selectedCar === 5 &&
                  "border-2 border-white shadow-lg shadow-black"
                } rounded-full w-6 h-6 border  duration-200 cursor-pointer  shadow-xl shadow-gray-400 bg-[#eeeff0] mx-auto`}
              ></div>
              <div
                onClick={() => setSelectedCar(6)}
                className={` ${
                  selectedCar === 6 &&
                  "border-2 border-white shadow-lg shadow-black"
                } rounded-full w-6 h-6 border  duration-200 cursor-pointer shadow-xl shadow-gray-400  bg-[#171717] mx-auto`}
              ></div>
              <div
                onClick={() => setSelectedCar(7)}
                className={` ${
                  selectedCar === 7 &&
                  "border-2 border-white shadow-lg shadow-black"
                } rounded-full w-6 h-6 border  duration-200 cursor-pointer shadow-xl shadow-gray-400  bg-black overflow-hidden mx-auto`}
              >
                <div className="w-full h-3  bg-[#E34C26] border-b border-black "></div>
              </div>
              <div
                onClick={() => setSelectedCar(8)}
                className={` ${
                  selectedCar === 8 &&
                  "border-2 border-white shadow-lg shadow-black"
                } rounded-full w-6 h-6 border  duration-200 cursor-pointer shadow-xl shadow-gray-400  bg-[#7D7D7D] overflow-hidden mx-auto`}
              >
                {" "}
                <div className="w-full h-3  bg-[#183f66] border-b border-black "></div>
              </div>
              <div
                onClick={() => setSelectedCar(9)}
                className={` ${
                  selectedCar === 9 &&
                  "border-2 border-white shadow-lg shadow-black"
                } rounded-full w-6 h-6 border  duration-200 cursor-pointer  shadow-xl shadow-gray-400 bg-black overflow-hidden mx-auto`}
              >
                {" "}
                <div className="w-full h-3  bg-[#183f66] "></div>
              </div>
            </div>
            <div className="mt-4 text-sm font-medium text-center uppercase lg:text-xl backdrop-blur-sm md:text-base ">
              {data[selectedCar].colorName}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageOptions = () => {
  return (
    <div className="container mx-auto ">
      <div className="grid px-2 py-4 shadow-lg sm:grid-cols-2 md:p-8 ">
        <div className="overflow-hidden cursor-pointer">
          <img
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/exterior/saboo-nexa-ignis-exterior-front-grill.webp"
            alt="saboo-nexa-ignis-exterior-front-grill"
            className="w-full duration-500 hover:scale-105"
          />
        </div>
        <div className="mx-auto my-auto space-y-3 lg:px-8">
          <p className="text-3xl font-medium ">Sporty Rear</p>
          <p className="w-20 h-1 bg-black rounded-full "></p>
          <p>
            The New Ignis is equipped with a Striking Rear Spoiler and Roof
            Rails, which enhances the Sporty Look.
          </p>
        </div>
      </div>

      <div className="grid px-2 py-4 shadow-lg sm:grid-cols-2 md:p-8 ">
        <div className="mx-auto my-auto space-y-3 lg:px-8">
          <p className="text-3xl font-medium">Imposing Chrome Grille</p>
          <p className="w-20 h-1 bg-black rounded-full "></p>
          <p>
            Taking the tough look up a notch, the New Ignis is equipped with an
            Imposing Chrome Grille which leaves a lasting impression.
          </p>
        </div>
        <div className="overflow-hidden cursor-pointer">
          <img
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/exterior/saboo-nexa-ignis-exterior-back.webp"
            alt="saboo-nexa-ignis-exterior-back"
            className="w-full duration-500 hover:scale-105"
          />
        </div>
      </div>

      <div className="grid px-2 py-4 shadow-lg sm:grid-cols-2 md:p-8 ">
        <div className="overflow-hidden cursor-pointer">
          <img
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/exterior/saboo-nexa-ignis-exterior-side-shot.webp"
            alt="saboo-nexa-ignis-exterior-side-shot"
            className="w-full duration-500 hover:scale-105"
          />
        </div>
        <div className="mx-auto my-auto space-y-3 lg:px-8">
          <p className="text-3xl font-medium">High SUV-like Stance</p>
          <p className="w-20 h-1 bg-black rounded-full "></p>
          <p>
            The New Ignis has a high SUV-like Stance which makes it easier to
            get in and off, coupled with a higher seating that allows a great
            road visibility.
          </p>
        </div>
      </div>

      <div className="grid px-2 py-4 shadow-lg sm:grid-cols-2 md:p-8 ">
        <div className="mx-auto my-auto space-y-3 ">
          <p className="text-3xl font-medium">Toughened Exterior</p>
          <p className="w-20 h-1 bg-black rounded-full "></p>
          <p>
            Adding to the toughness, the New Ignis comes with stunning 15”
            All-Black Alloy Wheels, All-Around Cladding and Sturdy New Front &
            Rear Skid Plates.
          </p>
        </div>
        <div className="overflow-hidden cursor-pointer">
          <img
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/exterior/saboo-nexa-ignis-exterior-Toughened.webp"
            alt="saboo-nexa-ignis-exterior-Toughened"
            className="w-full duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

const IgnisFeature = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const data = [
    {
      img: "https://az-ci-cdn-prd-nexa-01.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/features/slda.webp?la=en&hash=BC5E7072CF953F1CBA29740372950882",
      title: "SMARTPLAY STUDIO",
      body: "Text, call, play music or navigate with the in-built Smartplay Studio. The rear camera parking feed allows you to park your car in the toughest spots.      *Application features and displays may vary depending on different operating systems or smartphone devices being used.",
    },
    {
      img: "https://az-ci-cdn-prd-nexa-01.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/ignis/steer-mount-control-webp.webp?la=en&hash=83B95F4B81EE8A60C7430703EADC6EE1",
      title: "STEERING MOUNTED CONTROLS",
      body: "Voice and audio controls mounted on the steering allow you to easily control basic functions.",
    },
    {
      img: "https://az-ci-cdn-prd-nexa-01.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/features/push-start-stop.webp?la=en&hash=6B70CE0DEA025F96118CE50B9E295EDE",
      title: "PUSH START/STOP BUTTON      ",
      body: "Enjoy keyless entry and easily turn your car on & off with just the push of a button.",
    },
    {
      img: "https://az-ci-cdn-prd-nexa-01.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/features/mid.webp?la=en&hash=E4CFCE6E4F76CEDAB8F92612A289C611",
      title: "MID WITH TFT SCREEN",
      body: "Keep track of your car’s vital information on-the-go, conveniently.",
    },
    {
      img: "https://az-ci-cdn-prd-nexa-01.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/features/auto-ac.webp?la=en&hash=06D161972FED2525BB34FA82564BC3C0",
      title: "AUTOMATIC CLIMATE CONTROL",
      body: "Maintain the desired temperature in the cabin with the Automatic Climate Control feature.",
    },
    {
      img: "https://az-ci-cdn-prd-nexa-01.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/features/tilt.webp?la=en&hash=bc1qre8jdw2azrg6tf49wmp652w00xltddxmpk98xp",
      title: "TILT STEERING",
      body: "The adjustable steering wheel adds to the convenience and comfort of driving.",
    },
    {
      img: "https://az-ci-cdn-prd-nexa-01.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/ignis/feature-1170x521-orvm-webp.webp?la=en&hash=A45E0A9B51C97A5AF7D36363772A0B4B",
      title: "AUTO ORVM",
      body: "The foldable electrically adjustable ORVMs enable more convenience while driving.",
    },
    {
      img: "https://az-ci-cdn-prd-nexa-01.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/ignis/feature-1170x521-split-seat-new-webp.webp?la=en&hash=5CE85570F7D47CA9DF2300902ACF1A8C",
      title: "60:40 SPLIT SEAT",
      body: "Got extra luggage? There is space for everything in Ignis with its rear seat split.",
    },
  ];
  return (
    <div className="bg-black ">
      <div className="container mx-auto text-center text-white ">
        <div className="w-full pt-8 pb-2 text-3xl text-center uppercase sm:text-4xl md:text-5xl">
          FEATURES
        </div>
        {/* <div className="text-center text-md lg:text-lg">
          Convenience Goes Bold
        </div> */}
        <div className="py-2 sm:py-5">
          <div className="pb-6 space-y-4 rounded ">
            {/* <Carousel /> */}

            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              speed={1000}
              // spaceBetween={2}
              slidesPerView={1}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs, Autoplay]}
              className="mySwiper2 h-28"
            >
              {data.map((x, index) => (
                <SwiperSlide key={index} className="relative">
                  <div className="w-full lg:px-20">
                    <img src={x.img} alt={x.title} className="" />
                    <div className="w-full px-4 pt-4 text-left text-white md:absolute bottom-4">
                      <div className="pb-2 font-medium">{x.title}</div>
                      <div className="font-light lg:pr-40">{x.body}</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              // loop={true}
              spaceBetween={10}
              slidesPerView={5}
              // freeMode={true}
              // watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="hidden text-white mySwiper-3 md:block"
            >
              {data.map((x, index) => (
                <SwiperSlide key={index} className="cursor-pointer">
                  <div>
                    <img src={x.img} alt={x.title} className="max-h-24" />
                    <div className="py-2 ">{x.title}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

const IgnisTechnology = () => {
  return (
    <div className="px-2 py-10 overflow-hidden text-black bg-white">
      <div className="container mx-auto text-center ">
        <div className="w-full pt-8 pb-2 text-3xl text-center uppercase sm:text-4xl md:text-5xl">
          TECHNOLOGY
        </div>
        <div className="mb-6 text-center text-md lg:text-lg">
          Intelligence Goes Bold
        </div>
      </div>

      <div className="container mx-auto">
        <img
          src="https://az-ci-cdn-prd-nexa-01.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/technology/tech.webp"
          alt="AGS Ignis"
          className="w-full "
        />
        <div className="w-full pt-4 text-left ">
          <div className="pt-1 pb-3 text-lg font-medium">AGS</div>
          <div className="font-light lg:pr-40">
            The pace might be fast in the urban jungle but the traffic is slow.
            Worry not. Ignis with Auto Gear Shift makes every drive smoother and
            more comfortable, without compromising on efficiency.
          </div>
        </div>
      </div>
    </div>
  );
};

const Ignis360 = () => {
  return (
    <>
      <div className="text-center ">
        <div className="w-full pt-10 pb-2 text-3xl text-center uppercase sm:text-4xl md:text-5xl lg:hidden">
          360
          <sup>
            <span className="text-lg">0</span>
          </sup>{" "}
          View
        </div>
        {/* <div>EXPLORE THE ALL-NEW XL6</div> */}
        <div className="pb-4 lg:hidden">
          Take A 360 Degree Look Around Ignis And Get To Know It Better.
        </div>
      </div>
      <div className="relative">
        <View360
          path={
            "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/360"
          }
          count={34}
          format={"jpg"}
        />
        <div className="absolute flex-col items-center hidden text-white top-10 left-10 md:flex ">
          <TbView360 className="text-2xl lg:text-5xl animate-pulse" />
          <Tb360View className="text-xl lg:text-4xl" />
        </div>
        <div className="absolute flex-col items-center hidden w-full text-white top-10 lg:flex ">
          <div className="w-full pb-2 text-3xl text-center uppercase sm:text-4xl md:text-5xl">
            360
            <sup>
              <span className="text-lg">0</span>
            </sup>{" "}
            View
          </div>
          <div>
            Take A 360 Degree Look Around The New Age Baleno And Get To Know It
            Better
          </div>
        </div>
        <div className="absolute flex flex-col items-center text-white top-1/2 left-10 lg:left-20 ">
          <GiReturnArrow className="text-2xl rotate-180 lg:text-5xl animate-pulse" />
        </div>
        <div className="absolute flex flex-col items-center text-white top-1/2 right-10 lg:right-20 ">
          <GiReturnArrow className="text-2xl lg:text-5xl animate-pulse" />
        </div>
      </div>
    </>
  );
};

function IgnisSafety() {
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className="container mx-auto mt-6 text-center ">
        <div className="pb-4 text-3xl text-center uppercase sm:text-4xl md:text-5xl lg:pt-4 ">
          SAFETY
        </div>
        <span className="text-md lg:text-lg">
          Reassurance of Safety on Every Drive
        </span>
      </div>
      <div className="py-4 text-2xl font-medium text-center lg:text-3xl "></div>
      <div className="container relative flex flex-col items-center justify-center mx-auto -mt-10">
        <img
          // src="https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/safety/desktop/ignis-safeti.webp?la=en&hash=973598EE6268779DB9C82368B15DA36B"
          SRC="https://az-ci-cdn-prd-nexa-01.azureedge.net/-/media/feature/nexawebsitecarbrand/ignis/safety/desktop/ignis-safeti.webp?la=en&hash=bc1qre8jdw2azrg6tf49wmp652w00xltddxmpk98xp"
          alt=" Ignis Safety Features"
          srcSet=""
          className="m-28 "
        />

        <div className="absolute left-[62%] top-16  lg:flex group hidden  ">
          <div className="flex items-center justify-center w-20 h-20 duration-500 border border-black rounded-full cursor-pointer hover:scale-105">
            {/* <GiBeltBuckles className="text-4xl group-hover:text-white " /> */}
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/slideshow/safety-belt.svg"
              alt=" Seat Belt Pre-Tensioners with force limiters"
              className="scale-[0.6]"
            />
          </div>
          <div className="hidden mx-3 my-auto w-60 group-hover:backdrop-blur-md group-hover:block">
            <div className="pb-1 font-medium ">
              Seat Belt Pre-Tensioners with force limiters
            </div>
            <div className="font-light ">
              Pre-tensioners restrain the passengers and Force Limiters prevent
              seatbelt-inflicted injury.
            </div>
          </div>
        </div>
        <div className="absolute top-[4%] right-[62%] lg:flex group hidden  ">
          <div className="hidden mx-3 my-auto w-60 group-hover:backdrop-blur-md group-hover:block">
            <div className="pb-1 font-medium ">SUZUKI-TECT BODY</div>
            <div className="font-light ">
              Suzuki’s Total Effective Control Technology (TECT) concept results
              in effective absorption and dispersion of crash energy. The
              effective use of high-tensile steel for major parts makes the body
              light, strong and safe
            </div>
          </div>
          <div className="flex items-center justify-center w-20 h-20 duration-500 border border-black rounded-full cursor-pointer hover:scale-105">
            {/* <GiBeltBuckles className="text-4xl group-hover:text-white " /> */}
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/slideshow/repair.svg"
              alt=" Seat Belt Pre-Tensioners with force limiters"
              className="scale-[0.8]"
            />
          </div>
        </div>
        <div className="absolute left-[19%] xl:left-[20%] top-[60%]  lg:flex lg:flex-col md:items-start group hidden  ">
          <div className="flex items-center justify-center w-20 h-20 duration-500 border border-black rounded-full hover:scale-105 group-hover:bg-black">
            <GiSpeedometer className="text-4xl group-hover:text-white" />
          </div>

          <div className="hidden py-3 mx-3 my-auto w-60 group-hover:backdrop-blur-md group-hover:block">
            <div className="pb-1 font-medium ">ABS with EBD</div>

            <div className="hidden text-sm font-light group-hover:block">
              Anti-lock Braking System prevents the locking up of the wheels
              when the brakes are applied under heavy loads while EBD ensures an
              efficient and effective braking.
            </div>
          </div>
        </div>
        <div className="absolute left-[47%] bottom-24  lg:flex group hidden items-end  ">
          <div className="flex items-center justify-center w-20 h-20 duration-500 border border-black rounded-full hover:scale-105 ">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/slideshow/airbag.svg"
              className="scale-[0.6]"
              alt=" 6 Air Bags to take the impact before it reaches you."
            />
          </div>
          <div className="hidden py-3 mx-3 my-auto w-60 group-hover:backdrop-blur-md group-hover:block">
            <div className="pb-1 font-medium ">6 Air Bags</div>

            <div className="hidden font-light group-hover:block">
              6 Air Bags to take the impact before it reaches you.
            </div>
          </div>
        </div>
        <div className="absolute left-[10%]  bottom-[58%]    lg:flex-col md:items-start group hidden lg:flex ">
          <div className="hidden py-3 mx-3 my-auto w-60 group-hover:backdrop-blur-md group-hover:block">
            <div className="pb-1 font-medium ">ISOFIX child fix anchorages</div>

            <div className="hidden font-light group-hover:block">
              Standardized international child seat fitting system, for that
              perfect drive with your little ones.
            </div>
          </div>
          <div className="flex items-center justify-center w-20 h-20 duration-500 border border-black rounded-full hover:scale-105 group-hover:bg-black ">
            <MdAirlineSeatReclineExtra className="text-4xl group-hover:text-white" />
          </div>
        </div>
        <div className="absolute left-[78%]  bottom-[58%] md:items-start group hidden lg:flex lg:flex-col ">
          <div className="hidden py-3 mx-3 my-auto w-60 group-hover:backdrop-blur-sm group-hover:block ">
            <div className="pb-1 font-medium ">
              FULL FRONTAL IMPACT COMPLIANCE, FRONTAL OFFSET IMPACT COMPLIANCE,
              SIDE IMPACT COMPLIANCE
            </div>

            <div className="font-light ">
              Successfully tested and in compliance with international safety
              norms
            </div>
          </div>
          <div className="flex items-center justify-center w-20 h-20 mb-2 duration-500 border border-black rounded-full hover:scale-105 group-hover:bg-black ">
            <GiBeltBuckles className="text-4xl group-hover:text-white" />
          </div>
        </div>

        <div className="absolute left-[77%]  top-[45%]  md:items-start group hidden lg:block ">
          <div className="flex items-center justify-center w-20 h-20 mb-2 duration-500 border border-black rounded-full hover:scale-105 ">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/slideshow/road.svg"
              className="scale-[0.6]"
              alt="Ensuring safety, not only for the occupants, but pedestrians as
              well"
            />
          </div>
          <div className="hidden py-3 mx-3 my-auto w-60 group-hover:backdrop-blur-sm group-hover:block ">
            <div className="pb-1 font-medium ">
              PEDESTRIAN PROTECTION COMPLIANCE
            </div>
            <div className="font-light ">
              Ensuring safety, not only for the occupants, but pedestrians as
              well
            </div>
          </div>
        </div>

        <div className="h-16 absolute border top-36 right-[34%] border-black hidden lg:block"></div>
        <div className="w-48 absolute border top-52 right-[34%]  border-black hidden lg:block"></div>

        <div className="h-48 absolute border bottom-44 right-[50%] border-black hidden lg:block"></div>
        <div className="w-24 xl:w-32 absolute border  left-[22%] hidden lg:block  border-black"></div>
        <div className="h-16 absolute border top-1/2 left-[22%] border-black hidden lg:block"></div>
        <div className="h-16 absolute border top-[15%] left-[35%] border-black hidden lg:block"></div>
        <div className="w-24 lg:w-[12%]  just  absolute border top-[16rem] left-[18%] hidden lg:block  border-black"></div>
        <div className="w-10 lg:w-[10%]  just  absolute border top-[16rem] right-[23%] hidden lg:block  border-black"></div>
        <div className="w-10 lg:w-[10%]  just  absolute border top-[22.5rem] right-[23%] hidden lg:block  border-black"></div>

        <button
          className={`absolute ${
            index === 0 ? "bg-black text-white" : "bg-white animate-pulse"
          } h-6 w-6 rounded-full flex justify-center lg:hidden items-center top-[45%] `}
          onClick={() => setIndex(0)}
          aria-label="Seat Belt Pre-Tensioners with force limiters"
        >
          +
        </button>
        <button
          className={`absolute ${
            index === 1 ? "bg-black text-white" : "bg-white animate-pulse"
          }  h-6 w-6 rounded-full flex justify-center lg:hidden items-center top-[38%] left-[44%] `}
          onClick={() => setIndex(1)}
          aria-label="6 Air Bags to take the impact before it reaches you."
        >
          +
        </button>
        <button
          className={`absolute ${
            index === 2 ? "bg-black text-white" : "bg-white animate-pulse"
          } h-6 w-6 rounded-full flex justify-center lg:hidden items-center bottom-[50%] left-[25%]  `}
          onClick={() => setIndex(2)}
          aria-label="ABS with EBD"
        >
          +
        </button>
        <button
          className={`absolute ${
            index === 3 ? "bg-black text-white" : "bg-white animate-pulse"
          } h-6 w-6 rounded-full flex justify-center lg:hidden items-center top-[35%] left-[30%] `}
          onClick={() => setIndex(3)}
          aria-label="ISOFIX child fix anchorages"
        >
          +
        </button>
        <button
          className={`absolute ${
            index === 4 ? "bg-black text-white" : "bg-white animate-pulse"
          } h-6 w-6 rounded-full flex justify-center lg:hidden items-center top-[25%] left-[30%] `}
          onClick={() => setIndex(4)}
          aria-label="SUZUKI-TECT BODY"
        >
          +
        </button>
        <button
          className={`absolute ${
            index === 5 ? "bg-black text-white" : "bg-white animate-pulse"
          } h-6 w-6 rounded-full flex justify-center lg:hidden items-center top-[40%] right-[35%] `}
          onClick={() => setIndex(5)}
          aria-label="FULL FRONTAL IMPACT COMPLIANCE, FRONTAL OFFSET IMPACT COMPLIANCE, SIDE IMPACT COMPLIANCE"
        >
          +
        </button>
        <button
          className={`absolute ${
            index === 6 ? "bg-black text-white" : "bg-white animate-pulse"
          } h-6 w-6 rounded-full flex justify-center lg:hidden items-center bottom-[48%] right-[20%] `}
          onClick={() => setIndex(6)}
          aria-label="PEDESTRIAN PROTECTION COMPLIANCE"
        >
          +
        </button>
        <div className="absolute lg:hidden bottom-[20%] px-2 backdrop-blur-sm">
          {index === 0 ? (
            <div>
              <span className="font-medium text-md lg:text-lg">
                Seat Belt Pre-Tensioners with force limiters
              </span>
              <br />
              Pre-tensioners restrain the passengers and Force Limiters prevent
              seatbelt-inflicted injury.
            </div>
          ) : index === 1 ? (
            <div>
              <span className="font-medium text-md lg:text-lg">6 Air Bags</span>
              <br />6 Air Bags to take the impact before it reaches you.
            </div>
          ) : index === 2 ? (
            <div>
              <span className="font-medium text-md lg:text-lg">
                ABS with EBD
              </span>
              <br />
              Anti-lock Braking System prevents the locking up of the wheels
              when the brakes are applied under heavy loads while EBD ensures an
              efficient and effective braking.
            </div>
          ) : index === 3 ? (
            <div>
              <span className="font-medium text-md lg:text-lg">
                ISOFIX child fix anchorages
              </span>
              <br />
              Standardized international child seat fitting system, for that
              perfect drive with your little ones.
            </div>
          ) : index === 4 ? (
            <div>
              <span className="font-medium text-md lg:text-lg">
                SUZUKI-TECT BODY
              </span>
              <br />
              Suzuki’s Total Effective Control Technology (TECT) concept results
              in effective absorption and dispersion of crash energy. The
              effective use of high-tensile steel for major parts makes the body
              light, strong and safe
            </div>
          ) : index === 5 ? (
            <div>
              <span className="font-medium text-md lg:text-lg">
                FULL FRONTAL IMPACT COMPLIANCE, FRONTAL OFFSET IMPACT
                COMPLIANCE, SIDE IMPACT COMPLIANCE
              </span>
              <br />
              Successfully tested and in compliance with international safety
              norms
            </div>
          ) : (
            index === 6 && (
              <div>
                <span className="font-medium text-md lg:text-lg">
                  PEDESTRIAN PROTECTION COMPLIANCE
                </span>
                <br />
                Ensuring safety, not only for the occupants, but pedestrians as
                well
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Ignis;
