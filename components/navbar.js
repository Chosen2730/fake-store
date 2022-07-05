import { MdAddShoppingCart, MdOutlineMenu } from "react-icons/md";
const Navbar = () => {
  return (
    <nav>
      <div className='menu_icon'>
        <MdOutlineMenu />
      </div>
      <div className='logo_cont'>
        <img className='logo' src='' alt='logo' />
      </div>
      <div className='product_link'>
        <a href=''>Products</a>
      </div>
      <div className='cart_cont'>
        <a href=''>
          <MdAddShoppingCart />
          <h5 className='cart_amount'>0</h5>
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
