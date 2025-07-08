import FooterLinkSection from "./FooterLinkSection";
import FooterSocial from "./FooterSocial";
import FooterPayment from "./FooterPayment";

const Footer = () => {
  return (
    <footer className="bg-stone-800 text-white text-sm">
      <div className="flex flex-wrap justify-between gap-8 px-6 py-10">
        <FooterLinkSection />
      </div>

      <div className="flex flex-wrap justify-between items-start px-6 py-6 border-t border-stone-600 gap-8">
        <FooterSocial />
        <FooterPayment />
      </div>

      <div className="text-center py-4 border-t border-stone-600 text-xs">
        <p>&copy; 2023 E-commerce Group Project. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
