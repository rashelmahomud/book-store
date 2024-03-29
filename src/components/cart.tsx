import {
  addToCart,
  removeOneFromCart,
  removeToCart,
} from "../redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { HiMinus, HiOutlinePlus, HiOutlineTrash } from "react-icons/hi";
export default function Cart() {
  const { products } = useAppSelector((state) => state.cart);
  console.log(products, "prod");

  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="space-y-5 p-3 w-full rounded bg-gray-50">
        {products.map((product) => (
          <div
            className="border h-36 p-5 flex justify-between rounded-md"
            key={product.name}
          >
            <div className="border-r pr-5 shrink-0">
              <img src={product?.img} alt="" className="h-full" />
            </div>
            <div className="px-2 w-full flex flex-col gap-3">
              <h1 className="self-center">{product?.name}</h1>
              <p>Quantity: {product.quantity}</p>
              <p className="text-xl">
                Total Price: {(product.price * product.quantity!).toFixed(2)} $
              </p>
            </div>
            <div className="border-l pl-5 flex flex-col justify-between">
              <button onClick={() => dispatch(addToCart(product))}>
                <HiOutlinePlus size="20" />
              </button>
              <button onClick={() => dispatch(removeOneFromCart(product))}>
                <HiMinus size="20" />
              </button>
              <button
                onClick={() => dispatch(removeToCart(product))}
                className="bg-red-500 rounded-full p-2 hover:bg-red-400"
              >
                <HiOutlineTrash size="20" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
