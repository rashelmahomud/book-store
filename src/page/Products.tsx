/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import ProductCard from "../components/ProductCard";
import { useGetProductQuery } from "../redux/features/product/productApi";
import { IProduct } from "../types/globalTypes";

export default function Products() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data, isLoading } = useGetProductQuery(undefined);

  return (
    <div className="grid grid-cols-12 max-w-7xl mx-auto relative ">
      <div className="col-span-9 grid grid-cols-3 gap-10 pb-20">
        {data?.data?.map((product: IProduct) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}

// let productsData;

// if (status) {
//   productsData = data.filter(
//     (item) => item.status === true && item.price < priceRange
//   );
// } else if (priceRange > 0) {
//   productsData = data.filter((item) => item.price < priceRange);
// } else {
//   productsData = data;
// }
