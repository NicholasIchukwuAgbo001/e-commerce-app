import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow overflow-y-auto">
        <div className="mx-auto max-w-6xl px-4 py-6">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div> 
  ) 
}

export default Home
