import { Outlet } from "react-router-dom";
import Navbar from "./Navber";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <Outlet />
      </div>
    </div>
  );
}
