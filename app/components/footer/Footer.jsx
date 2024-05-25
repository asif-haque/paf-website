import React from "react";
import {
  FaYoutube,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaWikipediaW,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white px-5 pt-10 pb-24">
      <div className="md:flex gap-5 text-sm">
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Live Events</h3>
          <ul className="space-y-2">
            <li>
              <a href="#gita-samagam" className="hover:underline">
                Gita Samagam
              </a>
            </li>
            <li>
              <a href="#vedanta-basics-to-classics" className="hover:underline">
                Vedanta: Basics to Classics
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Wisdom Content</h3>
          <ul className="space-y-2">
            <li>
              <a href="#video-series" className="hover:underline">
                Video Series
              </a>
            </li>
            <li>
              <a href="#ap-books" className="hover:underline">
                AP Books
              </a>
            </li>
            <li>
              <a href="#ap-articles" className="hover:underline">
                AP Articles
              </a>
            </li>
            <li>
              <a href="#ap-circle" className="hover:underline">
                AP Circle
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">More</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about-acharya-prashant" className="hover:underline">
                About Acharya Prashant
              </a>
            </li>
            <li>
              <a href="#invite-him" className="hover:underline">
                Invite Him
              </a>
            </li>
            <li>
              <a href="#interview-him" className="hover:underline">
                Interview Him
              </a>
            </li>
            <li>
              <a href="#ghar-ghar-upanishad" className="hover:underline">
                Ghar Ghar Upanishad
              </a>
            </li>
            <li>
              <a
                href="#media-and-public-interaction"
                className="hover:underline"
              >
                Media and Public Interaction
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Social Media</h3>
          <div className="mb-4">
            <h4 className="font-medium">For English</h4>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-gray-400">
                <FaYoutube size={24} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaWikipediaW size={24} />
              </a>
            </div>
          </div>
          <div className="mb-4">
            <h4 className="font-medium">For Hindi</h4>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-gray-400">
                <FaYoutube size={24} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">
            Download Acharya Prashant App
          </h3>
          <div className="flex md:block space-x-4 mt-2">
            <a href="#">
              <img
                src="/images/playstore.png"
                alt="Get it on Google Play"
                className="w-full lg:w-auto max-h-12"
              />
            </a>
            <a href="#">
              <img
                src="/images/playstore.png"
                alt="Download on the App Store"
                className="w-full lg:w-auto max-h-12"
              />
            </a>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <MdEmail size={24} />
              <a
                href="mailto:support@advait.org.in"
                className="hover:underline"
              >
                support@advait.org.in
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FaWhatsapp size={24} />
              <a href="tel:+919650585100" className="hover:underline">
                +91 9650585100
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <MdPhone size={24} />
              <a href="tel:+919650585100" className="hover:underline">
                +91 9650585100
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-4 mt-4 text-sm md:text-center">
        <p>&copy; 2022 PrashantAdvait Foundation</p>
        <div className="flex space-x-4 mt-2 justify-center">
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Undertaking
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
