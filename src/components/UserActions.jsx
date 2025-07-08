import React from 'react'
import { Link } from 'react-router-dom'

const UserActions = () => (
  <>
    <Link className="flex items-center gap-1 hover:text-orange-600 transition">
      <span>Account</span>
    </Link>

    <div className="flex items-center gap-1 hover:text-orange-600 transition cursor-pointer">
      <span>Support</span>
    </div>

    <Link className="relative flex items-center hover:text-orange-600 transition">
      <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1">0</span>
    </Link>

    <div className="hidden lg:flex flex-col items-center">
      <span className="text-sm user-name-display"></span>
      <button id="logout-btn" className="text-xs text-red-500 hover:underline">Logout</button>
    </div>
  </>
)

export default UserActions
