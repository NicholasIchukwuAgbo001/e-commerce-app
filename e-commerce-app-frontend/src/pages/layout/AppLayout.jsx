import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import Subscribe from "../../components/Subscribe";
import Footer from "../../components/Footer";

const AppLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {isLoading && <Loader />}
      <Header onSearch={setSearchTerm} />
      <main className="flex-grow overflow-y-auto pt-14">
        <div className="mx-auto  py-6">
          <Outlet context={searchTerm} />
        </div>
      </main>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default AppLayout;
