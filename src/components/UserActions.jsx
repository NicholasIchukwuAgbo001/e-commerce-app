import React from 'react'
import { Link } from 'react-router-dom'

const UserActions = () => (
  <>
    <Link to="login" className="flex items-center gap-1 hover:text-orange-600 transition hover:bg-stone-300 rounded-full p-3">
      <span>Account</span>
    </Link>

    <div  className="flex items-center gap-1 hover:text-orange-600 transition cursor-pointer hover:bg-stone-300 rounded-full p-3">
      <span>Support</span>
    </div>

    <Link className="relative flex items-center hover:text-orange-600 transition hover:bg-stone-300 rounded-full px-2">
      <span className="bg-red-500 text-white rounded-full text-xs px-1">0</span>
    </Link>

    <div className="hidden lg:flex flex-col items-center">
      <span className="text-sm user-name-display"></span>
      <button id="logout-btn" className="text-xs text-red-500 hover:underline">Logout</button>
    </div>
  </>
)

export default UserActions
