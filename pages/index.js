import Head from "next/head";
import Login from "../components/login";
import style from "../styles/login.module.css";

const Home = () => {
  return (
    <>
      <div
        className={`${style.login} flex min-h-screen flex-col items-center justify-center py-2 bg-gray-500`}
      >
        <Head>
          <title>Shopping</title>
          <link rel='icon' href='/favicon.png' />
        </Head>
        <Login />
      </div>
    </>
  );
};

export default Home;
