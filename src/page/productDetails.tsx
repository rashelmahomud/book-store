/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useParams } from "react-router-dom";
import { useSingleProductQuery } from "../redux/features/product/productApi";

export default function ProductDetails() {
  const { id } = useParams();

  const { data: product, isLoading } = useSingleProductQuery(id);

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
