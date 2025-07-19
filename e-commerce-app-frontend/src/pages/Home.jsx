import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Subscribe from "../components/Subscribe";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {isLoading && <Loader />}
      <Header />
      <main className="flex-grow overflow-y-auto pt-14">
        <div className="mx-auto  py-6">
          <Outlet />
        </div>
      </main>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
