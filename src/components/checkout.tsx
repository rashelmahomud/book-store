import { useAppSelector } from "../redux/hook";

export default function Checkout() {
  const { products } = useAppSelector((state) => state.cart);

  return (
    <div className="flex justify-center items-center h-[calc(100vh-80px)] gap-10 text-primary">
      <div className="max-w-lg w-full">
        <h1 className="mb-2">Order Summery</h1>
        <div className="border border-gray-300 rounded-md h-[60vh] p-10 flex flex-col">
          <div className="flex-grow  mb-2 space-y-2 overflow-auto">
            {products.map((product) => (
              <div className="flex justify-between items-center bg-gray-100 p-1 rounded-lg">
                <div className="flex items-center">
                  <img
                    src={product.img}
                    className="h-[82px] rounded-md mr-2"
                    alt=""
                  />
                  <div>
                    <h1 className="text-lg mb-2">{product.name}</h1>
                    <p>Price: {product.price}</p>
                  </div>
                </div>
                <div>
                  <h1 className="text-4xl mr-5">{product.quantity}</h1>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-lg">
              <p>Subtotal</p>
              <p>77.90$</p>
            </div>
            <div className="flex justify-between text-lg">
              <p>Delivery</p>
              <p>4.5$</p>
            </div>
            <div className="flex justify-between text-xl font-bold">
              <p>Total</p>
              <p>81.95$</p>
            </div>
            <button className="w-full">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
