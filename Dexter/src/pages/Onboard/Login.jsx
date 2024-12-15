import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { publicApi } from "../../lib/config/axios-instance";
import toast from "react-hot-toast"; 
import logo from "../../assets/Main_Logo.svg";
import useEmailStore from "../../lib/store/global.store";



const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); 
   const {setEmail} = useEmailStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const { data: res } = await publicApi.post("/auth/login", {
        email: data.email,
        password: data.password,
      });

      toast.success("Login successful! Redirecting to dashboard...");
      localStorage.setItem("accessToken", res.data.accessToken);
      setEmail(res.data.user.email)
      navigate("/dashboard");
    } catch (error) {
      console.log({error})
      const errorMessage =
        error.response?.data?.message || "Something went wrong.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
      reset();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <div className="text-center">
          <img src={logo} alt="MyDexter Logo" className="mx-auto mb-4" />
          <p className="text-gray-500 text-sm mb-6">
            Your personal AI-powered SEO specialist
          </p>
          <h2 className="text-xl font-medium mb-1">Sign in to your account</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary placeholder:text-sm"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Create a password"
              {...register("password", { required: "Password is required" })}
              className="w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary placeholder:text-sm"
            />
            <button
              type="button"
              className="absolute right-2 top-8"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <FaRegEyeSlash className="text-gray-500" />
              ) : (
                <FaRegEye className="text-gray-500" />
              )}
            </button>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={loading} // Disable button during loading
            className={`w-full py-2 px-4 font-semibold text-white rounded-full shadow ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary"
            }`}
          >
            {loading ? "Loading..." : "Login"} {/* Conditional rendering */}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-500">
          Not a My Dexter user yet?{" "}
          <a
            href="#"
            className="text-primary font-medium hover:underline"
            onClick={() => navigate("/signup")}
          >
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
