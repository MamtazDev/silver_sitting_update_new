import React, { useState } from "react";
import ProfileLayout from "@/layouts/Profile";

import { formatDate } from "@/utils/utils";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import {
  useDeleteFeedbackMutation,
  useGetAllFeedbacksQuery,
} from "@/features/feedbacks/feedbacksApi";
import Pagination from "@/components/Pagination/Pagination";

const AllFeedbacksPage = () => {
  const { data } = useGetAllFeedbacksQuery();

  const [deleteFeedback, { isLoading }] = useDeleteFeedbackMutation();

  function capitalizeFirstLetter(str) {
    return `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`;
  }

  // filtering

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const totalPages = Math.ceil(data?.data?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // filtering

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
        deleteFeedback(id).then((res) => {
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
            <th scope="col">Feedback</th>
            <th scope="col">Rating</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data?.slice(startIndex, endIndex).map((item, idx) => (
              <tr>
                <th scope="row">{idx + 1}</th>
                <td>
                  {item?.firstName} {item?.lastName}
                </td>
                <td>{item?.email}</td>
                <td>{item?.phone}</td>
                <td>{item?.feedbackMessage}</td>
                <td>{item?.rating}</td>
                {/* <td>{capitalizeFirstLetter(item?.language)}</td> */}
                <td>{formatDate(item?.createdAt)}</td>
                <td>
                  {" "}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(item?._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-center mt-5">
        {data && data?.length > itemsPerPage && (
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

AllFeedbacksPage.PageLayout = ProfileLayout;
export default AllFeedbacksPage;
