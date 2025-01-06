import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import { FiEdit } from "react-icons/fi";
import CreatableSelect from "react-select/creatable";

const CreatePostModal = ({ setCreatePostModalOpen }) => {
  const [keywords, setKeywords] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({});

  const values = watch(["keywords", "title", "prompt"]);

  //   const promiseOptions = async (inputValue) => {
  //     const keywords = await getAllCategories();
  //     return filterKeywords(inputValue, keywords);
  //   };

  const onSubmit = (data) => {
    console.log(data);
    setCreatePostModalOpen(false);
  };
// console.log(keywords)
  return (
    <div className="backdrop-blur-sm overflow-scroll shadow-md flex justify-center items-center fixed inset-0 z-[50] bg-black bg-opacity-10 scrollbar-hide">
      <div className="bg-white  lg:w-[400px] w-[350px] h-fit p-4 rounded-md   bottom-[80px] relative top-1">
        <div className="mb-4">
          <h1 className="font-[600]  text-[14px]">Start your post</h1>
          <IoMdClose
            className=" cursor-pointer w-[10px]  absolute top-3 right-5"
            onClick={() => setCreatePostModalOpen(false)}
          />
          <span className="text-[10px] text-[#a8b1be]">
            Fill in your details to create an AI-powered log post effortlessly.
          </span>
        </div>
        <hr />
        <form
          className="flex flex-col gap-4 my-3  "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label
              htmlFor="keywords"
              className="font-[600] flex justify-between  text-[10px] text-gray-400"
            >
              <span>Main keywords(s)</span>
              <span
                className={` font-normal ${
                  values[0]?.length > 80 ? "text-red-600" : "text-[#96a6be]"
                }`}
              >
                {values[0]?.length > 0 ? values[0].length : 0}/80
              </span>
            </label>

            <input
              type="text"
              id="keywords"
              placeholder="Enter the main keyword(s)"
              {...register("keywords", {
                required: "Keyword is required",
                maxLength: {
                  value: 80,
                  message: "Keywords should not exceed 80 characters.",
                },
              })}
              className={`${
                errors.keywords ? " border-red-600" : "border-gray-300 "
              } border text-[10px]   rounded-md p-2 text-gray-600 outline-none appearance-none w-full mt-1 focus:border-gray-700`}
            />

            {/* <CreatableSelect
              //   loadOptions={promiseOptions}
              defaultValue={keywords?.map((keyword) => ({
                value: keyword,
                label: keyword,
              }))}
              isMulti
              onChange={(newValue) =>
                setKeywords(newValue.map((item) => item.value))
              }
              {...register("keywords", {
                required: "Keyword is required",
                maxLength: {
                  value: 80,
                  message: "Keywords should not exceed 80 characters.",
                },
              })}
                placeholder="Enter the main keyword(s)"
                className={` ${
                    errors.max ? " border-red-600" : " "
                    }  text-[10px]   rounded-md p-1 text-gray-600 outline-none appearance-none w-full mt-1 focus:border-gray
                    -700`}

            /> */}
            <p className="text-[#96a6be] text-[10px] mt-2">
              Estimated Monthly Traffic:{" "}
              <span className="font-bold">4,500</span>
            </p>
            {errors.keywords && (
              <p className=" font-medium text-red-600 text-[8px]">
                {errors.keywords.message}
              </p>
            )}
          </div>

          <div>
            <label className="font-[600] flex justify-between text-[10px] text-gray-400">
              <span>Title</span>
              <span
                className={` font-normal ${
                  values[1]?.length > 100 ? "text-red-600" : "text-[#96a6be]"
                }`}
              >
                {values[1]?.length > 0 ? values[1].length : 0}/100
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter post title"
              
              {...register("title", {
                required: "Title is required.",
                maxLength: {
                  value: 100,
                  message: "Title should not exceed 100 characters.",
                },
              })}
              className={`${
                errors.title ? " border-red-600" : "border-gray-300 "
              } border text-[10px]   rounded-md p-2 text-gray-600 outline-none appearance-none w-full mt-1 focus:border-gray-700`}
            />
            {errors.title && (
              <p className=" font-medium text-red-600 text-[8px]">
                {errors.title.message}
              </p>
            )}
          </div>
          <div>
            <label className="font-[600]  text-[10px] text-gray-400 flex justify-between ">
              <span>AI prompt (optional)</span>

              <span
                className={` font-normal ${
                  values[2]?.length > 300 ? "text-red-600" : "text-[#96a6be]"
                }`}
              >
                {values[2]?.length > 0 ? values[2].length : 0}/300
              </span>
            </label>
            <p className="text-[10px] text-[#96a6be]">
              Provide Dexter with custom instructions to personalize your post.
            </p>
            <input
              type="text"
              placeholder="Add custom instructions to tailor your post with Dexter."
              {...register("prompt", {
                required: false,
                maxLength: {
                  value: 300,
                  message: "Prompt should not exceed 300 characters.",
                },
              })}
              className={`${
                errors.prompt ? " border-red-600" : "border-gray-300 "
              } border text-[10px]  mb-3 rounded-md pb-12 px-2 p-2  text-gray-600 outline-none  w-full mt-1 text-sm focus:border-gray-700`}
            />
            {errors.prompt && (
              <p className=" font-medium text-red-600 text-[8px]">
                {errors.prompt.message}
              </p>
            )}
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <p className="text-[#96a6be] w-[150px]  font-normal text-[10px] ">
              Click &apos;Generate&apos; to create an editable post. Results may
              vary.
            </p>
            <button
              className="disabled:bg-opacity-50 flex gap-2 items-center hover:bg-opacity-50 text-white ease-in-out duration-500 w-fit p-2 font-[500] bg-[#6d68fb] mt-3 rounded-lg text-center text-[12px] cursor-pointer"
              disabled={errors.keywords || errors.title || errors.prompt}
            >
              <span>Generate Your Blog Post</span>
              <FiEdit className="text-white" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePostModal;
