import Carousel from "../components/Carousel";
import NavBar from "../components/NavBar";

import Card from "../components/Card";

import LandinPageStyles from "./landingPage.module.css";

import { BOOKING_STEPS, LINKS, SERVICES, SOCIAL_MEDIA_LINKS } from "../utils/LandinPageContents";
import { SPECILISATIONS } from "../utils/LandinPageContents";

import redTriangleArrow from "../assets/images/Landing-Page/image/red_triangle.png";
import whyChooseUs from "../assets/images/Landing-Page/image/Why-choose-us-1.png";
import howItWorks from "../assets/images/Landing-Page/image/How-it-works-1.jpg";
import logo from "../assets/logo/logo.png";

const LandinPage = () => {
  console.log("Rendering Landing Page");
  return (
    <div className="max-container relative">
      <NavBar />
      <Carousel />
      <section className=" flex flex-col gap-8 items-center pt-8 lg:pt-14 bg-primary-900 ">
        <div className="flex flex-col items-center gap-4">
          <img src={redTriangleArrow} width={34} alt="" />
          <h1 className="text-4xl font-bold text-white">Why Choose Us </h1>
          <p className="font-semibold text-white">
            We Offer Full Service Auto Repair & Maintenance
          </p>
        </div>

        <div
          className={`w-full flex flex-col justify-center  max-w-[52rem] car-image relative ${LandinPageStyles.carimage}`}
        >
          <img
            src={whyChooseUs}
            alt="Car-Side-View"
            className="h-52 w-full   object-contain"
          />
        </div>
        <div className="flex  flex-1 justify-center gap-8 w-full px-4 bg-white lg:px-24 max-lg:flex-wrap">
          {SPECILISATIONS.map((specilisation) => (
            <Card key={specilisation.label} className="w-60 text-center gap-4">
              <img
                src={specilisation.image}
                alt={specilisation.label}
                width={48}
              />
              <h1>{specilisation.heading}</h1>
              <p>{specilisation.paragraph}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* How it Works Section */}
      <section className="relative ">
        <div className="h-[24rem] relative">
          <div className="flex flex-col items-center gap-4 absolute  left-10 top-1/3  lg:left-[32rem] text-center">
            <img src={redTriangleArrow} width={34} alt="" />
            <h1 className="text-4xl font-bold text-white">Why Choose Us </h1>
            <p className="font-semibold text-white ">
              We Offer Full Service Auto Repair & Maintenance
            </p>
          </div>
          <img src={howItWorks} alt="Car-Image" className="w-full h-full" />
        </div>
        {/* Our Booking Steps */}
        <div className="flex px-8 lg:px-24 gap-8 placeholder:  top-80 w-full max-lg:flex-col lg:absolute  lg:gap-14">
          {BOOKING_STEPS.map((bookingStep) => {
            return (
              <div
                className="flex flex-1 flex-col gap-4 min-w-52  items-center text-center px-12 py-8 bg-black hover:-translate-y-4  transition-transform	"
                key={bookingStep.title}
              >
                <h1 className="text-9xl font-bold text-white">
                  {bookingStep.heading}
                </h1>
                <h2 className="text-white">{bookingStep.title}</h2>
                <p className="text-white">{bookingStep.paragraph}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer Section */}

      <footer className="py-4 px-8 lg:mt-80">
        <div className="flex  gap-8 w-full lg:px-20  max-lg:flex-col">
          {/* First Column */}
          <div className="flex flex-col  flex-1  gap-4">
            <img src={logo} alt="Brand-Logo" width={78} />
            <p>
              AutoMechanica’s mission is to enable premium quality care for your
              luxury car service at affordable pricing . We ensure real-time
              updates for complete car care needs with a fair and transparent
              pricing mechanism.
            </p>
            <div className="flex gap-2">
                {SOCIAL_MEDIA_LINKS.map(socialmedialinks=>{
                  return  <div  className="rounded-full border-2 border-red-400 hover:border-red-500 w-16 h-16 flex justify-center items-center" key={socialmedialinks.socialMedia}>
                    <socialmedialinks.icon  size={26} />
                  </div>
                })}
            </div>
          </div>
          {/* Services */}
          <div className="flex flex-col flex-1 gap-4 items-center">
            <h1 className="text-2xl">Services</h1>
            {SERVICES.map(service=>{
              return <li>{service}</li>
            })}
          </div>
          <div className="flex flex-col flex-1  gap-4 items-center">
            <h1 className="text-2xl">Links</h1>
            {LINKS.map(link=>{
              return <li>{link}</li>
            })}
          </div>
        </div>

        <p className="text-center">For any Enquiry Call us on 014-789-206-471-9872</p>
      </footer>
    </div>
  );
};

export default LandinPage;
