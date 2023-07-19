/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useParams } from "react-router-dom";
import { IProduct } from "../types/globalTypes";
import { useEffect, useState } from "react";

export default function ProductDetails() {
  const { id } = useParams();

  // const { data: product, isLoading } = useSingleProductQuery(id);

  //! Temporary code, should be replaced with redux
  const [data, setData] = useState<IProduct[]>([]);
  useEffect(() => {
    void fetch("http://localhost:5000/product")
      .then((res) => res.json())
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
      .then((data) => setData(data?.data));
  }, []);

  const product = data?.find((item: IProduct) => item._id === Number(id));

  // //! Temporary code ends here

  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[50%]">
          <img src={product?.img} alt="" />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{product?.name}</h1>
          <p className="text-xl">Rating: {product?.rating}</p>

          <button>Add to cart</button>
        </div>
      </div>
      {/* <ProductReview /> */}
    </>
  );
}
