const Form = () => {
  return (
    <div>
      <div className="max-w-xl mx-auto px-4 lg:pt-8 pb-8 text-center">
        {/* Tagline */}
        <div className="bg-layer inline-flex px-2 py-1 rounded-lg mb-4">
          <p className="text-sm font-normal text-primary py-1 px-3">Contact</p>
        </div>

        <h1 className="text-[2.5rem] md:text-[3rem] font-semibold text-gray-900 mb-4">
          Get in touch with us.{" "}
          <span className="text-indigo-600">We're here to assist you.</span>
        </h1>
      </div>

      <div className="w-[90%] mx-auto md:w-auto mb-[6rem]">
        <form>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-md font-normal text-gray-700 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-primary"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-md font-normal text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-primary"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-md font-normal text-gray-700 mb-2"
              >
                Phone Number (optional)
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-md font-normal text-gray-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full border-b resize-none border-gray-300 focus:outline-none focus:border-primary"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-start">
            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 font-semibold rounded-2xl hover:bg-primary transition inline-flex items-center"
            >
              Leave us a Message <span className="ml-2 text-lg">&#8594;</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
