import { ServicesProps } from "../types/interfaces";

export const links = ["Home", "Discover", "Special Deals", "Contact Us"];
import FacebookIcon from "@/Icons/Facebook";
import Instagram from "@/Icons/Instagram";
import Twitter from "@/Icons/Twitter";

export const services: ServicesProps[] = [
  {
    count: "500+",
    servicename: "Holiday Package",
  },
  {
    count: "100",
    servicename: "Luxury Hotel",
  },
  {
    count: "7",
    servicename: "Premium Airlines",
  },
  {
    count: "2k+",
    servicename: "Happy Customers",
  },
];

export type FooterBlock = {
  menuName: string;
  menuItems: string[];
};

export const footerData: FooterBlock[] = [
  {
    menuName: "Company",
    menuItems: ["About", "Career", "Mobile"],
  },
  {
    menuName: "Contact",
    menuItems: ["Why Travlog?", "Partner with us", "FAQ's", "Blog"],
  },
  {
    menuName: "Meet Us",
    menuItems: [
      "+00 92 1234 56789",
      "info@travlog.com",
      "205,R Street New York BD23200",
    ],
  },
];

export const socialIcons = [FacebookIcon, Twitter, Instagram];
