import { useRouter } from "next/router";

const category = ({ data, cat }) => {
  console.log(data);
  const router = useRouter();
  return (
    <div>
      <h4
        className='hover:border-b-2 border-b-2 border-b-transparent cursor-pointer hover:border-sky-500 font-bold uppercase text-sky-500 p-2 whitespace-nowrap'
        onClick={() => router.push(`/product/?cat=${cat}`)}
      >
        {cat}
      </h4>
    </div>
  );
};

export default category;

export const getServerSideProps = async (context) => {
  const cat = context.params.cat;
  const res = await fetch(`https://fakestoreapi.com/products/category/${cat}`);
  const data = await res.json();
  return {
    props: { data },
  };
};
