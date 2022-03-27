import Link from 'next/link';
import Image from 'next/image';
import UseDarkMode from '../../../utilities/useDarkMode';
import LogoLight from '../../../public/images/logo/bawal-light-cropped.png';
import LogoDark from '../../../public/images/logo/bawal-dark-cropped.png';

const Logo = () => {
  const [colorTheme] = UseDarkMode();
  return (
    <>
      {colorTheme === "light" ? (
        <>
        <Link href={"/"}>
          <div><Image alt="Bawal logo" layout="fixed" height={40} width={190} src={LogoDark} /></div>
        </Link>
        </>
      ) : (
        <>
        <Link href={"/"}>
          <div><Image alt="Bawal logo" layout="fixed" height={40} width={190} src={LogoLight} /></div>
        </Link>
        </>
      )}
    </>
  );
}

export default Logo;