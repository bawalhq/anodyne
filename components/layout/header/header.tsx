import Logo from "./logo";
import Nav from "./nav";
import Search from "./search";
import ThemeToggle from "./theme-toggle";

const Header = () => {
  return (
      <header className="dark:bg-black bg-white-200 dark:text-white text-black">
          <div className="flex justify-between items-center">
            <div className="flex-grow"><Logo/></div>
            <div><Nav/></div>
            <div className="pr-2"><Search/></div>
            <div><ThemeToggle/></div>
          </div>
      </header>
  );
}

export default Header;