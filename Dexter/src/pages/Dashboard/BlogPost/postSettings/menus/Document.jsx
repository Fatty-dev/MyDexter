import { Controller, useFormState } from "react-hook-form"

const Document = () => {
  const {control} = useFormState()

  return (
    <div className="lg:mt-2 md:mt-2 mb-8 max-md:mt-16 relative bg-white border border-gray-300 h-fit shadow-md rounded-lg p-4 lg:w-[84%] md:w-[84%] max-md:w-full ">
      <form className="flex flex-col gap-2">
          <label htmlFor="directory" className="text-#545a67]  text-sm">Save to</label>

          <div className="flex gap-2 text-[#868ea5] lg:w-[30%] max-md:w-[50%] md:w-[50%]  items-center">
            <span className="text-[11px]">Directory: </span>
            <Controller
              name="directory"
              control={control}
              defaultValue="None"
              render={({ field }) => (
                <select
                  {...field}
                  id="directory"
                  className="text-sm w-[60px]  outline-none focus:border-2 focus:border-gray-500 bg-[#e2e1fe] rounded-md border border-gray-300  p-1 "
                >
                  <option value="" disabled>
                    Select an option
                  </option>

                  <option value="Home">Home</option>
                  <option value="option 2">option 2</option>
                  <option value="option 3">option 3</option>
                </select>
              )}
            />

            <span className="text-sm">Change</span>
          </div>
          </form>
    </div>
  )
}

export default Document