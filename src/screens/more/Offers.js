import React, { useState } from "react";
import Helmet from "react-helmet";
import { offer_products } from "../../constants";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import OffersPopup from "../../components/utils/OffersPopup";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";

function Offers() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "October",
    "October",
    "November",
    "December",
  ];
  return (
    <>
      <Helmet>
        <title>
          Maruti Suzuki 2025 Discounts and festive Offers | New Cars Offers &
          Discounts - Saboo Nexa
        </title>
        <meta
          name="title"
          content="   Maruti Suzuki 2025 Discounts and festive Offers | New Cars
          Offers & Discounts - Saboo Nexa"
        />
        <meta
          name="description"
          content="Maruti Suzuki 2025 Discounts and festive Offers  Special Offers 2025 - RKS Motor. Save up to Rs 1,03,000 on Grand Vitara and new models | Discounts on Maruti Grand Vitara, Fronx, Baleno, Ciaz, Ignis, Jimny, XL6"
        />
        <meta
          name="keywords"
          content="RKS Motor, Maruti Suzuki,  Special Offers ,2025 Discounts and festive Offers, Nexa offers, Grand Vitara, Fronx, Baleno, Ciaz, Ignis, Jimny, XL6, Saboo Nexa offers, 2025 Discounts and festive Offers, Saboo Nexa offers,  Saboo nexa,  nexa car offers nexa car offers January 2025, nexa car offers year  2025, maruti nexa car offers, nexa car low price, which car comes under nexa, nexa car discount, nexa service offers, 2025 Discounts and festive Offers"
        />
      </Helmet>

      <Header />
      <div className="pb-[67px] bg-black sm:pb-[120px] lg:pb-[140px]"></div>
      {/* <div className="h-1 -mb-2 bg-black"></div> */}
      {/* <section className="select-none">
        <img
          src={require("../../assets/HomePageImages/Maruti_Suzuki_Saboo_RKS_Motor_Hyderabad_Dealer_Offers_Service_Invicto_Fronx_Xl6_Jimny_GrandVitara_Ciaz_Ignis_Baleno_Nexa_Car_Black_Edition_Service.webp")}
          alt="Maruti_Suzuki_No1_SUV_Maker_Saboo_RKS_Motor_Hyderabad_Dealer_Offers_Service_Invicto_Fronx_Xl6_Jimny_GrandVitara_Ciaz_Ignis_Baleno_Nexa_Car_Service"
          className="hidden w-full sm:block"
        />
        <img
          src={require("../../assets/HomePageImages/Maruti_Suzuki_Saboo_RKS_Motor_Hyderabad_Dealer_Offers_Service_Invicto_Fronx_Xl6_Jimny_GrandVitara_Ciaz_Ignis_Baleno_Nexa_Car_Black_Edition_Mobile.webp")}
          // src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/banners/Website_Mobile_Maruti_Suzuki_No1_SUV_Maker_Saboo_RKS_Motor_October_Offers.webp"
          alt="Maruti_Suzuki_No1_SUV_Maker_Saboo_RKS_Motor_Hyderabad_Dealer_Offers_Service_Invicto_Fronx_Xl6_Jimny_GrandVitara_Ciaz_Ignis_Baleno_Nexa_Car_Black_Edition_Mobile"
          className="w-full h-full sm:hidden "
        />
      </section> */}
      <section className="">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          // spaceBetween={10}
          slidesPerView={1}
          centeredSlides={true}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="select-none mySwiper2 "
        >
          <SwiperSlide className="">
            <div className="hidden sm:block">
              <img
                //  src={require("../../components/Website_Maruti_Suzuki_Nexa_Year_End_Offers_2024_biggest_offers_are_live_at_Saboo_RKS_Motor (1).webp")}
                // src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Nexa+Service+Hafeezpet.webp"
                src={require("../../website_Maruti_Suzuki_Nexa_Electric_vehicle_e_vitara_Saboo_RKS_Motor (1).webp")}
                alt="Website_Maruti_Suzuki_Nexa_Year_End_Offers_2024_biggest_offers_are_live_at_Saboo_RKS_Motor (1).webp"
                className={`hidden w-full sm:block`}
                loading="lazy"
              />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className="">
            <div className="hidden sm:block">
              <img
                src={require("../../website_Maruti_Suzuki_Nexa_Electric_vehicle_e_vitara_Saboo_RKS_Motor (1).webp")}
                //  src={require("../../components/Website_Maruti_Suzuki_Nexa_Year_End_Offers_2024_biggest_offers_are_live_at_Saboo_RKS_Motor (1).webp")}
                //src={require("../../assets/HomePageImages/Ignis_Radiance_Edition_banner_Augest_2024_Maruti_Suzuki_Saboo_Nexa.webp")}
                // src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Nexa+Service+Hafeezpet.webp"
                alt="Website_Maruti_Suzuki_Nexa_Year_republic_Offers_2024_biggest_offers_are_live_at_Saboo_RKS_Motor (1).webp"
                className={` w-full `}
                loading="lazy"
              />
            </div>
          </SwiperSlide>
          {/* <SwiperSlide className="">
            <div className="hidden sm:block">
              <img
                src={require("../../assets/HomePageImages/Maruti_Suzuki_Saboo_RKS_Motor_Hyderabad_Dealer_Offers_Service_Invicto_Fronx_Xl6_Jimny_GrandVitara_Ciaz_Ignis_Baleno_Nexa_Car_Black_Edition_Service.webp")}
                alt="Maruti_Suzuki_No1_SUV_Maker_Saboo_RKS_Motor_Hyderabad_Dealer_Offers_Service_Invicto_Fronx_Xl6_Jimny_GrandVitara_Ciaz_Ignis_Baleno_Nexa_Car_Service"
                className={`hidden w-full sm:block `}
              />
            </div>
            <div className="sm:hidden">
              <img
                src={require("../../assets/HomePageImages/Maruti_Suzuki_Saboo_RKS_Motor_Hyderabad_Dealer_Offers_Service_Invicto_Fronx_Xl6_Jimny_GrandVitara_Ciaz_Ignis_Baleno_Nexa_Car_Black_Edition_Mobile.webp")}
                // src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/banners/Website_Mobile_Maruti_Suzuki_No1_SUV_Maker_Saboo_RKS_Motor_October_Offers.webp"
                alt="Maruti_Suzuki_No1_SUV_Maker_Saboo_RKS_Motor_Hyderabad_Dealer_Offers_Service_Invicto_Fronx_Xl6_Jimny_GrandVitara_Ciaz_Ignis_Baleno_Nexa_Car_Black_Edition_Mobile"
                className="w-full "
              />
            </div>
          </SwiperSlide> */}
        </Swiper>
        <div className="sm:hidden">
          <img
            src={require("../../website_mobile_Maruti_Suzuki_Nexa_Electric_vehicle_e_vitara_Saboo_RKS_Motor (1).webp")}
            //  src={require("../../assets/WM__Maruti_Suzuki_Arena_New_Year_Offers_2025_Sankranti_offers_are_live_at_Saboo_RKS_Motor.webp")}
            // src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/banners/Website_Mobile_Maruti_Suzuki_No1_SUV_Maker_Saboo_RKS_Motor_October_Offers.webp"
            alt="Maruti_Suzuki_No1_SUV_Maker_Saboo_RKS_Motor_Hyderabad_Dealer_Offers_Service_Invicto_Fronx_Xl6_Jimny_GrandVitara_Ciaz_Ignis_Baleno_Nexa_Car_Black_Edition_Mobile"
            className="w-full "
            loading="lazy"
          />
        </div>
      </section>

      <div className="py-10 space-y-3 text-center">
        <p className="font-bold lg:text-3xl sm:text-xl">
          SAVE WITH SABOO NEXA OFFERS IN HYDERABAD INDIA
        </p>

        <p>
          Hurry and take advantage of these exciting offers available for a
          limited time until the end of {months[new Date().getMonth()]}{" "}
          {new Date().getFullYear()}.
        </p>
      </div>
      <OfferProducts />
      <div className="container mx-auto ">
        Note: *Offer applicable to 2024 models only, until stocks last.
      </div>
    </>
  );
}

const OfferProducts = () => {
  const [open, setOpen] = useState(false);
  const [model, setModel] = useState("");

  return (
    <div className="container grid gap-4 px-5 pb-5 mx-auto sm:grid-cols-2 lg:grid-cols-3 sm:px-0">
      {offer_products.map((item, i) => (
        <div
          className="relative flex flex-col overflow-hidden duration-500 border rounded shadow-lg hover:scale-95"
          key={i}
        >
          <p className="absolute py-1 text-sm text-center text-white uppercase rotate-45 bg-[#ec1b23] top-3 -right-7 w-28 ">
            <span className="animate-pulse">Offer</span>
          </p>

          <div className="flex-auto ">
            <Link to={item.explore}>
              <img src={item.img} alt={item.name} className="mx-auto" />
            </Link>
          </div>
          <div className="flex-auto bg-white">
            <div className="flex flex-col justify-between h-full">
              <div className="flex items-center justify-between px-5 pt-5 pb-2 border-t">
                <img src={item.logo} alt={item.name} />
                <div className="text-right">
                  Save up to
                  <div className="text-xl font-semibold sm:text-2xl text-red-50500 whitespace-nowrap">
                    <span className="text-lg">₹</span> {item.price}*
                    {/* ₹ {Intl.NumberFormat('en-IN').format(item.price)}* */}
                  </div>
                  <p className="text-xs">{item.desc}</p>
                  {/* <div className='text-xs font-thin'>{item.emi}</div> */}
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 pb-2 mx-4 mb-6">
                <Link
                  to={item.explore}
                  className="w-full p-2 text-sm text-center uppercase border border-gray-800 rounded "
                >
                  Explore
                </Link>
                <button
                  onClick={() => {
                    setOpen(true);
                    setModel(item.name);
                  }}
                  aria-label="Grab the offer"
                  className="w-full p-2 text-sm text-center text-white uppercase duration-300 ease-in bg-black border border-black rounded hover:bg-white hover:text-black"
                >
                  Grab the offer
                </button>
              </div>
              {/* <div className="flex flex-col w-full px-5 pb-2">
                <Link
                  to="/terms-and-condition"
                  className="py-2 text-xs text-black uppercase rounded"
                >
                  *legal disclaimer
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      ))}
      <OffersPopup
        open={open}
        setOpen={setOpen}
        model={model}
        title={"Grab the offer on "}
      />
    </div>
  );
};

export default Offers;
