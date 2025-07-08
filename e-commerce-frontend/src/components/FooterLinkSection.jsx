import { Link } from "react-router-dom";

const sections = [
  {
    title: "CLinko",
    links: [
      "About Us",
      "Shop Like a Billionaire",
      "Affiliate & Influencer: Earn Commission",
      "Contact us",
      "Careers",
      "Press",
      "Tree Planting Program",
    ],
  },
  {
    title: "Customer service",
    links: [
      "Return and refund policy",
      "Intellectual property policy",
      "Shipping info",
      "Report suspicious activity",
    ],
  },
  {
    title: "Help",
    links: [
      "Support center & FAQ",
      "Safety center",
      "Purchase protection",
      "Sitemap",
      "Partner with Us",
    ],
  },
  {
    title: "Download the App",
    links: [
      "Price-drop alert",
      "Faster and more secure checkout",
      "Exclusive offer",
      "Sitemap",
      "Partner with Us",
    ],
  },
];

const FooterLinksSection = () => {
  return (
    <>
      {sections.map((section, index) => (
        <div key={index}>
          <h3 className="font-semibold mb-3 text-lg">{section.title}</h3>
          <ul className="space-y-1">
            {section.links.map((text, idx) => (
              <li key={idx}>
                <Link to="#">{text}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default FooterLinksSection;
