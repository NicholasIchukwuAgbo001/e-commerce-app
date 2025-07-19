import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaFacebookF, FaGithub, FaWhatsapp, FaSnapchat } from "react-icons/fa";

const sections = [
  {
    title: "Company",
    links: [
      "About Us",
      "About",
      "Features",
      "Careers",
    ],
  },
  {
    title: "Help",
    links: [
      "Customer support",
      "Delivery Details",
      "Terms & Conditions",
      "Privacy Policy"
    ],
  },
  {
    title: "FAQ",
    links: [
      "Account",
      "Manage Deliveries",
      "Orders",
      "Payment",
    ],
  },
  {
    title: "Resources",
    links: [
      "Free eBooks",
      "Development Tutoria",
      "How to - blog",
      "Youtube Playlist",
    ],
  },
];

const FooterLinksSection = () => {
  return (
    <>
    <div>
      <Link to="/" className="inline-block">
        <img
          src="SHOP.CO.png"
          alt="Shop.co Logo"
          className="w-32 sm:w-40 md:w-32 object-contain"
        />
      </Link>
      <p className="w-48 py-5 hover:text-stone-900 transition-colors duration-200 text-stone-700">
        We have clothes that suits your style and which you're proud to wear. From women to men.
      </p>
      <div className="flex gap-5">
        <Link to="#" ><FaTwitter className="text-2xl"/></Link>
        <Link to="#" ><FaInstagram className="text-2xl" /></Link>
        <Link to="#" ><FaFacebookF className="text-2xl" /></Link>
        <Link to="#" ><FaGithub className="text-2xl" /></Link>
        <Link to="#" ><FaWhatsapp className="text-2xl" /></Link>
        <Link to="#" ><FaSnapchat className="text-2xl" /></Link>
      </div>
    </div>
      {sections.map((section, index) => (
        <div key={index} className="w-full sm:w-auto">
          <h3 className="font-semibold mb-3 text-lg text-black">{section.title}</h3>
          <ul className="space-y-1 text-gray-300">
            {section.links.map((text, idx) => (
              <li key={idx}>
                <Link
                  to="#"
                  className="hover:underline hover:text-stone-900 transition-colors duration-200 text-stone-700"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default FooterLinksSection;