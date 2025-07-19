import { Link } from "react-router"

const TopHeader = () => {
  return (
    <div className="bg-stone-900 h-8 flex items-center justify-center ">
      <p className="text-white font-sm">Sign up and get 20% off to your first order. <Link className="underline">Sing Up Now</Link> </p>
    </div>
  )
}

export default TopHeader
