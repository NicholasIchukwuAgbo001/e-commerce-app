import { IoChevronDownOutline } from "react-icons/io5";

const Highlights = () => {
  return (
    <div className="flex gap-4 items-center justify-center text-sm">
      <div className="flex items-center gap-1 hover:bg-stone-100 p-3 rounded-full cursor-pointer">
        <span>Shop</span>
        <IoChevronDownOutline className="text-stone-900 text-xl" />
      </div>
      <div className="flex items-center gap-1 hover:bg-stone-100 py-3 px-5 rounded-full cursor-pointer">
        <span>Sale</span>
      </div>
      <div className="hover:bg-stone-100 p-3 rounded-full cursor-pointer">
        <span>Brands</span>
      </div>
    </div>
  );
};

export default Highlights;
