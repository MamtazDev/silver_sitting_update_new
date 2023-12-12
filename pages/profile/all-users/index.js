import React, { useState } from "react";
import ProfileLayout from "@/layouts/Profile";
import { formatDate } from "@/utils/utils";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import {
  useDeleteUserMutation,
  useGetAllUsersQuery,
} from "@/features/register/registerApi";
import Pagination from "@/components/Pagination/Pagination";

const AllusersPage = () => {
  const { data } = useGetAllUsersQuery();
  const [sortingUser, setSortingUser] = useState("all");
  console.log(data?.length, "ddd");
  const [deleteUser, { isLoading }] = useDeleteUserMutation();

  //   function capitalizeFirstLetter(str) {
  //     return `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`;
  //   }

  // filtering

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const totalPages = Math.ceil(data?.data?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // filtering

  const handleSorting = (data) => {
    if (sortingUser === "all") {
      return data;
    } else {
      return data?.role === sortingUser;
    }
  };

  const handleDelete = async (id) => {
    console.log(id, "idd");
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
        deleteUser(id).then((res) => {
          console.log(res, "ress");
          if (res?.data?.status === 200) {
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
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
      <div className="d-flex gap-2 mb-4">
        <button
          onClick={() => setSortingUser("all")}
          className="btn btn-primary"
        >
          All
        </button>
        <button
          onClick={() => setSortingUser("parents")}
          className="btn btn-secondary"
        >
          Parents
        </button>
        <button
          onClick={() => setSortingUser("childcarer")}
          className="btn btn-warning"
        >
          Childcarer
        </button>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">User Name</th>
            <th scope="col">Role</th>
            <th scope="col">Email</th>
            <th scope="col">Verified</th>
            <th scope="col">Join Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.data &&
            data?.data
              ?.slice(startIndex, endIndex)
              .filter(handleSorting)
              .map((item, idx) => (
                <tr>
                  <th scope="row">{idx + 1}</th>
                  <td>
                    {item?.firstName} {item?.lastName}
                  </td>
                  {/* <td>{capitalizeFirstLetter(item?.language)}</td> */}
                  <td>{item?.role}</td>
                  <td>{item?.email}</td>
                  <td>{item?.isVerified ? "Yes" : "No"}</td>
                  <td>{formatDate(item?.createdAt)}</td>
                  <td>
                    <div className="d-flex gap-1">
                      {/* <button
                      className="btn btn-primary btn-sm"
                      onClick={() => handleEdit(item?._id)}
                    >
                      Edit
                    </button> */}
                      {item?.role !== "admin" && (
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(item?._id)}
                        >
                          Delete
                        </button>
                      )}
                      {/* <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => handleView(item?._id)}
                    >
                      View
                    </button> */}
                    </div>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-center mt-5">
        {data?.data && data?.data?.length > itemsPerPage && (
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

AllusersPage.PageLayout = ProfileLayout;
export default AllusersPage;
