import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-stone-800 text-white text-sm">
      <div className="flex flex-wrap justify-between gap-8 px-6 py-10">
        <div>
          <h3 className="font-semibold mb-3 text-lg">CLinko</h3>
          <ul className="space-y-1">
            <li><Link>About Us</Link></li>
            <li><Link>Shop Like a Billionaire</Link></li>
            <li><Link>Affiliate & Influencer: Earn Commission</Link></li>
            <li><Link>Contact us</Link></li>
            <li><Link>Careers</Link></li>
            <li><Link>Press</Link></li>
            <li><Link>Tree Planting Program</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-lg">Customer service</h3>
          <ul className="space-y-1">
            <li><Link>Return and refund policy</Link></li>
            <li><Link>Intellectual property policy</Link></li>
            <li><Link>Shipping info</Link></li>
            <li><Link>Report suspicious activity</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-lg">Help</h3>
          <ul className="space-y-1">
            <li><Link>Support center & FAQ</Link></li>
            <li><Link>Safety center</Link></li>
            <li><Link>Purchase protection</Link></li>
            <li><Link>Sitemap</Link></li>
            <li><Link>Partner with Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-lg">Download the App</h3>
          <ul className="space-y-1">
            <li><Link>Price-drop alert</Link></li>
            <li><Link>Faster and more secure checkout</Link></li>
            <li><Link>Exclusive offer</Link></li>
            <li><Link>Sitemap</Link></li>
            <li><a href="#">Partner with Us</a></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-start px-6 py-6 border-t border-stone-600 gap-8">
      
        <div>
          <h4 className="text-lg font-semibold mb-2">Follow us</h4>
          <div className="flex flex-wrap gap-3 text-2xl text-white">
            <ion-icon name="logo-instagram"></ion-icon>
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-twitter"></ion-icon>
            <ion-icon name="logo-youtube"></ion-icon>
            <ion-icon name="logo-tiktok"></ion-icon>
            <ion-icon name="logo-pinterest"></ion-icon>
            <ion-icon name="logo-linkedin"></ion-icon>
            <ion-icon name="logo-whatsapp"></ion-icon>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">We accept</h4>
          <div className="flex flex-wrap gap-2">
            {[
              "219cc18d-0462-47ae-bf84-128d38206065",
              "3a626fff-bbf7-4a26-899a-92c42eef809a",
              "936bf9dc-9bb2-4935-9c5a-a70b800d4cf1",
              "a28c1d4b-4d3d-4df3-a83e-8bf72462368d",
              "b79a2dc3-b089-4cf8-a907-015a25ca12f2",
              "c3e5eb19-1b60-4c2b-87e1-4528fb390cbf",
              "da7f463a-916f-4d91-bcbb-047317a1c35e",
              "fb599a1d-6d42-49f2-ba7a-64b16d01b226",
            ].map((img, index) => (
              <img
                key={index}
                src={`${img}.png.slim.webp`}
                alt="payment method"
                className="h-6"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="text-center py-4 border-t border-stone-600 text-xs">
        <p>&copy; 2023 E-commerce Group Project. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;