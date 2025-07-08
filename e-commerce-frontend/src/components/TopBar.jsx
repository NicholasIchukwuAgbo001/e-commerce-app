const TopBar = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 px-4 py-1 bg-stone-950 text-sm">
      <div className="flex items-center gap-2 hover:bg-stone-600 p-2 rounded-full cursor-pointer">
        <ion-icon name="car-sport-outline" class="text-orange-500 text-2xl"></ion-icon>
        <div>
          <h3 className="font-semibold text-white">Free Shipping on all Orders »</h3>
          <span className="text-xs text-white">limited-time-offer</span>
        </div>
      </div>
      <div className="flex items-center gap-2 hover:bg-stone-600 p-2 rounded-full cursor-pointer">
        <ion-icon name="bus-outline" class="text-orange-500 text-2xl"></ion-icon>
        <div>
          <h3 className="font-semibold text-white">Delivery guarantee</h3>
          <span className="text-xs text-white">Refund for any issues</span>
        </div>
      </div>
      <div className="flex items-center gap-2 hover:bg-stone-600 p-3 rounded-full cursor-pointer">
       <ion-icon name="phone-portrait-outline" class="text-orange-500 text-2xl"></ion-icon>
        <h3 className="font-semibold text-white">Get the App</h3>
      </div>
    </div>
  );
};

export default TopBar;
