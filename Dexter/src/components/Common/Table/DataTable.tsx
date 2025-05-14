import React from "react";
import { FaMinus } from "react-icons/fa";

interface Props {
  tableHeaderTitleList: {
    title: string;
    icon?: React.ReactNode;
  }[];
  isFetching: boolean;
  isLoading: boolean;
  postsData: any[];
  children: React.ReactNode;
}

const DataTable = ({
  tableHeaderTitleList,
  isFetching,
  isLoading,
  postsData,
  children,
}: Props) => {
  return (
    <div className="relative w-full  mt-5 max-md:overflow-x-auto">
      <div className="py-8">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full overflow-hidden rounded-lg">
            <div className="flex flex-row justify-between w-full ">
              <div className="w-full bg-white ">
                <div className="relative "></div>
              </div>
              <table className="relative min-w-full  table-auto leading-normal ">
                <thead>
                  <tr>
                    {tableHeaderTitleList.map((item, index) => (
                      <th
                        key={index}
                        scope="col"
                        className={`px-2 py-3    text-[11px]    text-left text-[#677282]  bg-white border-b border-gray-200  ${
                          (item.title === "Keywords" ||
                            item.title === "Published Date") &&
                          "hidden lg:table-cell"
                        }`}
                      >
                        <div className="flex items-center gap-3 md:gap-1">
                          {item.title === "Post Title" && (
                            <div className="bg-[#6d68fb] relative right-2 w-5 h-5 rounded-[5px] p-1   text-white cursor-pointer text-[9px]  ">
                              <FaMinus className="ml-[0.3px]" />
                            </div>
                          )}
                          {item.title}
                          {item.icon && (
                            <span className="ml-2">{item.icon}</span>
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {isLoading || isFetching ? (
                    <tr>
                      <td colSpan={8} className="w-full py-10 text-center">
                        <p className="font-bold text-gray-400">
                          All blog posts will appear here
                        </p>
                        <p className="text-gray-400 text-[10px]">
                          Until then, continue reviewing, scheduling, and
                          publishing your available bog posts.
                        </p>
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
