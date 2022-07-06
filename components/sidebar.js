import { CgProfile } from "react-icons/cg";
import Image from "next/image";
import {
  MdAddShoppingCart,
  MdOutlineLogout,
  MdOutlineClose,
  MdGroups,
} from "react-icons/md";
import user from "../images/user.png";
import style from "../styles/login.module.css";
import { useGlobalContext } from "../layout/context";
import { useRouter } from "next/router";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  const router = useRouter();
  return (
    <aside
      className={
        isSidebarOpen
          ? ` ${style.overflow} bg-sky-900 text-sm p-4 text-sky-200 w-5/6 sm:w-1/3 md:w-1/4 fixed top-0 h-screen transition duration-200 md:translate-x-0`
          : ` ${style.overflow} bg-sky-900 text-sm p-4 text-sky-200 w-5/6 sm:w-1/3 md:w-1/4 fixed top-0 h-screen transition duration-200 md:translate-x-0 -translate-x-full`
      }
    >
      <div className='sm:hidden'>
        <MdOutlineClose className='text-2xl ml-auto' onClick={closeSidebar} />
      </div>
      <div className='text-center my-8'>
        <Image height={100} width={100} src={user} alt='' />
        <h4>
          Welcome back, <span className='font-bold'>User</span>
        </h4>
      </div>
      <hr />
      <div className='my-3'>
        <div className='flex gap-2 items-center'>
          <CgProfile className='' /> <h4>Dashboard</h4>
        </div>
      </div>
      <hr />
      <div className='my-3'>
        <div className='flex gap-2 items-center'>
          <MdAddShoppingCart className='dash_icons' /> <h4>Cart</h4>
        </div>
        <div className='ml-5'>
          <h5 className='py-2'>
            Total Items: <span className='font-bold'>0</span>{" "}
          </h5>
          <h5 className='py-2'>
            Total Price: <span className='font-bold'>$00.00</span>
          </h5>
        </div>
      </div>
      <hr />
      <div className='my-3'>
        <div className='flex gap-2 items-center'>
          <MdGroups className='dash_icons' /> <h4>Categories</h4>
        </div>
        <div className='ml-5'>
          <h5 className='py-2'>Category</h5>
        </div>
      </div>
      <hr />
      <div className='my-3 cursor-pointer' onClick={() => router.push("/")}>
        <div className='flex gap-2 items-center'>
          <MdOutlineLogout className='dash_icons' />
          <h4 className='logout_icon'>Logout</h4>
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
