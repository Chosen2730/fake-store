import React from "react";
import Product from "../components/product";
import { useEffect } from "react";
import { useGlobalContext } from "../layout/context";
import ProductLayout from "../layout/productLayout";

const product = ({ data }) => {
  const { products, setProducts } = useGlobalContext();
  useEffect(() => {
    setProducts(data);
  }, [data]);

  return (
    <>
      <ProductLayout>
        <div className='my-4 grid sm:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-8 '>
          {products.map((product) => {
            return <Product key={product.id} {...product} />;
          })}
        </div>
      </ProductLayout>
    </>
  );
};

export default product;

export const getStaticProps = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();

  return {
    props: { data },
  };
};
