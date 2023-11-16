import Image from "next/image";
import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className=" max-container ">
      <div className="flex justify-center items-center text-white-400 mt-4 max-sm:flex-col max-sm:items-center">
        <p>Copyright. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
