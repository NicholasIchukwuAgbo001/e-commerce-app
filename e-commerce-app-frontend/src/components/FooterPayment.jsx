const paymentImages = [
  "219cc18d-0462-47ae-bf84-128d38206065",
  "3a626fff-bbf7-4a26-899a-92c42eef809a",
  "936bf9dc-9bb2-4935-9c5a-a70b800d4cf1",
  "a28c1d4b-4d3d-4df3-a83e-8bf72462368d",
  "b79a2dc3-b089-4cf8-a907-015a25ca12f2",
  "c3e5eb19-1b60-4c2b-87e1-4528fb390cbf",
  "da7f463a-916f-4d91-bcbb-047317a1c35e",
  "fb599a1d-6d42-49f2-ba7a-64b16d01b226",
];

const FooterPayment = () => {
  return (
    <div>
      {/* <h4 className="text-lg font-semibold mb-2">We accept</h4>
      <div className="flex flex-wrap gap-2 cursor-pointer">
        {paymentImages.map((img, index) => (
          <img
            key={index}
            src={`${img}.png.slim.webp`}
            alt="payment method"
            className="h-6"
          />
        ))}
      </div> */}
    </div>
  );
};

export default FooterPayment;
