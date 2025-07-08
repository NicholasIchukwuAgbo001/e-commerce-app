const TopBanner = () => {
  return (
    <div className="flex flex-wrap justify-center lg:justify-between items-center text-xs lg:text-sm bg-gray-100 px-4 py-2 lg:px-12 gap-4">
      <div className="items-center gap-2 hover:bg-stone-300 rounded-full px-2">
          <h3 className="font-medium">Free Shipping on all Orders »</h3>
          <span className="text-gray-500">limited-time-offer</span>
      </div>

      <div className="items-center gap-2 hover:bg-stone-300 rounded-full px-2">
          <h3 className="font-medium">Delivery guarantee</h3>
          <span className="text-gray-500">Refund for any issues</span>
      </div>

      <div className="flex items-center gap-2 hover:bg-stone-300 rounded-full px-2">
        <h3 className="font-medium">Get the App</h3>
      </div>
    </div>
  )
}

export default TopBanner
