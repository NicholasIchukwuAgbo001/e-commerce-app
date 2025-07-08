import React from 'react'

const NavLinks = () => (
  <>
    <div className="flex items-center gap-1 cursor-pointer hover:text-orange-600 transition">
      <ion-icon name="star-outline"></ion-icon>
      <span>Best-selling</span>
    </div>

    <div className="flex items-center gap-1 cursor-pointer hover:text-orange-600 transition">
      <ion-icon name="sparkles-outline"></ion-icon>
      <span>5-star Rating</span>
    </div>

    <div className="cursor-pointer hover:text-orange-600 transition">
      <span>Categories</span>
    </div>
  </>
)

export default NavLinks
