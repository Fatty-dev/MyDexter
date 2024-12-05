const prompts = [
    "Performance and Optimization",
    "Visibility and Traffic",
    "Content and Keywords",
    "Quality and Usability",
    "Backlinks",
    "Keywords",
    "Domain Authority",
  ];
  
  const PromptTags = () => (
    <div className="flex flex-wrap justify-center mt-6 gap-4 w-full  mx-auto md:w-[80%] ">
      {prompts.map((prompt, index) => (
        <button
          key={index}
          className="flex items-center px-4 py-2 text-sm sm:text-md bg-white rounded-full shadow hover:bg-gray-200"
        >
          {prompt}
        </button>
      ))}
    </div>
  );
  
  export default PromptTags;
  