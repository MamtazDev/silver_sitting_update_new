import React from "react";
import styles from "@/styles/Blog.module.css";
import blog from "../../public/assets/blog.png";
import people from "../../public/assets/icons/people.png";
import share from "../../public/assets/icons/share.png";
import comment from "../../public/assets/icons/comment.png";
import like from "../../public/assets/icons/like.png";
import arrow from "../../public/assets/icons/violet-arrow.png";
import Link from "next/link";
import { formatDate } from "@/utils/utils";

const Blog = ({ allBlogs }) => {
  console.log(allBlogs, "kjkj");
  return (
    <div style={{ marginBottom: "30px" }}>
      <div className="container">
        <div className="row gy-4">
          {allBlogs?.length > 0 ? (
            allBlogs?.map((index) => (
              <div
                style={{ minHeight: "560px" }}
                className="col-12 col-md-6 col-lg-4"
              >
                <div className={styles.blog}>
                  <Link href={`blogs/details/${index._id}`}>
                    <img
                      style={{ height: "300px" }}
                      className="img-fluid w-100"
                      src={index?.image ? index?.image : blog.src}
                      alt=""
                    />
                    {/* <img className="img-fluid w-100" src={blog.src} alt="" /> */}
                  </Link>
                  <div></div>
                  <div className={styles.date}>
                    <h5 className="mb-0">{formatDate(index?.createdAt)[0]}</h5>
                    <p className="mb-0">{formatDate(index?.createdAt)[1]}</p>
                  </div>

                  <div className={`${styles.blog_content}`}>
                    <div
                      style={{ marginBottom: "22px" }}
                      className="d-flex flex-wrap justify-content-between gap-4"
                    >
                      <div>
                        <div className="d-flex align-items-center gap-1">
                          <img src={people.src} alt="" />
                          <p className="mb-0">Daniel Monninger</p>
                        </div>
                      </div>
                      <div>
                        <div className="d-flex align-items-center gap-1">
                          <img src={share.src} alt="" />
                          <p className="mb-0">Share</p>
                        </div>
                      </div>
                      <div>
                        <div className="d-flex align-items-center gap-1">
                          <img src={comment.src} alt="" />
                          <p className="mb-0">0</p>
                        </div>
                      </div>
                      <div>
                        <div className="d-flex align-items-center gap-1">
                          <img src={like.src} alt="" />
                          <p className="mb-0">0</p>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex flex-column h-100">
                      <h4>{index?.title ? index?.title : "New Title"}</h4>
                      <h6
                        className={`${styles.textLineLimit} flex-grow-1`}
                        dangerouslySetInnerHTML={{
                          __html: index?.description,
                        }}
                      />
                      {/* We live in a time full of challenges: Since the beginning of
                    the year, Corona has been threatening all of our health and
                    even all of our lives.
                  </h6> */}
                      <div className="flex-grow-1 ">
                        <Link href={`blogs/details/${index._id}`}>
                          Read More{" "}
                          <img className="ms-1" src={arrow.src} alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1 className="text-center my-5">No blogs found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;

// blog.attributes.thumb.data[0].attributes.formats.thumbnail.url
