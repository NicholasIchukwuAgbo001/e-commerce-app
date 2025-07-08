import { Link } from "react-router-dom"

const NavLinks = () => (
  <>
    <div className="items-center gap-1 cursor-pointer hover:text-orange-600 hover:bg-stone-300 rounded-full px-2 transition">
      <Link to="/best-selling">Best-selling</Link>
    </div>

    <div className="items-center gap-1 cursor-pointer hover:text-orange-600 transition hover:bg-stone-300 rounded-full px-2">
      <Link to="/top-rated">5-star Rating</Link>
    </div>

    <div className="cursor-pointer hover:text-orange-600 hover:bg-stone-300 rounded-full px-2 transition">
      <Link to="/categories">Categories</Link>
    </div>
  </>
)

export default NavLinks
