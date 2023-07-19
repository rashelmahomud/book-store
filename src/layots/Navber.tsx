import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FiDelete } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../../public/logo1.png";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { setUser } from "../redux/features/user/userSlice";
import Cart from "../components/cart";
import Popup from "reactjs-popup";

const Navber = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const handelLogOut = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    signOut(auth).then(() => {
      dispatch(setUser(null));
    });
  };

  return (
    <div className=" w-full  z-10 top-0 left-0 ">
      <div className="lg:flex items-center justify-between  py-4 lg:px-10 px-10">
        <div className="font-bold text-3xl cursor-pointer flex items-center font-[poppins] text-gray-800 gap-3">
          <span className="text-3xl text-indigo-600">
            <i className="fa-solid fa-headphones"></i>
          </span>
          <Link className="" to="/">
            <img className="w-36" src={logo} alt="logo0" />
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl bg-red absolute right-8 top-5 cursor-pointer lg:hidden"
        >
          {open ? <FiDelete /> : <FaBars />}
        </div>

        <ul
          className={`lg:flex md:items-center md:pb-3 pb-12 absolute lg:static lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
            open
              ? "top-18 opacity-100"
              : "top-[-490px] lg:opacity-100 opacity-0"
          }`}
        >
          <div className="lg:ml-8 lg:my-0 my-7 text-xl cursor-pointer  ">
            <ul className="flex items-center gap-5 ">
              <li className="hover:border-b-2 duration-500 hover:text-blue-400">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:border-b-2 duration-500 hover:text-blue-400">
                <Link to="/products">Products</Link>
              </li>

              {user.email && (
                <li className="hover:border-b-2 duration-500 hover:text-blue-400">
                  <Link to="/checkout">Checkout</Link>
                </li>
              )}
              {user.email && (
                <li>
                  <Popup trigger={<button> Cart</button>}>
                    <Cart />
                  </Popup>
                </li>
              )}
              {user.email && (
                <li className="hover:border-b-2 duration-500 hover:text-blue-400">
                  <Link to="/addbook">Add-Book</Link>
                </li>
              )}

              {!user.email && (
                <li className="hover:border-b-2 duration-500 hover:text-blue-400">
                  <Link to="/login">Login</Link>
                </li>
              )}
              {user.email && (
                <li
                  onClick={handelLogOut}
                  className="hover:border-b-2 duration-500 hover:text-blue-400"
                >
                  <Link to="/login">LogOut</Link>
                </li>
              )}
            </ul>
          </div>

          {/* <Button>LOGIN</Button> */}
          {/* <Button>GET STARTED</Button> */}
        </ul>
      </div>
    </div>
  );
};

export default Navber;
