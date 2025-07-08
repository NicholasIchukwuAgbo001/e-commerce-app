const FooterSocials = () => {
  const icons = [
    "logo-instagram",
    "logo-facebook",
    "logo-twitter",
    "logo-youtube",
    "logo-tiktok",
    "logo-pinterest",
    "logo-linkedin",
    "logo-whatsapp",
  ];

  return (
    <div>
      <h4 className="text-lg font-semibold mb-2">Follow us</h4>
      <div className="flex flex-wrap gap-3 text-2xl text-white">
        {icons.map((name, index) => (
          <ion-icon key={index} name={name}></ion-icon>
        ))}
      </div>
    </div>
  );
};

export default FooterSocials;
