import MyQuillEditor from "@/components/Editor/QuillEditor";
import { useCreateBlogMutation } from "@/features/blog/blogApi";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";

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

const AddBlogs = () => {
  const { user } = useSelector((state) => state.register);

  const [createBlog, { isLoading }] = useCreateBlogMutation();

  const [content, setContent] = useState("");
  const [blogImage, setBlogImage] = useState(null);
  const [featuredImage, setFeaturedImage] = useState(null);

  const [addingBlog, setAddingBlog] = useState(false);

  const [blogContent, setBlogContent] = useState({});

  const { push } = useRouter();

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleBlogContentChange = (e) => {
    setBlogContent({ ...blogContent, [e.target.name]: e.target.value });
  };

  const handleBlogImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setBlogImage(file);
    }
  };

  const handleFeaturedImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFeaturedImage(file);
    }
  };

  const handleSubmit = async () => {
    setAddingBlog(true);

    const fromData = new FormData();
    fromData.append("image", blogImage);

    const featuredFromData = new FormData();
    featuredFromData.append("image", featuredImage);

    const imageDataUrl = await uploadBlogImage(fromData);
    const featuredDataUrl = await uploadBlogImage(featuredFromData);

    const data = {
      author: user?._id,
      title: blogContent?.title,
      image: imageDataUrl,
      cover_image: featuredDataUrl,
      content: content,
      description: blogContent?.description,
      category: blogContent?.category,
      language: blogContent?.language,
    };

    const response = await createBlog(data);
    if (response?.data?.success) {
      setAddingBlog(false);
      alert("Blog added successfully!");
      push("/blogs");
    }

    console.log(response, "fff");
  };
  return (
    <div className="container mx-auto my-5">
      <div className="d-flex flex-column gap-4">
        <div className="">
          <h4>Blog Title</h4>
          <input
            className="w-100 p-2"
            placeholder="Enter blog title"
            name="title"
            onChange={handleBlogContentChange}
          />
        </div>
        <div>
          <h4>Blog Image</h4>
          {blogImage ? (
            <div className="d-flex justify-content-center">
              <img
                src={URL.createObjectURL(blogImage)}
                alt=""
                height={250}
                width={250}
                style={{ objectFit: "contain" }}
              />
            </div>
          ) : (
            <input
              type="file"
              accept="image/*"
              onChange={handleBlogImageChange}
            />
          )}
        </div>
        <div>
          <h4>Featured Image</h4>
          {featuredImage ? (
            <div className="d-flex justify-content-center">
              <img
                src={URL.createObjectURL(featuredImage)}
                alt=""
                height={250}
                width={250}
                style={{ objectFit: "contain" }}
              />
            </div>
          ) : (
            <input
              type="file"
              accept="image/*"
              onChange={handleFeaturedImageChange}
            />
          )}
        </div>
        <div className="d-flex w-100 gap-2">
          <div className="w-100">
            <h4>Category</h4>
            <select
              className="w-100 p-2"
              name="category"
              onChange={handleBlogContentChange}
            >
              <option disabled selected>
                Select a category
              </option>
              <option value="healthWellbeing">Health & WellBeing</option>
              <option value="psychology">Psychology</option>
              <option value="upbringing">Upbringing</option>
            </select>
          </div>
          <div className="w-100">
            <h4>Language</h4>
            <select
              className="w-100 p-2"
              onChange={handleBlogContentChange}
              name="language"
            >
              <option disabled selected>
                Select blog language
              </option>
              <option value="english">English</option>
              <option value="german">Germen</option>
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
            onChange={handleBlogContentChange}
          />
        </div>

        <div>
          <h4>Blog Content</h4>
          <MyQuillEditor value={content} onChange={handleContentChange} />
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
              Adding...
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
                !content ||
                !blogContent?.title ||
                !blogImage ||
                !featuredImage ||
                !blogContent?.category ||
                !blogContent?.language ||
                !blogContent?.description
              }
            >
              Add Blog
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddBlogs;
