import Footer from "../layots/Footer";
import banner from "../../public/banner.jpg";
import banner2 from "../../public/banner2.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="grid lg:grid-cols-2  justify-between items-center h-[calc(100vh-80px)] max-w-7xl mx-auto ">
        <div>
          <h1 className="text-6xl font-black text-primary mb-2">
            Horror <br /> Story Books
          </h1>
          <p className="text-secondary font-semibold text-xl">
            Effortless communication at your fingertips
          </p>
          <div className="text-primary mt-20">
            <p>Bluetooth 5.2 for easy, secure communication</p>
            <p>Precise 143 Amoled display for clear visuals</p>
          </div>
          {/* <Button className="mt-5">Learn more</Button> */}
        </div>
        <div className="mx-auto">
          <img className="lg:w-96 p-5 " src={banner2} alt="banner" />
        </div>
      </div>
      <div className="mb-96">
        {/* <div>{<img className="mx-auto" src={banner} alt="" />}</div> */}
        <div className="flex flex-col items-center justify-center mt-10">
          <h1 className="text-5xl font-black text-primary uppercase mt-10">
            The future of tech is here
          </h1>
          <button className="">
            <Link className="font-semibold" to="/products">
              Brows all products
            </Link>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
