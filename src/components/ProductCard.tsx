import { Link } from "react-router-dom";
import { IProduct } from "../types/globalTypes";
import { useAppDispatch } from "../redux/hook";
import { addToCart } from "../redux/features/cart/cartSlice";
import { toast } from "react-hot-toast/headless";

interface IProps {
  product: IProduct;
}

export default function ProductCard({ product }: IProps) {
  const dispatch = useAppDispatch();
  const handleAddProduct = (product: IProduct) => {
    dispatch(addToCart(product));
    toast("Product Added");
  };
  return (
    <div className="rounded-2xl h-[480px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
      <Link to={`/product-details/${product._id}`} className="w-full">
        <img className="w-3/4" src={product?.img} alt="product" />
        <h1 className="text-xl font-semibold">{product?.name}</h1>
      </Link>
      <p>Rating: {product?.rating}</p>
      <p className="text-sm">
        Availability: {product?.status ? "In stock" : "Out of stock"}
      </p>
      <p className="text-sm">Price: {product?.price}</p>
      <button
        className="border py-2 px-3"
        onClick={() => handleAddProduct(product)}
      >
        Add to cart
      </button>
    </div>
  );
}
