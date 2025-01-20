import  { useState } from 'react'

const General = () => {
  // Dropdown options dataset
const themeOptions = ["System", "Dark", "Light"];

  const [theme, setTheme] = useState("Light");
  return (
    <div className=" bg-white shadow-md mt-4 mb-8 max-md:mt-24 rounded-lg p-6">
    {/* Theme */}
    <div className="flex items-center justify-between py-4 border-b">
      <span className="text-gray-700">Theme</span>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="px-3 py-2 border rounded-md outline-none bg-gray-200 cursor-pointer "
      >
        {themeOptions.map((option, index) => (
          <option key={index} value={option} className='bg-white'>
            {option}
          </option>
        ))}
      </select>
    </div>

    {/* Language */}
    <div className="flex items-center justify-between py-4 border-b">
      <span className="text-gray-700">Language</span>
      <button className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300">
        English
      </button>
    </div>

    {/* Archived Posts */}
    <div className="flex items-center justify-between py-4 border-b">
      <span className="text-gray-700">Archived posts</span>
      <button className="px-4 py-2 text-primary border border-pprimary rounded hover:bg-purple-50">
        Archive all
      </button>
    </div>

    {/* Delete All Posts */}
    <div className="flex items-center justify-between py-4">
      <span className="text-gray-700">Delete all posts</span>
      <button className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700">
        Archive all
      </button>
    </div>
  </div>
  )
}

export default General