import React, { useState } from "react";
import ProfileLayout from "@/layouts/Profile";
import {
  useDeleteBlogMutation,
  useGetAllBlogsQuery,
} from "@/features/blog/blogApi";
import { formatDate } from "@/utils/utils";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import Pagination from "@/components/Pagination/Pagination";

const AllBlogsPage = () => {
  const { data } = useGetAllBlogsQuery();
  const [deleteBlog, { isLoading }] = useDeleteBlogMutation();

  const [sorting, setSorting] = useState("all");

  function capitalizeFirstLetter(str) {
    return `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`;
  }

  // filtering

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const totalPages = Math.ceil(data?.data?.blogs?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // filtering

  const handleSorting = (data) => {
    if (sorting === "all") {
      return data;
    } else {
      return data?.language === sorting;
    }
  };

  const { push } = useRouter();

  const handleEdit = (id) => {
    push(`/blogs/edit/${id}`);
  };

  const handleView = (id) => {
    push(`/blogs/details/${id}`);
  };

  const handleAddBlog = () => {
    push("/blogs/add");
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteBlog(id).then((res) => {
          if (res?.data?.success) {
            Swal.fire({
              title: "Deleted!",
              text: "Your Blog has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });

    // if (window.confirm("Are you really want to delete?")) {
    //   const response = await deleteBlog(id);
    //   if (response?.data?.success) {
    //     alert("Blog deleted successfully!");
    //   }
    // }
  };

  return (
    <div>
      <div className="d-flex justify-content-end mb-4">
        <button onClick={handleAddBlog} className="btn btn-primary">
          Add Blog
        </button>
      </div>
      <div className="d-flex gap-2 mb-4">
        <button onClick={() => setSorting("all")} className="btn btn-primary">
          All
        </button>
        <button
          onClick={() => setSorting("english")}
          className="btn btn-secondary"
        >
          English
        </button>
        <button
          onClick={() => setSorting("german")}
          className="btn btn-warning"
        >
          German
        </button>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Blog Name</th>
            <th scope="col">Language</th>
            <th scope="col">Publish Data</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.blogs &&
            data?.data?.blogs
              ?.slice(startIndex, endIndex)
              .filter(handleSorting)
              .map((item, idx) => (
                <tr>
                  <th scope="row">{idx + 1}</th>
                  <td>{item?.title}</td>
                  <td>{capitalizeFirstLetter(item?.language)}</td>
                  <td>{formatDate(item?.createdAt)}</td>
                  <td>
                    <div className="d-flex gap-1">
                      {/* <button
                      className="btn btn-primary btn-sm"
                      onClick={() => handleEdit(item?._id)}
                    >
                      Edit
                    </button> */}
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(item?._id)}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => handleView(item?._id)}
                      >
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-center mt-5">
        {data?.data?.blogs && data?.data?.blogs?.length > itemsPerPage && (
          <Pagination
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        )}
      </div>
    </div>
  );
};

AllBlogsPage.PageLayout = ProfileLayout;
export default AllBlogsPage;
