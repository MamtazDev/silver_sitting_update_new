import React from "react";
import ProfileLayout from "@/layouts/Profile";
import {
  useDeleteBlogMutation,
  useGetAllBlogsQuery,
} from "@/features/blog/blogApi";
import { formatDate } from "@/utils/utils";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { useGetAllContactUsQuery } from "@/features/contactUs/contactUsApi";

const AllContactsMessages = () => {
  const { data } = useGetAllContactUsQuery();
  // const [deleteBlog, { isLoading }] = useDeleteBlogMutation();

  console.log(data, "ddd");

  // function capitalizeFirstLetter(str) {
  //   return `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`;
  // }

  const { push } = useRouter();

  const handleEdit = (id) => {
    push(`/blogs/edit/${id}`);
  };

  const handleView = (id) => {
    push(`/blogs/details/${id}`);
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
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">message</th>

            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data?.map((item, idx) => (
              <tr>
                <th scope="row">{idx + 1}</th>
                <td>
                  {item?.firstName} {item?.lastName}
                </td>
                <td>{item?.email}</td>
                <td>{item?.phone}</td>
                <td>{item?.message}</td>
                {/* <td>{capitalizeFirstLetter(item?.language)}</td> */}
                <td>{formatDate(item?.createdAt)}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

AllContactsMessages.PageLayout = ProfileLayout;
export default AllContactsMessages;
