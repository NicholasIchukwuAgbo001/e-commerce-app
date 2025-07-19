const CustomerReactionCounter = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-10 pt-10">
      <div>
        <p className="text-4xl font-extrabold text-stone-800">200+</p>
        <span className="text-sm text-gray-600">International Brands</span>
      </div>

      <div>
        <p className="text-4xl font-extrabold text-stone-800">2,000+</p>
        <span className="text-sm text-gray-600">High-Quality Products</span>
      </div>

      <div>
        <p className="text-4xl font-extrabold text-stone-800">30,000+</p>
        <span className="text-sm text-gray-600">Happy Customers</span>
      </div>
    </div>
  );
};

export default CustomerReactionCounter;
