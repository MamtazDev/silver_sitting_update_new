import React, { useEffect, useState } from "react";
import ProfileLayout from "@/layouts/Profile";
import {
  useDeleteBlogMutation,
  useGetAllBlogsQuery,
} from "@/features/blog/blogApi";
import { formatDate } from "@/utils/utils";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import Pagination from "@/components/Pagination/Pagination";
import axios from "axios";
import {
  useGetAllPdfQuery,
  useUpdatePdfStatusMutation,
} from "@/features/pdf/pdfApi";

const AllDocumentsPage = () => {
  const { data } = useGetAllBlogsQuery();
  const [deleteBlog, { isLoading }] = useDeleteBlogMutation();

  const [sorting, setSorting] = useState("all");
  // const [pdfs, setPdfs] = useState([]);

  const { data: pdfs, isLoading: getingPdfs, refetch } = useGetAllPdfQuery();
  const [updatePdfStatus, { isLoading: updating }] =
    useUpdatePdfStatusMutation();

  //   function capitalizeFirstLetter(str) {
  //     return `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`;
  //   }

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

  const handleViewPdf = async (pdf) => {
    console.log("id:", pdf);
    console.log("pdfs:", pdfs);

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/pdf/${pdf?._id}`,
        {
          responseType: "arraybuffer",
        }
      ); // Replace 'your-pdf-id' with the actual PDF ID

      const blob = new Blob([response.data], {
        type: response.headers["content-type"],
      });
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank");
    } catch (error) {
      console.error("Error fetching PDF:", error.message);
    }
  };

  const handleChangeStatus = async (pdfId, userId, status) => {
    try {
      const data = {
        pdfId,
        userId,
        status,
      };
      const response = await updatePdfStatus(data);

      if (response?.data?.success) {
        Swal.fire({
          icon: "success",
          title: "Successfull!",
          text: "Status updated successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Somethings went wrong...",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Somethings went wrong...",
      });
    }
  };

  const fetchPdfs = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/pdf`
      );
      setPdfs(response?.data);
    } catch (error) {
      console.error("Error fetching PDFs:", error.message);
    }
  };

  useEffect(() => {
    fetchPdfs();
  }, []);

  return (
    <div>
      {/* <div className="d-flex justify-content-end mb-4">
        <button onClick={handleAddBlog} className="btn btn-primary">
          Add Blog
        </button>
      </div> */}
      {/* <div className="d-flex gap-2 mb-4">
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
      </div> */}
      {getingPdfs ? (
        <p className="text-center">Please wait! Fetching datas...</p>
      ) : (
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Publish Data</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {pdfs &&
              pdfs?.map((item, idx) => (
                <tr>
                  <th scope="row">{idx + 1}</th>
                  <td>
                    {item?.user?.firstName} {item?.user?.lastName}
                  </td>
                  <td> {item?.user?.email}</td>
                  <td>{formatDate(item?.createdAt)}</td>
                  <td>
                    <div className="d-flex gap-2">
                      {item?.status === "rejected" ? (
                        <p
                          className="text-danger my-auto "
                          style={{ fontSize: "12px" }}
                        >
                          Rejected
                        </p>
                      ) : (
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() =>
                            handleChangeStatus(
                              item?._id,
                              item?.user?._id,
                              false
                            )
                          }
                          disabled={updating || item?.status === "accepted"}
                        >
                          Rejected
                        </button>
                      )}
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => handleViewPdf(item)}
                      >
                        View
                      </button>
                      {item?.status === "accepted" ? (
                        <p className="text-success my-auto">Accepted</p>
                      ) : (
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() =>
                            handleChangeStatus(item?._id, item?.user?._id, true)
                          }
                          disabled={updating || item?.status === "rejected"}
                        >
                          Checked
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
      {/* <div className="d-flex justify-content-center mt-5">
        {data?.data?.blogs && data?.data?.blogs?.length > itemsPerPage && (
          <Pagination
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        )}
      </div> */}
    </div>
  );
};

AllDocumentsPage.PageLayout = ProfileLayout;
export default AllDocumentsPage;
