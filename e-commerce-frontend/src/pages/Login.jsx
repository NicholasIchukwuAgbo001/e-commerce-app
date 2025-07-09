import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader';

const Login = () => {
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> {
    const timer = setTimeout(()=> {
      setIsLoading(false);
    }, 2000)
    return ()=> clearTimeout(timer);
  }, [])
  
  return (
    <div className="flex flex-col min-h-screen">

      {isLoading && <Loader />}

      <Header />

      <main className="flex-grow flex items-center justify-center p-6 pt-40">
        <div className="w-full max-w-md bg-stone-100 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

          <form className="space-y-4">

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter phone number"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Signup
            </Link>
          </p>
        </div>
      </main>

      <Footer />

    </div>
  );
};

export default Login;
