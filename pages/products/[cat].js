import React from "react";
import { useEffect } from "react";
import Product from "../../components/product";
import { useGlobalContext } from "../../layout/context";
import ProductLayout from "../../layout/productLayout";

const category = ({ data }) => {
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

export default category;

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${params.cat}`
  );
  const data = await res.json();

  return {
    props: { data },
  };
};
