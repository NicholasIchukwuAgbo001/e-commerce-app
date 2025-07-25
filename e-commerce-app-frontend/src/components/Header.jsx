import { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import Logo from './Logo';
import Highlights from './HighLights';
import SearchBar from './SearchBar';
import UserActions from './UserActions';
import TopHeader from './TopHeader';

const Header = ({ onSearch }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-md text-gray-800 z-50 items-center">
      <TopHeader />

      <div className="flex sm:flex-row items-center justify-between px-10 py-3 gap-5">
        <Logo />

        <div className="hidden md:flex">
          <Highlights />
        </div>

        <SearchBar onSearch={onSearch} />

        <div className="hidden md:flex">
          <UserActions />
        </div>

        <div className="md:hidden">
          {menuOpen ? (
            <IoClose className="text-2xl cursor-pointer" onClick={() => setMenuOpen(false)} />
          ) : (
            <IoMenu className="text-2xl cursor-pointer" onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white px-4 py-4 flex flex-col gap-4 border-t items-center">
          <Highlights />
          <UserActions />
        </div>
      )}
    </header>
  );
};

export default Header;
