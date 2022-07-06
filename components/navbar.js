import { MdAddShoppingCart, MdOutlineMenu } from "react-icons/md";
import Image from "next/image";
import logo from "../images/shopping.png";
import { useGlobalContext } from "../layout/context";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <nav className='bg-sky-50 fixed shadow-md flex justify-between items-center p-5 px-10 font-bold text-sky-600 w-screenmd:w-3/4 sm:ml-auto md:right-0 top-0'>
      <div className='md:hidden'>
        <MdOutlineMenu className='text-2xl' onClick={openSidebar} />
      </div>
      <div className='w-1/5 sm:w-1/4 lg:w-1/5 flex flex-col justify-center items-center'>
        <Image layout='' src={logo} alt='logo' />
      </div>
      <div className=''>
        <a href=''>All Products</a>
      </div>
      <a href=''>
        <div className='flex justify-center items-center text-xl text-red-400'>
          <MdAddShoppingCart />
          <h5 className='-translate-y-3 text-sky-500'>0</h5>
        </div>
      </a>
    </nav>
  );
};
export default Navbar;
