"use client";

import Modal from "@/components/Common/Modals";
import { useModal } from "@/lib/contexts/modal-context";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "@/lib/services/auth.service";
import { toast } from "sonner";

interface Inputs {
  email: string;
}

const ForgotPasswordModal = () => {
  const { hideModal } = useModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { mutate, isPending: loading } = useMutation({
    mutationKey: ["forgotPassword"],
    mutationFn: forgotPassword,
  });

  const onSubmit = (data: Inputs) =>
    mutate(data, {
      onSuccess: () => {
        toast.success("Reset link sent to email");
        hideModal();
      },
      onError: (error: any) => {
        toast.error(error.message);
      },
    });

  return (
    <Modal onClose={hideModal} className="bg-white rounded-lg p-4">
      <div className="space-y-4">
        <div className="">
          <p className="text-2xl font-semibold">Forgot Password</p>
          <p className="text-gray-500">
            Please enter your email to reset your password
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
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

          <button
            type="submit"
            className="w-full bg-primary text-white px-4 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default ForgotPasswordModal;
