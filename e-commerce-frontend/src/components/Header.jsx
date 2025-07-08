import TopBar from './TopBar';
import Logo from './Logo';
import Highlights from './Highlights';
import SearchBar from './SearchBar';
import UserActions from './UserActions';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md text-gray-800">
      <TopBar />
      <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-4 gap-4">
        <Logo />
        <Highlights />
        <SearchBar />
        <UserActions />
      </div>
    </header>
  );
};

export default Header;
