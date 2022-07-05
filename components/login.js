import Image from "next/image";
import logo from "../images/shopping.png";
import { useRouter } from "next/router";
const Login = () => {
  const router = useRouter();
  return (
    <section className='p-8'>
      <div className='flex flex-col justify-center items-center my-8'>
        <Image
          className='text-center'
          width={200}
          height={50}
          layout='intrinsic'
          src={logo}
          alt='l0go'
        />
      </div>
      <main className='bg-sky-900 p-8 text-gray-300'>
        <h1 className='font-bold text-2xl text-center capitalize my-4'>
          Welcome, please Login!
        </h1>
        <form action='' className='flex flex-col justify-center'>
          <label htmlFor='name' className='text-sm font-normal mt-2'>
            Username
          </label>
          <input
            className='block p-2 mt-2 text-sm text-black mb-1 bg-sky-200'
            type='name'
            id='name'
            required
          />
          <label htmlFor='password' className='text-sm font-normal mt-2'>
            Password
          </label>
          <input
            className='block p-2 mt-2 text-sm text-black mb-1 bg-sky-200'
            type='password'
            id='password'
            required
          />
          {/* <p className='warning'>Hello</p> */}
          <input
            className='cursor-pointer bg-sky-400 my-4 text-gray-50 p-2'
            type='submit'
            value='Login'
            onClick={() => router.push("/product")}
          />
          <h5 className='text-center text-xs text-sky-200'>
            Forgotten password?
          </h5>
        </form>
      </main>
    </section>
  );
};
export default Login;
