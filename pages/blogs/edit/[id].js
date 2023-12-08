import MyQuillEditor from "@/components/Editor/QuillEditor";
import {
  useGetBlogByIdQuery,
  useUpdateBlogMutation,
} from "@/features/blog/blogApi";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const imageHostKey = "7378254be2fef904c69a0c05769ced22";
const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

const uploadBlogImage = async (data) => {
  const res = await fetch(url, {
    method: "POST",
    body: data,
  });
  const resData = await res.json();

  return resData?.data?.url;
};

const EditBlogPage = () => {
  const { query, push } = useRouter();

  const { data: blogDetails } = useGetBlogByIdQuery(query?.id);

  const [updateBlog, { isLoading }] = useUpdateBlogMutation();

  const [blogInfo, setBlogInfo] = useState({});
  const [addingBlog, setAddingBlog] = useState(false);

  const handleContentChange = (value) => {
    // console.log(blogInfo, "ingo");
    // console.log(value, "value");
    // setBlogInfo({ ...blogInfo, content: value });
  };

  //   console.log(blogInfo, "jjjl");

  const handleSubmit = async () => {
    setAddingBlog(true);
    const newBlogInfo = { ...blogInfo };

    if (typeof newBlogInfo?.image === "object") {
      const fromData = new FormData();
      fromData.append("image", newBlogInfo?.image);
      const imageDataUrl = await uploadBlogImage(fromData);
      newBlogInfo.image = imageDataUrl;
    }
    if (typeof newBlogInfo?.cover_image === "object") {
      const featuredFromData = new FormData();
      featuredFromData.append("image", newBlogInfo?.cover_image);
      const featuredDataUrl = await uploadBlogImage(featuredFromData);
      newBlogInfo.cover_image = featuredDataUrl;
    }

    const response = await updateBlog({ blogID: query?.id, data: newBlogInfo });
    if (response?.data?.success) {
      setAddingBlog(false);
      push("/profile/all-blogs");
    }
    console.log(response, "ress");
  };

  useEffect(() => {
    if (blogDetails) {
      setBlogInfo({
        ...blogInfo,
        title: blogDetails?.data?.title,
        image: blogDetails?.data?.image,
        cover_image: blogDetails?.data?.cover_image,
        description: blogDetails?.data?.description,
        category: blogDetails?.data?.category,
        language: blogDetails?.data?.language,
        content: blogDetails?.data?.content,
      });
    }
  }, [blogDetails]);

  return (
    <div className="container mx-auto my-5">
      <div className="d-flex flex-column gap-4">
        <div className="">
          <h4>Blog Title</h4>
          <input
            value={blogInfo?.title}
            className="w-100 p-2"
            placeholder="Enter blog title"
            name="title"
            onChange={(e) =>
              setBlogInfo({ ...blogInfo, title: e.target.value })
            }
          />
        </div>
        <div className="d-flex flex-column flex-lg-row gap-2">
          <div className="w-100  h-100">
            <h4>Blog Image</h4>
            {blogInfo?.image && (
              <div className="d-flex flex-column justify-content-center w-100 ">
                <img
                  src={
                    typeof blogInfo?.image === "object"
                      ? URL.createObjectURL(blogInfo?.image)
                      : blogInfo?.image
                  }
                  alt=""
                  className="w-100 img-fluid"
                  style={{ objectFit: "contain" }}
                />
              </div>
            )}
            <input
              className="mt-2"
              type="file"
              accept="image/*"
              onChange={(e) =>
                setBlogInfo({ ...blogInfo, image: e.target.files[0] })
              }
            />
          </div>

          <div className="w-100 h-100 ">
            <h4>Featured Image</h4>
            {blogInfo?.cover_image && (
              <div className="d-flex justify-content-center">
                <img
                  className="w-100 img-fluid"
                  src={
                    typeof blogInfo?.cover_image === "object"
                      ? URL.createObjectURL(blogInfo?.cover_image)
                      : blogInfo?.cover_image
                  }
                  alt=""
                  style={{ objectFit: "contain" }}
                />
              </div>
            )}
            <input
              className="mt-2"
              type="file"
              accept="image/*"
              onChange={(e) =>
                setBlogInfo({ ...blogInfo, cover_image: e.target.files[0] })
              }
            />
          </div>
        </div>
        <div className="d-flex w-100 gap-2">
          <div className="w-100">
            <h4>Category</h4>
            <select
              className="w-100 p-2"
              name="category"
              onChange={(e) =>
                setBlogInfo({ ...blogInfo, category: e.target.value })
              }
            >
              <option disabled selected>
                Select a category
              </option>
              <option
                value="healthWellbeing"
                selected={blogInfo?.category === "healthWellbeing"}
              >
                Health & WellBeing
              </option>
              <option
                value="psychology"
                selected={blogInfo?.category === "psychology"}
              >
                Psychology
              </option>
              <option
                value="upbringing"
                selected={blogInfo?.category === "upbringing"}
              >
                Upbringing
              </option>
            </select>
          </div>
          <div className="w-100">
            <h4>Language</h4>
            <select
              className="w-100 p-2"
              onChange={(e) =>
                setBlogInfo({ ...blogInfo, language: e.target.value })
              }
              name="language"
            >
              <option disabled selected>
                Select blog language
              </option>
              <option
                value="english"
                selected={blogInfo?.language === "english"}
              >
                English
              </option>
              <option value="german" selected={blogInfo?.language === "german"}>
                Germen
              </option>
            </select>
          </div>
        </div>

        <div>
          <h4>Blog Description</h4>
          <textarea
            name="description"
            className="w-100 p-2"
            style={{ minHeight: "150px" }}
            placeholder="Writre short description..."
            value={blogInfo?.description}
            onChange={(e) => setBlogInfo({ ...blogInfo(e.target.value) })}
          />
        </div>

        <div>
          <h4>Blog Content</h4>
          <MyQuillEditor
            value={blogInfo?.content}
            onChange={handleContentChange}
          />
          {/* <div>
      <h2>Content:</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div> */}
        </div>
        <div className="w-100 text-center">
          {addingBlog ? (
            <button
              type="button"
              className="mt-5 btn"
              style={{
                backgroundColor: "#8b3888",
                color: "#FFF",
                padding: "10px",
                cursor: "not-allowed",
              }}
            >
              Editting...
            </button>
          ) : (
            <button
              type="button"
              className="mt-5 btn"
              style={{
                backgroundColor: "#8b3888",
                color: "#FFF",
                padding: "10px",
              }}
              onClick={handleSubmit}
              disabled={
                !blogInfo?.content ||
                !blogInfo?.title ||
                !blogInfo?.image ||
                !blogInfo?.cover_image ||
                !blogInfo?.category ||
                !blogInfo?.language ||
                !blogInfo?.description
              }
            >
              Edit Blog
            </button>
          )}
        </div>
      </div>
    </div>
    // <>fk</>
  );
};

export default EditBlogPage;
