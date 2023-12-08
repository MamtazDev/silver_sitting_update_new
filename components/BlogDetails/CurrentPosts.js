import React from "react";
import styles from "@/styles/Blog.module.css";
import blog from "../../public/assets/blog.png";
import people from "../../public/assets/icons/people.png";
import share from "../../public/assets/icons/share.png";
import comment from "../../public/assets/icons/comment.png";
import like from "../../public/assets/icons/like.png";
import arrow from "../../public/assets/icons/violet-arrow.png";
import Link from "next/link";
import { useGetAllBlogsQuery } from "@/features/blog/blogApi";
import { formatDate } from "@/utils/utils";
import { useRouter } from "next/router";

const CurrentPosts = () => {
  const { data } = useGetAllBlogsQuery();
  const { push } = useRouter();
  const handleClick = () => {
    push("/blogs");
  };
  return (
    <div className={styles.current_post}>
      <div className="container">
        <div
          style={{ marginBottom: "40px" }}
          className="d-flex justify-content-between"
        >
          <h4>Current Posts</h4>
          <button onClick={handleClick}>View all</button>
        </div>
        <div style={{ marginBottom: "60px" }} className="row gy-4">
          {data?.data?.blogs &&
            data?.data?.blogs.slice(0, 3).map((index) => (
              <div
                style={{ minHeight: "560px" }}
                className="col-12 col-md-6 col-lg-4"
              >
                <div className={styles.blog}>
                  <img
                    style={{ height: "300px" }}
                    className="img-fluid w-100"
                    src={index?.image ? index?.image : blog.src}
                    alt=""
                  />
                  <div></div>
                  <div className={styles.date}>
                    <h5 className="mb-0">{formatDate(index?.createdAt)[0]}</h5>
                    <p className="mb-0">{formatDate(index?.createdAt)[1]}</p>
                  </div>

                  <div className={styles.blog_content}>
                    <div
                      style={{ marginBottom: "22px" }}
                      className="d-flex flex-wrap justify-content-between"
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
                    <h4>{index?.title ? index?.title : "New Title"}</h4>
                    <h6
                      className={`${styles.textLineLimit} flex-grow-1`}
                      dangerouslySetInnerHTML={{
                        __html: index?.description,
                      }}
                    />
                    <Link href={`/blogs/details/${index._id}`}>
                      Read More <img className="ms-1" src={arrow.src} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CurrentPosts;
