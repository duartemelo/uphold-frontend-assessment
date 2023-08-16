import React from "react";
import Button from "../../atom/Button";
import Text from "../../atom/Text";
import logo from "../../../assets/images/logo.svg";
import appleLogo from "../../../assets/images/appstore.svg";
import googleLogo from "../../../assets/images/playstore.svg";

function Footer() {
  return (
    <div className="flex max-w-[1500px] mx-auto justify-between my-16 px-8">
      <div>
        <div className="h-[40px]">
          <img src={logo} alt="Uphold Logo" className="h-full" />
        </div>
      </div>
      <div>
        <div className="h-[40px] flex items-center">
          <Text as="h5" className="font-bold text-gray-600">
            Products
          </Text>
        </div>

        <ul className="mt-5">
          <Button theme="text" className="text-gray-500 block font-medium">
            Consumers
          </Button>
          <Button theme="text" className="text-gray-500 block font-medium mt-1">
            Business
          </Button>
          <Button theme="text" className="text-gray-500 block font-medium mt-1">
            Partners
          </Button>
        </ul>
      </div>
      <div>
        <div className="h-[40px] flex items-center">
          <Text as="h5" className="font-bold text-gray-600">
            Company
          </Text>
        </div>
        <ul className="mt-5">
          <Button theme="text" className="text-gray-500 block font-medium">
            About
          </Button>
          <Button theme="text" className="text-gray-500 block font-medium mt-1">
            Carreers
          </Button>
          <Button theme="text" className="text-gray-500 block font-medium mt-1">
            Press
          </Button>
          <Button theme="text" className="text-gray-500 block font-medium mt-1">
            Blog
          </Button>
        </ul>
      </div>
      <div>
        <div className="h-[40px] flex items-center">
          <Text as="h5" className="font-bold text-gray-600">
            Help
          </Text>
        </div>
        <ul className="mt-5">
          <Button theme="text" className="text-gray-500 font-medium block">
            FAQ & Support
          </Button>
          <Button theme="text" className="text-gray-500 font-medium block mt-1">
            Platform Status
          </Button>
          <Button theme="text" className="text-gray-500 font-medium block mt-1">
            Criptionary
          </Button>
          <Button theme="text" className="text-gray-500 font-medium block mt-1">
            Pricing
          </Button>
          <Button theme="text" className="text-gray-500 font-medium block mt-1">
            Legal
          </Button>
        </ul>
      </div>
      <div>
        <div className="h-[40px] flex items-center">
          <Text as="h5" className="font-bold text-gray-600">
            Social
          </Text>
        </div>
        <ul className="mt-5">
          <Button theme="text" className="text-gray-500 font-medium block">
            Facebook
          </Button>
          <Button theme="text" className="text-gray-500 font-medium block mt-1">
            Twitter
          </Button>
          <Button theme="text" className="text-gray-500 font-medium block mt-1">
            Instagram
          </Button>
          <Button theme="text" className="text-gray-500 font-medium block mt-1">
            LinkedIn
          </Button>
        </ul>
      </div>
      <div>
        <div className="h-[40px] flex justify-between items-center">
          <img src={appleLogo} alt="Apple Logo" className="h-[25px]" />
          <img src={googleLogo} alt="Google Play Logo" className="h-[25px]" />
        </div>
        <select className="w-[80px] mt-5 border bg-white text-gray-400 text-xs p-1">
          <option>English</option>
          <option>Portuguese</option>
        </select>
      </div>
    </div>
  );
}

export default Footer;
