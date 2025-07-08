const Highlights = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center text-sm">
      <div className="flex items-center gap-1 hover:bg-stone-100 p-3 rounded-full">
        <ion-icon name="star-outline" class="text-orange-500 text-xl"></ion-icon>
        <span>Best-selling items</span>
      </div>
      <div className="flex items-center gap-1 hover:bg-stone-100 p-3 rounded-full">
        <ion-icon name="sparkles-outline" class="text-orange-500 text-xl"></ion-icon>
        <span>5-star Rating</span>
      </div>
      <div className="hover:bg-stone-100 p-3 rounded-full">
        <span className="font-medium">Categories</span>
      </div>
    </div>
  );
};

export default Highlights;
