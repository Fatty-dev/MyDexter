import { BlogPost } from "@/lib/types/blog";
import Guy from "../../../assets/Guy.svg";
import { FaRegEdit } from "react-icons/fa";
import { PiCopySimpleBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

interface BlogPostCardProps {
  blog: BlogPost;
}

const BlogPostCard = ({ blog }: BlogPostCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden transition-shadow duration-300 bg-white border rounded-lg shadow-lg group hover:shadow-xl">
      {/* Card Header */}
      <div className="bg-[#E4E4F2] p-4">
        <h3 className="text-black font-semibold flex items-center justify-center gap-2">
          <FaRegEdit size={22} className="text-[#94A3B8]" />
          Blog post
        </h3>
      </div>

      {/* Card Content */}
      <div className="px-4 pt-4">
        <h4 className="font-bold text-gray-800">{blog.title}</h4>

        <img
          src={blog.images[0].url || Guy}
          alt="Blog"
          className="object-cover w-full h-32 mt-4"
        />
      </div>

      <div className="p-4 border-t">
        <p
          className="mt-1 line-clamp-3 text-sm text-gray-600"
          dangerouslySetInnerHTML={{
            __html: blog.content,
          }}
        />
        <p className="mt-1 text-sm text-gray-500">
          {blog.keywords || "No Keyword"}
        </p>
        <div className="flex items-center gap-2 mt-2 text-sm">
          <div className="px-2 py-1 text-yellow-600 bg-yellow-100 rounded-full">
            {blog.status}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-end gap-2 p-4 transition-opacity duration-300 bg-white opacity-0 pointer-events-none bg-opacity-80 group-hover:opacity-100 group-hover:pointer-events-auto">
        <button
          className="flex items-center justify-center w-full gap-2 px-4 py-2 text-white rounded bg-primary"
          onClick={() => navigate(`/dashboard/blog-post/${blog._id}`)}
        >
          Continue Editing
          <FaRegEdit />
        </button>
        <button
          className="bg-white w-full border flex items-center gap-2 justify-center text-[#475467] px-4 py-2 rounded"
          onClick={() => navigate(`/dashboard/bulk-article`)}
        >
          Create Articles in Bulk
          <PiCopySimpleBold />
        </button>
      </div>
    </div>
  );
};

export default BlogPostCard;
