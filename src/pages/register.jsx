import { useState, useEffect } from "react";
import { MetaData } from "../components/MetaData";
import {
  AiOutlineMail,
  AiOutlineUnlock,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";
import { MdPermIdentity, MdOutlineBusinessCenter } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { TbLoader2 } from "react-icons/tb";
import { useSelector } from "react-redux";

export const Register = () => {
  const { loading, isLogin } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    skills: "",
    avatar: "",
    avatarName: "",
    resume: "",
    resumeName: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "avatar" || name === "resume") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setUserData((prevState) => ({
            ...prevState,
            [name]: reader.result,
            [`${name}Name`]: files[0].name,
          }));
        }
      };
      reader.readAsDataURL(files[0]);
    } else {
      setUserData((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, avatar } = userData;
    setUserData({
      name: "",
      email: "",
      password: "",
      avatar: "",
      avatarName: "",
    });
  };

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin, navigate]);

  const { name, email, password, avatar, avatarName } = userData;

  return (
    <>
      <MetaData title="Register" />
      <div className="bg-gray-3002 min-h-screen flex justify-center items-center text-black">
        <form
          onSubmit={handleSubmit}
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
            <p className="text-4xl font-medium">Register</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center bg-gray-800 rounded px-3 py-2">
              <MdPermIdentity size={20} className="text-gray-400" />
              <input
                name="name"
                value={name}
                onChange={handleChange}
                required
                placeholder="Full name"
                type="text"
                className="bg-transparent outline-none w-full text-white px-3 py-2"
              />
            </div>
            <div className="flex items-center bg-gray-800 rounded px-3 py-2">
              <AiOutlineMail size={20} className="text-gray-400" />
              <input
                name="email"
                value={email}
                onChange={handleChange}
                required
                placeholder="Email"
                type="email"
                className="bg-transparent outline-none w-full text-white px-3 py-2"
              />
            </div>
            <div className="flex items-center bg-gray-800 rounded px-3 py-2">
              <AiOutlineUnlock size={20} className="text-gray-400" />
              <input
                name="password"
                value={password}
                onChange={handleChange}
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
            <div className="flex items-center bg-gray-800 rounded px-3 py-2">
              <div className="text-gray-400 px-2">
                {avatar ? (
                  <img
                    src={avatar}
                    alt="avatar"
                    className="w-[3em] h-[2.5em] rounded-full"
                  />
                ) : (
                  <CgProfile size={20} />
                )}
              </div>
              <label
                htmlFor="avatar"
                className="bg-transparent outline-none w-full cursor-pointer text-white px-3 py-2"
              >
                {avatarName || (
                  <span className="text-gray-500 font-medium">
                    Select Profile Pic...
                  </span>
                )}
              </label>
              <input
                id="avatar"
                name="avatar"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleChange}
                required
              />
            </div>
            <button
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 px-8 w-full py-2 mt-4 rounded font-semibold"
            >
              {loading ? (
                <TbLoader2 className="animate-spin" size={24} />
              ) : (
                "Register"
              )}
            </button>
            <div className="text-center text-sm pt-2">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="text-yellow-400 underline">
                  Login
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
