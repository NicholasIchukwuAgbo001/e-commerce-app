import { Link } from "react-router-dom"

const NavLinks = () => (
  <>
    <div className="items-center gap-1 cursor-pointer hover:text-orange-600 transition">
      <Link>Best-selling</Link>
    </div>

    <div className="items-center gap-1 cursor-pointer hover:text-orange-600 transition">
      <Link>5-star Rating</Link>
    </div>

    <div className="cursor-pointer hover:text-orange-600 transition">
      <Link>Categories</Link>
    </div>
  </>
)

export default NavLinks
