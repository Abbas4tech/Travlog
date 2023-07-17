import React from "react";
import Photo from "./Photo";
import { footerData, socialIcons } from "./data/data";

const Footer = () => {
  return (
    <>
      <footer className="grid gap-4 grid-rows-[1fr,0.9fr]">
        <section className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          <div className="px-4">
            <div className="mb-6 flex gap-4">
              <Photo
                bucketUrl="logo"
                width={24}
                height={24}
                isPrority
                alt="logo"
              />
              <h3 className="font-extrabold">Travlog</h3>
            </div>
            <div className="text-black/60 font-bold">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.
            </div>
          </div>
          {footerData.map((item) => (
            <div className="px-4">
              <ul className="font-bold">{item.menuName}</ul>
              {item.menuItems.map((item) => (
                <li className="list-none my-2 text-black/50 cursor-pointer">
                  {item}
                </li>
              ))}
            </div>
          ))}
        </section>
        <section id="social-media-links" className="flex gap-4 px-4">
          {socialIcons.map((icon) => icon())}
        </section>
      </footer>
    </>
  );
};

export default Footer;
