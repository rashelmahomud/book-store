import { RiFacebookBoxFill, RiInstagramLine } from "react-icons/ri";
import logo from "../../public/logo1.png";
export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="bg-gray-500 text-white p-20">
      <div className="flex justify-between">
        <div>
          <img className="" src={logo} alt="logo" />
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-20">
          <ul className="space-y-2">
            <li>Upcoming</li>
            <li>Shipping</li>
            <li>How it works</li>
          </ul>
          <ul className="space-y-2">
            <li>Support</li>
            <li>Careers</li>
          </ul>
          <ul className="space-y-2">
            <li>List your gear</li>
            <li>Contact team</li>
          </ul>
        </div>
        <div className="flex gap-2 text-2xl">
          <RiFacebookBoxFill />
          <RiInstagramLine />
        </div>
      </div>
      <div className="flex w-full mt-20 gap-5">
        <div className="flex gap-5">
          <p>Privacy Policy</p>
          <p>Terms & Condition</p>
        </div>
        <p className="ml-auto"> &#169; horror story {year}</p>
      </div>
    </div>
  );
}
