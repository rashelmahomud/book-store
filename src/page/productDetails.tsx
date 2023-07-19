/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useNavigate, useParams } from "react-router-dom";
import {
  useDeleteBookMutation,
  useSingleProductQuery,
} from "../redux/features/product/productApi";
import ProductReview from "../components/productReview";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: product, isLoading } = useSingleProductQuery(id);
  const [deleteBook, { isSuccess: deleteSucces }] = useDeleteBookMutation();
  console.log("hello", deleteBook);

  const handelDelete = (id: any) => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    deleteBook(id);
    navigate("/products");
  };
  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[50%]">
          <img className="lg:w-96" src={product?.img} alt="" />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{product?.name}</h1>
          <p className="text-xl">Rating: {product?.rating}</p>
          <p className="text-xl">Page: {product?.pages}</p>
          <p className="text-xl">Formet: {product?.format}</p>
          <p className="text-xl">Details:: {product?.details}</p>

          <button className="font-semibold">Add to cart</button>
          <button
            onClick={() => handelDelete(product._id)}
            className=" btn btn-error"
          >
            Delete{" "}
          </button>
        </div>
      </div>
      <ProductReview id={id!} />
    </>
  );
}
