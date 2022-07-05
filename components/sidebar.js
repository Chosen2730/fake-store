import { CgProfile } from "react-icons/cg";
import {
  MdAddShoppingCart,
  MdOutlineLogout,
  MdOutlineClose,
  MdGroups,
} from "react-icons/md";

const Sidebar = () => {
  return (
    <aside className=''>
      <div className='close_sidebar'>
        <MdOutlineClose />
      </div>
      <div className='user_profile'>
        <img className='user_img' src='' alt='' />
        <h4>
          Welcome back, <span className=''>User</span>
        </h4>
      </div>
      <hr />
      <div className=''>
        <div className=''>
          <CgProfile className='' /> <h4>Dashboard</h4>
        </div>
      </div>
      <hr />
      <div className=''>
        <div className=''>
          <MdAddShoppingCart className='dash_icons' /> <h4>Cart</h4>
        </div>
        <div className='cart_items_cont'>
          <h5>Total Items: 0 </h5>
          <h5>Total Price: $00.00</h5>
          <button className='cart_clear'>Clear Cart</button>
        </div>
      </div>
      <hr />
      <div className='dash_items'>
        <div className='item_cont'>
          <MdGroups className='dash_icons' /> <h4>Categories</h4>
        </div>
        <div className='cart_items_cont cat'>
          <h5>Category</h5>
        </div>
      </div>
      <hr />
      <div className='dash_items'>
        <a href='/'>
          <div className='item_cont'>
            <MdOutlineLogout className='dash_icons' />
            <h4 className='logout_icon'>Logout</h4>
          </div>
        </a>
      </div>
    </aside>
  );
};
export default Sidebar;
