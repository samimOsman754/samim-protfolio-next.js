import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { ContactInfo, SocialLinks } from "@/constant/constant";
import Link from "next/link";
import ContactForm from "./ContactForm";

const IconMap = {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
};

const Contact = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text content */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
            {ContactInfo.title}
          </h1>
          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            {ContactInfo.description}
          </p>
          {/* Info */}
          <div className="mt-7">
            <div className="flex items-center space-x-3 mb-4">
              <BiPhone className="w-9 h-9 text-cyan-300" />
              <Link
                href={`tel:${ContactInfo.phone}`}
                className="text-xl font-bold text-gray-400 hover:text-cyan-300 transition-colors"
              >
                {ContactInfo.phone}
              </Link>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <BiEnvelope className="w-9 h-9 text-cyan-300" />
              <Link
                href={`mailto:${ContactInfo.email}?subject=Contact from Portfolio`}
                className="text-xl font-bold text-gray-400 hover:text-cyan-300 transition-colors"
              >
                {ContactInfo.email}
              </Link>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <BiMap className="w-9 h-9 text-cyan-300" />
              <Link
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  ContactInfo.address,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-gray-400 hover:text-cyan-300 transition-colors"
              >
                {ContactInfo.address}
              </Link>
            </div>
          </div>
          {/* social media icons */}
          <div className="flex items-center mt-8 space-x-3">
            {SocialLinks.map((social) => {
              const IconComponent =
                IconMap[social.icon as keyof typeof IconMap];
              return (
                <Link
                  key={social.id}
                  href={social.url}
                  className={`w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col ${social.hoverColor} transition-all duration-300`}
                >
                  {IconComponent && (
                    <IconComponent className="text-white w-6 h-6" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
        {/* Form */}
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
