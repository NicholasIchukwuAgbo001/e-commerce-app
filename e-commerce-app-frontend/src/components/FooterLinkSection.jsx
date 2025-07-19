import { Link } from "react-router-dom";

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