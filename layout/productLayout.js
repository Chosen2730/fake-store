import React from "react";
import Layout from "../layout/layout";
import { BsSearch } from "react-icons/bs";
import style from "../styles/login.module.css";
import Product from "../components/product";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useGlobalContext } from "../layout/context";
import Category from "../components/category";

const product = ({ data, children }) => {
  const { products, setProducts } = useGlobalContext();
  const router = useRouter();
  const categories = [
    "jewelery",
    "men's clothing",
    "electronics",
    "women's clothing",
  ];
  useEffect(() => {
    setProducts(data);
  }, [data]);

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
                  onClick={() => router.push(`/products/${cat}`)}
                >
                  {cat}
                </h4>
              );
            })}
          </div>
          <main>{children}</main>
        </main>
      </Layout>
    </>
  );
};

export default product;
