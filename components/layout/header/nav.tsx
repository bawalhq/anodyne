import Link from "next/link";
import { useState } from "react";
import MenuIcon from "../../icons/menu";

const Links = () => {
  return (
    <>
      <Link href="/blog"><a className="block pr-2">Blog</a></Link>
      <Link href="/store"><a className="block pr-2">Store</a></Link>
      <Link href="/people"><a className="block pr-2">People</a></Link>
      <Link href="/testimony"><a className="block pr-2">Testimony</a></Link>
      <Link href="/careers"><a className="block pr-2">Careers</a></Link>
      <Link href="/contact"><a className="block pr-2">Contact</a></Link>
    </>
  )
}

const Nav = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <nav>
      <div className="hidden sm:flex">
        <Links/>
      </div>
      <div className="sm:hidden relative">
        <div className="dark:text-white text-black">
          <button className="btn-icon" onClick={() => setShowMenu(!showMenu)}>
            <MenuIcon/>
          </button>
        </div>
        {showMenu && (
          <div className="absolute top-10 right-0 z-50 dark:bg-black bg-white shadow-xl rounded p-2">
            <Links/>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;