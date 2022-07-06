import React from "react";
import Layout from "../layout/layout";
import { BsSearch } from "react-icons/bs";
import style from "../styles/login.module.css";
import Product from "../components/product";

const product = ({ data }) => {
  const categories = ["all", ...new Set(data.map(({ category }) => category))];

  return (
    <>
      <Layout>
        <main className='mt-20 md:ml-auto md:w-3/4 p-4 flex flex-col items-center justify-center'>
          <form
            action=''
            className='bg-white shadow-md p-3 px-8 text-sm flex justify-center items-center rounded-lg space-x-3 max-w-md mt-5'
          >
            <input
              type='text'
              placeholder='Search product'
              className='w-full bg-transparent '
            />
            <BsSearch />
          </form>
          <div
            className={`${style.overflowX} flex space-x-4 text-sm p-2 items-center my-5 w-full md:justify-center`}
          >
            {categories.map((cat, i) => {
              return (
                <h4
                  key={i}
                  className='hover:border-b-2 border-b-2 border-b-transparent cursor-pointer hover:border-sky-500 font-bold uppercase text-sky-500 p-2 whitespace-nowrap'
                >
                  {cat}
                </h4>
              );
            })}
          </div>
          <div className='my-4 grid sm:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-8 '>
            {data.map((product) => {
              return <Product key={product.id} {...product} />;
            })}
          </div>
        </main>
      </Layout>
    </>
  );
};

export default product;
export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return {
    props: { data: data },
  };
};
