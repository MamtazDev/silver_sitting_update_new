import React, { useState } from "react";
import styles from "@/styles/Blog.module.css";
import banner from "../../public/assets/blog-details.png";
import people from "../../public/assets/icons/details-people.png";
import share from "../../public/assets/icons/details-share.png";
import comment from "../../public/assets/icons/details-comment.png";
import like from "../../public/assets/icons/details.like.png";
import Modal from "react-bootstrap/Modal";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
// import {
//   FacebookShareButton,
//   LinkedinShareButton,
//   TwitterShareButton,
// } from "react-share";

const BlogDetailsBanner = ({ blogDetails }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const shareUrl = `${process.env.NEXT_PUBLIC_MAIN_URL}/blogs/details/${blogDetails?._id}`;
  const handleShare = () => {
    setShow(true);
    // console.log(blogDetails, "gg");
  };
  return (
    <div className={styles.blog_details}>
      <div className="container">
        <div className="row gy-4">
          <div className="col-12 col-lg-6">
            <img
              className="img-fluid w-100"
              src={blogDetails?.cover_image}
              alt=""
            />
          </div>
          <div className="col-12 col-lg-6">
            <div
              style={{ marginBottom: "20px" }}
              className="d-flex flex-wrap justify-content-between"
            >
              <div>
                <div className="d-flex align-items-center gap-2">
                  <img src={people.src} alt="" />
                  <h6 className="mb-0">Daniel Monninger</h6>
                </div>
              </div>
              <div>
                <div
                  className="d-flex align-items-center gap-2"
                  style={{ cursor: "pointer" }}
                  onClick={handleShare}
                >
                  <img src={share.src} alt="" />
                  <h6 className="mb-0">Share</h6>
                </div>
              </div>
              {/* <div>
                <div className="d-flex align-items-center gap-2">
                  <img src={comment.src} alt="" />
                  <h6 className="mb-0">0</h6>
                </div>
              </div>
              <div>
                <div className="d-flex align-items-center gap-2">
                  <img src={like.src} alt="" />
                  <h6 className="mb-0">0</h6>
                </div>
              </div> */}
            </div>
            <h4>{blogDetails?.title}</h4>
            <p
              dangerouslySetInnerHTML={{
                __html: blogDetails?.description,
              }}
            />

            <br />
            {/* <p>
              We at SilverSitting are only too happy to support the
              consequences: unprecedented school closures in summer 2020,
              distance regulations, mask requirements. You know the measures -
              and they are important!
            </p> */}
          </div>
        </div>
      </div>
      <>
        <Modal show={show} onHide={handleClose} centered size="sm">
          <Modal.Body>
            <div className="d-flex justify-content-center gap-3">
              <FacebookShareButton url={shareUrl}>
                <FacebookIcon
                  size={40}
                  bgStyle={{ fill: "#d3b4da" }}
                  borderRadius={8}
                />
              </FacebookShareButton>
              <LinkedinShareButton url={shareUrl}>
                <LinkedinIcon
                  size={40}
                  bgStyle={{ fill: "#d3b4da" }}
                  borderRadius={8}
                />
              </LinkedinShareButton>
              <TwitterShareButton url={shareUrl}>
                <TwitterIcon
                  size={40}
                  bgStyle={{ fill: "#d3b4da" }}
                  borderRadius={8}
                />
              </TwitterShareButton>
            </div>
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
};

export default BlogDetailsBanner;
