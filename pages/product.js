import React from "react";
import Layout from "../layout/layout";
import { BsSearch } from "react-icons/bs";
import style from "../styles/login.module.css";
import Product from "../components/product";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useGlobalContext } from "../layout/context";

const product = ({ data }) => {
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

  const getAllProducts = async () => {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const allProducts = await res.json();
    setProducts(allProducts);
  };

  // useEffect(() => {
  //   getAllProducts();
  // }, []);

  console.log(products);
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
                  className='hover:border-b-2 border-b-2 border-b-transparent cursor-pointer hover:border-sky-500 font-bold uppercase text-sky-500 p-2 whitespace-nowrap select-none'
                  onClick={() => router.push(`/product/?cat=${cat}`)}
                >
                  {cat}
                </h4>
              );
            })}
          </div>
          <div className='my-4 grid sm:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-8 '>
            {products.map((product) => {
              return <Product key={product.id} {...product} />;
            })}
          </div>
        </main>
      </Layout>
    </>
  );
};

export default product;

export const getServerSideProps = async (context) => {
  const cat = context.query.cat;
  const url = `https://fakestoreapi.com/products/category/${cat}`;
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: { data: data },
  };
};
// export const getStaticPaths = async () => {
//   const res = await fetch(`https://fakestoreapi.com/products`);
//   const data = await res.json();

//   const paths = data.map((obj) => {
//     return {
//       params: { cat: obj.category },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context) => {
//   const cat = context.query.cat;
//   const res = await fetch(`https://fakestoreapi.com/products/category/${cat}`);
//   const data = await res.json();

//   return {
//     props: { data },
//   };
// };
