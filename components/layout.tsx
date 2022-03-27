import { FunctionComponent } from "react"
import UseDarkMode from '../utilities/useDarkMode'
import Image from 'next/image'
import LogoLight from '../public/images/logo/bawal-light-cropped.png'
import LogoDark from '../public/images/logo/bawal-dark-cropped.png'
import Header from "./layout/header"

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
	const [colorTheme, setTheme] = UseDarkMode();
	return (
		<div>
      <Header/>
      { children }
		</div>
	);
};

export default Layout;