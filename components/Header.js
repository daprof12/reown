import Image from "next/image";
import { SearchIcon,
          GlobeAltIcon,
          UserCircleIcon,
          MenuIcon,
          UsersIcon,
} from '@heroicons/react/solid';

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
     
      {/* Left logo */}
      <div className="relative flex items-center h-10 cursor-pointer">
          <Image 
            src="https:links.papareact.com/qd3"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
      </div>
      {/* Middle search */}
      <div className="flex items-center rounded-full py-2 md:border-2 md:shadow-sm">
        <input type="text" placeholder="start your search" className="flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-grey-400"  />
        <SearchIcon className=" hidden h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:inline-flex md:mx-2"/>
      </div>
      {/* Right Profile Button */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2  p-2 rounded-full shadow-sm">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
      
    </header>

  );
}

export default Header