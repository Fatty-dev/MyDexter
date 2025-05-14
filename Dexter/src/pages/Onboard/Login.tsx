import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { publicApi } from "../../lib/config/axios-instance";
import toast from "react-hot-toast";
import logo from "../../assets/Main_Logo.svg";
import useEmailStore, {
  useAuthStore,
  useUserPlatformSiteStore,
  useUserSubscriptionTypeStore,
} from "../../lib/store/global.store";
import { jwtDecode } from "jwt-decode";

interface Inputs {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const { setEmail } = useEmailStore();
  const { setType } = useUserSubscriptionTypeStore();
  const { setExpiresIn, setAccessToken } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { setSite } = useUserPlatformSiteStore();

  const onSubmit = async (body: any) => {
    setLoading(true);

    try {
      const {
        data: { data },
      } = await publicApi.post("/auth/login", {
        email: body.email,
        password: body.password,
      });

      localStorage.setItem("accessToken", data.accessToken);

      // @ts-ignore
      setExpiresIn(jwtDecode(data.accessToken).exp * 1000);

      const user = data.user;
      setEmail(user.email);

      setAccessToken(data.accessToken);

      // Check for connected OAuth services
      if (user.oauth.shopify && user.oauth.shopify.length > 0) {
        const connectedShopify = user.oauth.shopify[0]; // Get the first connected Shopify store
        console.log(
          "Connected Shopify Store Name:",
          connectedShopify.storeName
        ); // Log the store name
        setSite("shopify", connectedShopify); // Set the site for Shopify
      } else if (
        user.oauth.wordpress &&
        user.oauth.wordpress.sites.length > 0
      ) {
        const connectedWordPress = user.oauth.wordpress.sites[0]; // Get the first WordPress site
        console.log("Connected WordPress URL:", connectedWordPress.url); // Log the WordPress URL
        setSite("wordpress", connectedWordPress); // Set the site for WordPress
      }

      setType(user.subscription.type);
      navigate("/dashboard");
    } catch (error: any) {
      console.log(error);
      const errorMessage =
        error.response?.data?.message || "Something went wrong.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
      reset();
    }
  };

  const home = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-0">
      <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="text-center">
          <div className="cursor-pointer" onClick={home}>
            <img src={logo} alt="MyDexter Logo" className="mx-auto mb-4" />
          </div>
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
              disabled={loading}
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
              disabled={loading}
              placeholder="Enter password"
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
            disabled={loading}
            className={`w-full py-2 px-4 font-semibold bg-primary text-white rounded-full shadow ${
              loading
                ? "opacity-50 cursor-not-allowed"
                : "bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary"
            }`}
          >
            {loading ? "Loading..." : "Login"}
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
