import ProfileLayout from "@/layouts/Profile";
import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/Setting.module.css";
import { FiPlus } from "react-icons/fi";
import info from "../../../public/assets/icons/info.png";
import {
  useChangeSearchStatusMutation,
  useGetSingleUserQuery,
  useUploadDocumentMutation,
} from "@/features/register/registerApi";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import axios from "axios";

const settings = () => {
  const { user } = useSelector((state) => state.register);
  const { data: userInfo } = useGetSingleUserQuery(user?._id);

  const [selectedFile, setSelectedFile] = useState(null);
  const [warningShow, setWarningShow] = useState(false);
  const [parentSearch, setParentSearch] = useState(false);
  const [pdfs, setPdfs] = useState([]);
  const [uploadNotAllowed, setUploadNotAllowed] = useState(false);

  const [uploadDocument, { isLoading }] = useUploadDocumentMutation();

  const [changeSearchStatus, { isLoading: updatingSeachStatus }] =
    useChangeSearchStatusMutation();

  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.click();
  };

  const handleChange = (event) => {
    const file = event.target.files[0];

    setSelectedFile(file);
  };

  const handleUpload = async () => {
    console.log("selectedFile", selectedFile);

    const data = {
      url: selectedFile,
    };

    const formData = new FormData();
    formData.append("pdf", selectedFile);
    formData.append("user", user?._id);

    try {
      await axios.post("http://localhost:8000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("File uploaded successfully");
    } catch (error) {
      console.error("Error uploading file:", error.message);
    }

    // uploadDocument({ id: user?._id, formData }).then((res) => {

    //   console.log("data from update Document : ", data)
    //   console.log("data from update Document _id: ",  user?._id)
    //   if (res.data?.status === 200) {
    //     alert("Document uploaded sucessfully!");
    //   } else if (res.error) {
    //     alert("Error occured!");
    //   }
    // });
  };

  const handleChangeStatus = async () => {
    const res = await changeSearchStatus({
      id: user?._id,
      data: { parentSearch: parentSearch },
    });

    if (res?.data?.success) {
      Swal.fire({
        icon: "success",
        title: "Successfull!",
        text: "Search status updated successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Somethings went wrong...",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  // http://localhost:8000/pdf/65797e3a487bfc46c950764c

  const handleViewPdf = async ({ pdf }) => {
    console.log("id:", pdf);
    console.log("pdfs:", pdfs);

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/pdf/${user?._id}`,
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

  const getAllPdf = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/pdf`
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

  useEffect(() => {
    setParentSearch(userInfo?.parentSearch);
  }, [userInfo]);

  useEffect(() => {
    const fetchPdfs = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/pdf`
        );
        setPdfs(response?.data);

        const filterPdf = response?.data?.find(
          (i) => i?.user?._id === user?._id
        );

        if (filterPdf) {
          setUploadNotAllowed(true);
        }
      } catch (error) {
        console.error("Error fetching PDFs:", error.message);
      }
    };

    return () => fetchPdfs();
  }, [user]);

  return (
    <div className={styles.mainContainer}>
      <h3>Settings</h3>
      {/* <button onClick={handleViewPdf}>View PDF</button> */}
      {/*  <ul>
          {pdfs?.map((pdf) => (
            <li key={pdf._id}>
              <button onClick={() => handleViewPdf(pdf)}>View</button> {pdf._id}
            </li>
          ))}
        </ul> */}

      <div className={styles.mainContentContainer}>
        <div className={`${styles.fileContainer} w-100`}>
          {uploadNotAllowed && (
            <p>
              Your certificate of good conduct has been successfully uploaded
              and will now be checked.
            </p>
          )}
          {!uploadNotAllowed && (
            <button
              className="d-flex align-items-center justify-content-center gap-2"
              onClick={handleClick}
            >
              <FiPlus className="fs-4" />
              Select Extended certificate of good conduct
            </button>
          )}
          {!uploadNotAllowed && (
            <button
              className="d-flex align-items-center justify-content-center gap-2"
              onClick={handleUpload}
            >
              <FiPlus className="fs-4" />
              Upload PDF
            </button>
          )}
          <input
            type="file"
            ref={inputRef}
            accept="application/pdf"
            onChange={handleChange}
          />
          {selectedFile ? (
            <span> {selectedFile?.name}</span>
          ) : (
            <span>Documents only, eg PDF,no pictures, Max 15MB </span>
          )}
        </div>
        <div className={`${styles.checkboxContainer} w-100`}>
          <div className={styles.checkBox_Box}>
            <input
              type="checkbox"
              name=""
              checked={parentSearch}
              onClick={() => setParentSearch(!parentSearch)}
              // onChange={() => setParentSearch(!parentSearch)}
            />
            <label htmlFor="">
              I do not want to be found in the parent's search at the moment.
            </label>
            <img
              style={{ cursor: "pointer" }}
              onClick={() => setWarningShow(!warningShow)}
              src={info.src}
              alt=""
            />
          </div>
          {updatingSeachStatus ? (
            <button disabled>Saving...</button>
          ) : (
            <button onClick={handleChangeStatus}>Save</button>
          )}

          {warningShow && (
            <div className={styles.labelTextContainer}>
              <label>
                PLEASE NOTE: If you tick this box, your parents will no longer
                be able to find you. Existing conversations can be continued. If
                you remove the tick by clicking again, you will be found again.
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
settings.PageLayout = ProfileLayout;

export default settings;
