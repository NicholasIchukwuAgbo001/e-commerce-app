import TopBanner from './TopBanner'
import Logo from './Logo'
import SearchBar from './SearchBar'
import NavLinks from './NavLinks'
import UserActions from './UserActions'

const Header = () => {
  return (
    <header id="header" className="w-full border-b shadow-sm">
      <TopBanner />

      <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-3 lg:px-12 bg-white">
        <div className="flex items-center gap-4 w-full lg:w-auto justify-between lg:justify-start">
          <Logo />
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <NavLinks />
        </div>

        <div className="flex-1 w-full lg:max-w-xl">
          <SearchBar />
        </div>

        <div className="flex items-center gap-4">
          <UserActions />
        </div>
      </div>
    </header>
  )
}

export default Header
