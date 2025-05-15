const SkeletonLoader = () => {
  return (
    <div className="animate-pulse flex space-x-4">
      <div className="flex-1 space-y-4 py-1">
        <div className="h-4 bg-[#ECECEC] rounded"></div>
        <div className="h-4 bg-[#F2F4F7] rounded"></div>
        <div className="h-4 bg-[#F2F4F7] rounded w-3/4"></div>
        <div className="h-4 bg-[#F2F4F780] rounded w-1/2"></div>
        <div className="h-4 bg-[#F2F4F780] rounded w-1/3"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
