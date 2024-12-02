import React, { useEffect, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const SearchParameters = {
  ALL: "all",
  CAMPAIGNS: "campaigns",
  VOLUNTEERS: "volunteers",
  GALLERY: "gallery",
  USERS: "users",
};



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParameter, setSearchParameter] = useState(SearchParameters.ALL);
  const searchInputRef = useRef(null);

  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const isActive = (path: string) => {
    if (path === "/" && currentPath === "/") return true;
    if (path !== "/" && currentPath.startsWith(path)) return true;
    return false;
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "AboutUs", label: "About" },
    { path: "/User", label: "User" },
    { path: "/Campaigns", label: "Campaigns" },

    { path: "/Gallery", label: "Gallery" },
    { path: "/Contact", label: "Contact" },
  ];

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setSearchQuery("");
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Searching for "${searchQuery}" in ${searchParameter}`);
    window.location.href = `/search?q=${searchQuery}&type=${searchParameter}`;
  };
  const navigate = useNavigate()
  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <header className="sticky top-0 z-10 bg-white shadow-sm">
      <div className="container flex items-center justify-between px-3 py-6 mx-auto">
        <div className={`flex items-center space-x-4 pr-5 ${isSearchOpen ? 'hidden md:flex' : 'flex'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-[#4ade80]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
          <h1 className="text-2xl font-bold">Futo 1k</h1>
        </div>

        <nav className={`hidden md:flex space-x-8 ${isSearchOpen ? 'hidden lg:flex' : ''}`}>
          {navLinks.map(({ path, label }) => (
            <Link
              to={path}
              key={path}

              onClick={(e) => {
                e.preventDefault();
                handleNavigation(path)
                console.log(`Navigate to: ${path}`);
              }}
              className={`${isActive(path) ? 'text-[#4ade80] font-bold' : 'text-gray-600 hover:text-[#4ade80]'} transition-colors duration-200`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className={`${isSearchOpen ? 'flex' : 'hidden'} flex-1 mx-4 lg:mx-8`}>
          <form onSubmit={handleSearch} className="flex items-center w-full gap-2">
            <div className="relative flex-1">
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#4ade80]"
              />
              <select

                name="Search"
                id="search-type"
                value={searchParameter}
                onChange={(e) => setSearchParameter(e.target.value)}
                className="absolute py-1 pl-2 pr-8 text-gray-600 -translate-y-1/2 bg-transparent border-l border-gray-300 right-2 top-1/2 focus:outline-none"
              >
                <option value={SearchParameters.ALL}>All</option>
                <option value={SearchParameters.CAMPAIGNS}>Campaigns</option>
                <option value={SearchParameters.VOLUNTEERS}>Volunteers</option>
                <option value={SearchParameters.GALLERY}>Gallery</option>
                <option value={SearchParameters.USERS}>Users</option>
              </select>
            </div>
            <button
              placeholder="Search"
              type="button"
              onClick={toggleSearch}
              className="p-2 text-gray-600 hover:text-[#4ade80]"
            >
              <X className="w-5 h-5" />
            </button>
          </form>
        </div>

        <div className={`hidden md:flex items-center space-x-4 ${isSearchOpen ? 'hidden lg:flex' : ''}`}>
          <button
            onClick={() => handleNavigation('/login')}
            className="px-4 py-2 border border-[#4ade80] text-[#4ade80] rounded-md hover:bg-[#4ade80] hover:text-white transition-colors"
          >
            Login
          </button>
          <button
            onClick={() => handleNavigation('/register')}
            className="px-4 py-2 bg-[#4ade80] text-white rounded-md hover:bg-[#2ecc71] transition-colors"
          >
            Signup
          </button>
          <button
            onClick={toggleSearch}
            className="text-gray-600 hover:text-[#4ade80]"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>

        <button
          onClick={toggleMenu}
          className={`md:hidden text-gray-600 ${isSearchOpen ? 'hidden' : ''}`}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <button
          onClick={toggleSearch}
          className={`md:hidden text-gray-600 ${isSearchOpen ? 'hidden' : ''}`}
          aria-label="Search"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>

      {isMenuOpen && (
        <div className="bg-white shadow-lg md:hidden">
          <nav className="flex flex-col px-4 py-2">
            {navLinks.map(({ path, label }) => (
              <Link
                to={path}
                key={path}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(path)
                  setCurrentPath(path);
                  console.log(`Navigate to: ${path}`);
                }}
                className={`py-2 border-b border-gray-100 ${currentPath === path ? 'text-[#4ade80] font-bold' : 'text-gray-600 hover:text-[#4ade80]'}`}
              >
                {label}
              </Link>
            ))}

          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;