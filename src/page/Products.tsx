/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useGetProductQuery } from "../redux/features/product/productApi";
import { IProduct } from "../types/globalTypes";

export default function Products() {
  const [query, setQuery] = useState("");
  const [searchProduct, setSearchProduct] = useState([]);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data, isLoading } = useGetProductQuery(undefined);

  const searchText = (e: any) => {
    // event.prevenDefault();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setQuery(e.target.value);
    const searchProduct = data?.data?.filter((p: IProduct) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setSearchProduct(searchProduct);
  };
  return (
    <div className="grid lg:grid-cols-12 grid-cols-1 max-w-7xl mx-auto relative ">
      <div className="col-span-3 z mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start lg:sticky top-16 h-[calc(100vh-80px)]">
        <input
          type="text"
          placeholder="Find Your Product"
          className="input input-bordered input-primary w-full px-3 py-2 border max-w-xs "
          value={query}
          onChange={searchText}
        />
      </div>

      <div className="col-span-9 grid lg:grid-cols-3 grid-cols-1  gap-10 pb-20">
        {searchProduct.length
          ? searchProduct.map((product) => (
              <ProductCard product={product}></ProductCard>
            ))
          : data?.data?.map((product: IProduct) => (
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
