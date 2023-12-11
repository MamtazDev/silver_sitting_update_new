import React from "react";
import styles from "@/styles/Blog.module.css";
import facebook from "../../public/assets/icons/facebook.png";
import twitter from "../../public/assets/icons/twitter.png";
import linkedin from "../../public/assets/icons/linkedin.png";

import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

const SocialMedia = ({ blogDetails }) => {
  // console.log(blogDetails, "nn");
  const shareUrl = `${process.env.NEXT_PUBLIC_MAIN_URL}/blogs/details/${blogDetails?._id}`;
  return (
    <div className="container">
      <div className={styles.social_media}>
        <div>
          <FacebookShareButton url={shareUrl}>
            <img src={facebook.src} alt="" />
          </FacebookShareButton>
          <TwitterShareButton url={shareUrl}>
            <img src={twitter.src} alt="" />
          </TwitterShareButton>
          <LinkedinShareButton url={shareUrl}>
            <img src={linkedin.src} alt="" />
          </LinkedinShareButton>
        </div>
        {blogDetails?.category === "healthWellbeing" && (
          <p className="mb-0">Health & Wellbeing</p>
        )}
        {blogDetails?.category === "psychology" && (
          <p className="mb-0">Psychology</p>
        )}
        {blogDetails?.category === "upbringing" && (
          <p className="mb-0">Upbringing</p>
        )}
      </div>
    </div>
  );
};

export default SocialMedia;
