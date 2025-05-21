import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { publicApi } from "../../lib/config/axios-instance";
import { toast } from "sonner";
import logo from "../../assets/Main_Logo.svg";
import useEmailStore, {
  useAuthStore,
  useUserPlatformSiteStore,
  useUserSubscriptionTypeStore,
} from "../../lib/store/global.store";
import { jwtDecode } from "jwt-decode";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/lib/services/auth.service";
import { useModal } from "@/lib/contexts/modal-context";
import Modal from "@/components/Common/Modals";
interface Inputs {
  email: string;
  password: string;
}

const Login = () => {
  return (
    <div
      className={`flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-0`}
    >
      <LoginBody />
    </div>
  );
};

interface Props {
  isModal?: boolean;
}

const LoginBody = ({ isModal }: Props) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const { setEmail } = useEmailStore();
  const { setType } = useUserSubscriptionTypeStore();
  const { setExpiresIn, setAccessToken } = useAuthStore();

  const { hideModal } = useModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { mutate, isPending: loading } = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
  });

  const { setSite } = useUserPlatformSiteStore();

  const onSubmit = async (body: Inputs) =>
    mutate(body, {
      onSuccess: (data) => {
        setExpiresIn(jwtDecode(data.accessToken).exp! * 1000);
        setEmail(data.user.email);
        setAccessToken(data.accessToken);

        const oauth = data.user.oauth;

        if (oauth.shopify && oauth.shopify.length > 0) {
          const connectedShopify = oauth.shopify[0];
          console.log(
            "Connected Shopify Store Name:",
            connectedShopify.storeName
          );
          setSite("shopify", connectedShopify);
        }

        const wordpress = data.user.platforms.wordpress;
        if (wordpress && wordpress.sites.length > 0) {
          const connectedWordPress = wordpress.sites[0];
          console.log("Connected WordPress URL:", connectedWordPress.url);
          setSite("wordpress", connectedWordPress);
        }

        setType(data.user.subscription.type);
        if (isModal) {
          hideModal();
        } else {
          navigate("/dashboard");
        }
      },
      onError: (error) => {
        const errorMessage = error?.message || "Something went wrong.";
        toast.error(errorMessage);
      },
    });

  const home = () => {
    navigate("/dashboard");
  };

  return (
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
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
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
          onClick={() => (navigate("/signup"), hideModal())}
        >
          Sign up here
        </a>
      </p>
    </div>
  );
};

export const LoginModal = () => {
  const { hideModal } = useModal();

  return (
    <Modal onClose={hideModal}>
      <LoginBody isModal />
    </Modal>
  );
};

export default Login;
