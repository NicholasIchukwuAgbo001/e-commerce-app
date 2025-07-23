import FooterLinksSection from "./FooterLinkSection";
import FooterSocials from "./FooterSocials";

const Footer = () => {
  return (
    <footer className="bg-stone-300 text-black text-sm px-12 pt-5">
      <div className="flex flex-wrap justify-between gap-8 px-6 py-10">
        <FooterLinksSection />
      </div>

      <div className="flex flex-wrap justify-between items-start px-6 py-6 border-t border-stone-600 gap-8">
        <FooterSocials />
      </div>
    </footer>
  );
};

export default Footer;
