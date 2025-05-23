import { useState } from "react";
import logo from "../../assets/Main_Logo.svg";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "@/lib/services/auth.service";

interface Inputs {
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  // Password rules
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasMinLength = password?.length >= 8;
  const hasSpecialChar = /[^A-Za-z0-9]/.test(password);
  const passwordsMatch = password === confirmPassword;

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { mutate, isPending: loading } = useMutation({
    mutationKey: ["signup"],
    mutationFn: registerUser,
  });

  const onSubmit = async (data: Inputs) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    mutate(
      { email: data.email, password: data.password },
      {
        onSuccess: () => {
          toast.success("Signup successful! Redirecting to login...");
          reset();
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        },
        onError: (error) => {
          const errorMessage = error.message || "Something went wrong.";
          toast.error(errorMessage);
        },
      }
    );
  };

  const home = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-0">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg px-6 pb-6 pt-4">
        <div className="text-center">
          <h2 className="text-xl font-medium mb-1">Sign up to</h2>
          <div className="cursor-pointer" onClick={home}>
            <img src={logo} alt="MyDexter Logo" className="mx-auto mb-4" />
          </div>
          <p className="text-gray-500 text-sm mb-6">
            Your personal AI-powered SEO specialist
          </p>
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
              className={`w-full px-2 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary placeholder:text-sm`}
              {...register("email", {
                required: "Email is required",
                pattern: /^\S+@\S+$/i,
              })}
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
              placeholder="Create a password"
              className={`w-full px-2 py-2 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary placeholder:text-sm`}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            <button
              type="button"
              className="absolute top-8 right-3 text-gray-500 focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="mb-6 relative">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="confirmPassword"
              disabled={loading}
              placeholder="Confirm your password"
              className={`w-full px-2 py-2 border ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary placeholder:text-sm`}
              {...register("confirmPassword", {
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
            />

            <div className="text-xs mt-4">
              <p className="font-semibold mb-1">Password must contain:</p>
              <ul className="space-y-1">
                <li
                  className={
                    hasUpperCase
                      ? "text-green-500 line-through"
                      : "text-gray-600"
                  }
                >
                  At least 1 upper case letter (A-Z)
                </li>
                <li
                  className={
                    hasNumber ? "text-green-500 line-through" : "text-gray-600"
                  }
                >
                  At least 1 number (0-9)
                </li>
                <li
                  className={
                    hasSpecialChar
                      ? "text-green-500 line-through"
                      : "text-gray-600"
                  }
                >
                  At least 1 special character (!@#$...)
                </li>
                <li
                  className={
                    hasMinLength
                      ? "text-green-500 line-through"
                      : "text-gray-600"
                  }
                >
                  At least 8 characters
                </li>
              </ul>
            </div>

            <button
              type="button"
              className="absolute top-8 right-3 text-gray-500 focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 bg-primary font-semibold text-white rounded-full shadow ${
              loading
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary"
            }`}
          >
            {loading ? "Signing up..." : "Get started"}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a
            href="#"
            className="text-primary font-medium hover:underline"
            onClick={() => navigate("/login")}
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
