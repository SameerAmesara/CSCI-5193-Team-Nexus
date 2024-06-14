import { useEffect, useState } from "react";
import { MetaData } from "../components/MetaData";
import {
  AiOutlineMail,
  AiOutlineUnlock,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { TbLoader2 } from "react-icons/tb";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { useSelector } from "react-redux";

export const Login = () => {
  const { loading, isLogin } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin, navigate]);

  return (
    <>
      <MetaData title="Login" />
      <div className="bg-gray-3002 min-h-screen flex justify-center items-center">
        <form
          onSubmit={handleLogin}
          className="bg-gray-900 text-white rounded-lg p-8 shadow-lg md:w-1/3 w-full mx-8"
        >
          <div className="text-center mb-6">
            <Link to="/">
              <div className="flex items-center justify-center">
                <MdOutlineBusinessCenter size={40} className="mr-2" />
                <p className="text-5xl font-bold">InsuraMart</p>
              </div>
            </Link>
            <p className="text-lg font-medium text-yellow-500 pt-[1rem] font-bold">
              "Browse. Compare. Insure."
            </p>
          </div>
          <div className="text-center mb-6">
            <p className="text-4xl font-medium">Login</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center bg-gray-800 rounded px-3 py-2">
              <AiOutlineMail size={20} className="text-gray-400" />
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                placeholder="Email"
                type="email"
                className="bg-transparent outline-none w-full text-white px-3 py-2"
              />
            </div>
            <div className="flex items-center bg-gray-800 rounded px-3 py-2">
              <AiOutlineUnlock size={20} className="text-gray-400" />
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                className="bg-transparent outline-none w-full text-white px-3 py-2"
              />
              <div
                className="text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <AiOutlineEye size={20} />
                ) : (
                  <AiOutlineEyeInvisible size={20} />
                )}
              </div>
            </div>
            <button
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 px-8 w-full py-2 mt-4 rounded font-semibold"
            >
              {loading ? (
                <TbLoader2 className="animate-spin" size={24} />
              ) : (
                "Login"
              )}
            </button>
            <div className="text-center text-sm pt-2">
              <p>
                Don't have an account?{" "}
                <Link to="/register" className="text-yellow-400 underline">
                  Register
                </Link>{" "}
                here.
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
