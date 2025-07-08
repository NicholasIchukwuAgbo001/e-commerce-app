const TopBar = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 px-4 py-2 bg-orange-50 text-sm">
      <div className="flex items-center gap-2">
        <ion-icon name="car-sport-outline" class="text-orange-500 text-xl"></ion-icon>
        <div>
          <h3 className="font-semibold">Free Shipping on all Orders »</h3>
          <span className="text-xs text-gray-500">limited-time-offer</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <ion-icon name="bus-outline" class="text-orange-500 text-xl"></ion-icon>
        <div>
          <h3 className="font-semibold">Delivery guarantee</h3>
          <span className="text-xs text-gray-500">Refund for any issues</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <ion-icon name="phone-portrait-outline" class="text-orange-500 text-xl"></ion-icon>
        <h3 className="font-semibold">Get the App</h3>
      </div>
    </div>
  );
};

export default TopBar;
