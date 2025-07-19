import Logo from './Logo';
import Highlights from './HighLights';
import SearchBar from './SearchBar';
import UserActions from './UserActions';
import TopHeader from './TopHeader';

const Header = () => {
  return (
    <header className="fixed w-full bg-white shadow-md text-gray-800 z-50">
      <TopHeader />
      <div className="flex sm:flex-row items-center justify-between px-10 py-4 gap-4">
        <Logo />
        <Highlights />
        <SearchBar />
        <UserActions />
      </div>
    </header>
  );
};

export default Header;
