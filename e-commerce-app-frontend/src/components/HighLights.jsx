const highlights = [
  { label: "Shop"},
  { label: "Sale"},
  { label: "Brands"}
];

const Highlights = () => {
  return (
    <div className="flex gap-4 items-center justify-center text-sm">
      {highlights.map(({ label }) => (
        <div
          key={label}
          className="flex items-center gap-1 hover:bg-stone-100 p-3 rounded-full cursor-pointer transition"
        >
        </div>
      ))}
    </div>
  );
};

export default Highlights;
