import { VscAdd } from "react-icons/vsc";
import { FiMoreHorizontal } from "react-icons/fi";
const Product = ({ id, image, price, title }) => {
  return (
    <>
      <div
        key={id}
        className='cursor-pointer group bg-white shadow-md w-full flex flex-col items-center justify-center space-y-3'
      >
        <img className='h-40 object-contain p-1 pt-3' src={image} alt='' />

        <h4 className='my-2 font-bold text-sm p-2'>{title.slice(0, 25)}...</h4>
        <h4 className='font-bold text-xl text-red-400'>${price}</h4>
        <div className='flex w-full font-bold'>
          <button className='bg-sky-200 text-sky-500 text-xs p-2 w-fit flex items-center justify-center'>
            <FiMoreHorizontal />
          </button>
          <button className='bg-sky-600 text-sky-100 text-xs p-2 w-full flex items-center justify-center'>
            <VscAdd className='mr-4' />
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};
export default Product;
