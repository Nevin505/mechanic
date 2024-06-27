import carouselImage1 from "../assets/images/Landing-Page/carousel-images/landing-page-carousel-2.jpg";
import carouselImage2 from "../assets/images/Landing-Page/carousel-images/landing-page-carousel-3.jpg";
import carouselImage3 from "../assets/images/Landing-Page/carousel-images/landing-page-carousel-4.jpg";

import Diagonistics from "../assets/images/Landing-Page/image/car-diagnostic.svg";
import CarBrake from "../assets/images/Landing-Page/image/Car-Brake.svg";
import CarDetailing from "../assets/images/Landing-Page/image/Car-Detailing.svg";
import CarOil from "../assets/images/Landing-Page/image/Car-Oil.svg";
import carSuspension from "../assets/images/Landing-Page/image/car-suspension.svg";

// Social Media Icons Links
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export const carouselContent = [
  {
    image: carouselImage1,
    heading: "Perfromance without  Comprise",
    paragraph:
      "We provide a wide range of automotive  maintaiance services .Our Skilled techinicans use geniue OEM parts at out german standard Workshop to take car of any  mechanical issue with any ease",
  },
  {
    image: carouselImage2,
    heading: "Excellence in Every Detail",
    paragraph:
      "Our comprehensive automotive services ensure your vehicle receives the highest quality care. At our state-of-the-art workshop, experienced technicians use genuine OEM parts to address any mechanical issues efficiently and effectively.",
  },
  {
    image: carouselImage3,
    heading: "Precision and Care You Can Trust",
    paragraph:
      "At Go-menchanic, we offer a full spectrum of vehicle maintenance and repair services. Our expert technicians, equipped with genuine OEM parts and cutting-edge tools, ensure your car is serviced to the highest standards of quality and reliability.",
  },
];

export const NAV_LINKS = [
  { href: "#Home", label: "Home" },
  { href: "#About", label: "About" },
  { href: "#Services", label: "Services" },
  { href: "#FAQs", label: "FAQs" },
  { href: "#Select", label: "Select" },
  { href: "#Contact", label: "Contact" },
];

export const SPECILISATIONS = [
  {
    label: "Diagonistics",
    image: Diagonistics,
    heading: "Diagnostics",
    paragraph:
      "If your car needs a mobile diagnostic check done at your home or office, let AutoMechanica come to you.",
  },
  {
    label: "CarBrake",
    image: CarBrake,
    heading: "Dent & Paint",
    paragraph:
      "AutoMechanica specializes in car dent repair and car painting services for a range of models.",
  },
  {
    label: "CarDetailing",
    image: CarDetailing,
    heading: "Detailing",
    paragraph:
      "AutoMechanica offers professional car detail services at an affordable price. Our interior cleaning, detailing, and restoration services can help you recapture that new car look and smell.",
  },
  {
    label: "CarOil",
    image: CarOil,
    heading: "Oil / Lube / Filters",
    paragraph:
      "AutoMechanica proudly serves the Lube, Oil & Filter change needs of customers' vehicle performance while extending the life of your vehicle.",
  },
  {
    label: "carSuspension",
    image: carSuspension,
    heading: "Suspension",
    paragraph:
      "The suspension system of your vehicle protects you from bouncing up and down due to the bad road conditions and bumps in the road.",
  },
];

export const BOOKING_STEPS = [
  {
    heading: "01",
    title: "Choose",
    paragraph: "Choose Your Service From Our Wide Rangeof Offerings",
  },
  { heading: "02", title: "Book", paragraph: "Make an Appointment With Us" },
  {
    heading: "03",
    title: "Fair Pricing",
    paragraph: "Always get a fair quote",
  },
  {
    heading: "04",
    title: "At Your DoorStep",
    paragraph: "Get a door Step pick up and frop facility",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  { socialMedia: "Instagram", icon: FaInstagramSquare, links: "hjdgg" },
  { socialMedia: "Facebook", icon: FaFacebook, links: "hjdgg" },
  { socialMedia: "Linkedin", icon: FaLinkedin, links: "hjdgg" },
  { socialMedia: "X", icon: FaXTwitter, links: "hjdgg" },
  { socialMedia: "Youtube", icon: FaYoutube, links: "hjdgg" },
];

export const SERVICES = [
  "Periodic Maintenance Service",
  "  Dent & Paint",
  " Bumper Repair",
  "Accidental Repair",
  " Scratch Removal",
];

export const LINKS = [
  "Home",
  "About",
  "FAQ",
  "Blog",
  "AutoMechanica Select",
  "Contact US",
  "Privacy Policy",
];
