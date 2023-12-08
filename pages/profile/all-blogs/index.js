import React from "react";
import ProfileLayout from "@/layouts/Profile";
import {
  useDeleteBlogMutation,
  useGetAllBlogsQuery,
} from "@/features/blog/blogApi";
import { formatDate } from "@/utils/utils";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

const AllBlogsPage = () => {
  const { data } = useGetAllBlogsQuery();
  const [deleteBlog, { isLoading }] = useDeleteBlogMutation();

  function capitalizeFirstLetter(str) {
    return `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`;
  }

  const { push } = useRouter();

  const handleEdit = (id) => {
    push(`/blogs/edit/${id}`);
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
            data?.data?.blogs?.map((item, idx) => (
              <tr>
                <th scope="row">{idx + 1}</th>
                <td>{item?.title}</td>
                <td>{capitalizeFirstLetter(item?.language)}</td>
                <td>{formatDate(item?.createdAt)}</td>
                <td>
                  <div className="d-flex gap-1">
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => handleEdit(item?._id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(item?._id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

AllBlogsPage.PageLayout = ProfileLayout;
export default AllBlogsPage;
