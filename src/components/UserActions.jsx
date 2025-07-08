import React from 'react'

const UserActions = () => (
  <>
    <a href="login.html" className="flex items-center gap-1 hover:text-orange-600 transition">
      <ion-icon name="person-add-outline"></ion-icon>
      <span>Account</span>
    </a>

    <div className="flex items-center gap-1 hover:text-orange-600 transition cursor-pointer">
      <ion-icon name="chatbubble-outline"></ion-icon>
      <span>Support</span>
    </div>

    <a href="cart.html" className="relative flex items-center hover:text-orange-600 transition">
      <ion-icon name="cart-outline"></ion-icon>
      <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1">0</span>
    </a>

    <div className="hidden lg:flex flex-col items-center">
      <span className="text-sm user-name-display"></span>
      <button id="logout-btn" className="text-xs text-red-500 hover:underline">Logout</button>
    </div>
  </>
)

export default UserActions
