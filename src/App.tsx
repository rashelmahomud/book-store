import { onAuthStateChanged } from "firebase/auth";
import "./App.css";
import MainLayout from "./layots/MainLayot";
import { setLoading, setUser } from "./redux/features/user/userSlice";
import { useAppDispatch } from "./redux/hook";
import { auth } from "./lib/firebase";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);
  return (
    <>
      <Toaster />
      <MainLayout />
    </>
  );
}

export default App;
