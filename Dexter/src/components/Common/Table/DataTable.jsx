import React from "react";

const DataTable = ({
  tableHeaderTitleList,
  isFetching,
  isLoading,
  postsData,
  children,
}) => {
  return (
    
      <div className="relative w-full mt-5">
        <div className="py-8">
          <div className="  overflow-x-auto sm:-mx-8 sm:px-8">
            <div className="inline-block min-w-full overflow-hidden rounded-lg">
              <div className="flex flex-row justify-between w-full ">
                <div className="w-full  bg-white ">
                  <div className="relative "></div>
                </div>
                <table className="min-w-full leading-normal relative">
                  <thead>
                    <tr>
                      {tableHeaderTitleList.map((post, index) => (
                        <th
                          key={index}
                          scope="col"
                          className="lg:first-of-type:pl-14 px-2 py-3  text-[11px]  text-left text-[#677282]  bg-white border-b border-gray-200"
                        >
                          <p className="flex items-center gap-3">
                            {post.title}
                            {post.icon && (
                              <span className="ml-2">{post.icon}</span>
                            )}
                          </p>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading || isFetching ? (
                      <tr>
                        <td colSpan={8} className="w-full py-10 text-center">
                          Loading...
                        </td>
                      </tr>
                    ) : postsData?.length === 0 ? (
                      <tr>
                        <td colSpan={8} className="w-full py-10 text-center">
                          No records found
                        </td>
                      </tr>
                    ) : (
                      children
                    )}
                  </tbody>
                </table>
                {/* {!isLoading && (
                <Pagination
                  onPageChange={(page) => setCurrentPage(page)}
                  currentPage={currentPage}
                  totalPageCount={1}
                />
              )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default DataTable;
