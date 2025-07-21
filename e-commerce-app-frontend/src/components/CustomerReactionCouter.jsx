import CountUp from "react-countup";

const stats = [
  { value: 200, suffix: "+", label: "International Brands" },
  { value: 2000, suffix: "+", label: "High-Quality Products" },
  { value: 30000, suffix: "+", label: "Happy Customers" },
];

const CustomerReactionCounter = () => {
  return (
    <div className="flex sm:flex-row items-center gap-10 pt-10">
      {stats.map((stat, index) => (
        <div key={index} className="text-center sm:text-left">
          <p className="text-4xl font-extrabold text-stone-800 hover:scale-105 transition duration-300 ease-in-out">
            <CountUp end={stat.value} duration={8} separator="," />
            {stat.suffix}
          </p>
          <span className="text-sm text-gray-600 sm:text-white">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CustomerReactionCounter;
