import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { resetPassword } from "@/lib/services/auth.service";
import { useSearchParams, useNavigate } from "react-router-dom";

type FormValues = {
  newPassword: string;
  confirmPassword: string;
};

const ResetPasswordForm = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token") as string;

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onChange" });

  const newPassword = watch("newPassword");
  const confirmPassword = watch("confirmPassword");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  // Password rules
  const hasUpperCase = /[A-Z]/.test(newPassword);
  const hasNumber = /[0-9]/.test(newPassword);
  const hasMinLength = newPassword?.length >= 8;
  const hasSpecialChar = /[^A-Za-z0-9]/.test(newPassword);
  const passwordsMatch = newPassword === confirmPassword;

  const allConditionsMet =
    passwordsMatch &&
    hasUpperCase &&
    hasNumber &&
    hasMinLength &&
    hasSpecialChar;

  const { mutate, isPending } = useMutation({
    mutationFn: resetPassword,
    mutationKey: ["resetPassword"],
  });

  const onSubmit = (data: FormValues) => {
    if (
      !passwordsMatch ||
      !hasUpperCase ||
      !hasNumber ||
      !hasMinLength ||
      !hasSpecialChar
    )
      return;

    mutate(
      { token, newPassword: data.newPassword },
      {
        onSuccess: () => {
          toast.success("Password changed successfully");
          navigate("/");
        },
        onError: (error) => {
          toast.error(error.message);
        },
      }
    );
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md lg:min-w-[500px] mx-auto p-6 bg-white rounded-md border border-gray-200">
        <h2 className="text-2xl font-semibold mb-6">Change your password</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block font-medium">New Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("newPassword", { required: true })}
                className="w-full p-2 pr-10 border rounded mt-1 placeholder:text-sm"
                placeholder="Enter your new password"
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div>
            <label className="block font-medium">Confirm New Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("confirmPassword", { required: true })}
                className="w-full p-2 pr-10 border rounded mt-1 placeholder:text-sm"
                placeholder="Confirm your new password"
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {confirmPassword && passwordsMatch && (
              <p className="text-sm text-green-500 mt-1">Passwords match</p>
            )}
          </div>

          <div className="text-xs mt-4">
            <p className="font-semibold mb-1">Password must contain:</p>
            <ul className="space-y-1">
              <li
                className={
                  hasUpperCase ? "text-green-500 line-through" : "text-gray-600"
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
                  hasMinLength ? "text-green-500 line-through" : "text-gray-600"
                }
              >
                At least 8 characters
              </li>
            </ul>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-md duration-300 hover:ring-2 hover:ring-primary ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isPending || !allConditionsMet}
          >
            {isPending ? "Changing password..." : "Change my password"}
          </button>

          <p className="text-sm text-gray-500">
            Return back to{" "}
            <span
              className="text-primary font-medium cursor-pointer"
              onClick={() => navigate("/")}
            >
              home
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
