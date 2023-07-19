/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hook";
import { loginUser } from "../redux/features/user/userSlice";

interface LoginFormInputs {
  email: string;
  password: string;
}

export default function Login() {
  const { register, handleSubmit } = useForm<LoginFormInputs>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handelGoogleLogin = () => {
    console.log("hello");
  };
  const onSubmit = (data: LoginFormInputs) => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    dispatch(loginUser({ email: data.email, password: data.password }));
    navigate("/");
  };
  return (
    <div className="flex h-screen items-center">
      <div className="w-1/3">
        {/* <img src={img} className="w-full" alt="" /> */}
      </div>

      <div className="mt-20 w-1/3 grid place-items-center">
        <div className="bg-[#FFFAF4] rounded-lg  p-10">
          <h1 className="mb-10 font-medium text-2xl">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-3">
              <div className="flex flex-col rounded">
                <label htmlFor="email" className="ml-5">
                  Email
                </label>
                <input
                  type="email"
                  className="bg-gray-50 p-2"
                  {...register("email")}
                  id="email"
                />
              </div>
              <div className="flex flex-col ">
                <label htmlFor="password" className="ml-5">
                  Password
                </label>
                <input
                  type="password"
                  className="bg-gray-50 p-2"
                  id="password"
                  {...register("password")}
                />
              </div>
              <div className="relative !mt-8">
                <button
                  type="submit"
                  className="font-bold text-white py-3 rounded-full bg-blue-500 w-full"
                >
                  Login
                </button>
              </div>
              <div>
                <p>
                  Don't have an account?{" "}
                  <span
                    className="text-primary hover:underline cursor-pointer"
                    onClick={() => navigate("/signup")}
                  >
                    Sign up
                  </span>
                </p>
              </div>
              <button
                type="button"
                onClick={handelGoogleLogin}
                className="font-bold text-white py-3 rounded-full bg-blue-500 w-full"
              >
                Login With Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
