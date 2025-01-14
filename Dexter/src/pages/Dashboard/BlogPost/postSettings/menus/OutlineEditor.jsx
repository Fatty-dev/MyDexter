import React from 'react'
import { Controller, useFormState } from 'react-hook-form'

const OutlineEditor = () => {
  const  {control} = useFormState()
  return (
    <div className="lg:mt-2 md:mt-2 max-md:mt-10 md:mb-8 max-md:mb-8 flex flex-col gap-4 bg-white border border-gray-300 h-fit shadow-md rounded-lg p-4 lg:w-[84%] md:w-[84%] max-md:w-full ">
      <div>
        <p className="text-#545a67] text-[12px]">Enable the OUTLINE editor for your article to gain the ability to add a personalized OUTLINE to your upcoming article, enhancing their structure and relevance</p>
      </div>
      <div className='bg-[#f0f2f5] p-4 rounded-lg'></div>
      <div>
      <div className='flex justify-between'>
      <div className="flex items-start gap-2 text-[#8681fc] text-sm">
          <Controller
            name="enable-editor"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <input type="checkbox" checked = {field.value} name="enable-editor" id="enable-editor" {...field}    />
            )}
          />
          <label htmlFor="enable-eidtor" className="text-[12px] ">
            
        Enable the outline editor
          </label>
        </div>
        <div
                            className="text-[12px] text-gray-500 "
                           
                          >
                            <span>0</span>/<span>500</span>
                          </div>
          
        </div>
      </div>
    </div> 
  )
}

export default OutlineEditor