/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useEffect, useState } from "react";
import { IProduct } from "../types/globalTypes";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [data, setData] = useState<IProduct[]>([]);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      .then((data) => setData(data?.data));
  }, []);

  // const { toast } = useToast();

  //! Dummy Data

  const status = true;
  const priceRange = 100;

  //! **

  const handleSlider = (value: number[]) => {
    console.log(value);
  };

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

  return (
    <div className="grid grid-cols-12 max-w-7xl mx-auto relative ">
      <div className="col-span-9 grid grid-cols-3 gap-10 pb-20">
        {data?.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}
