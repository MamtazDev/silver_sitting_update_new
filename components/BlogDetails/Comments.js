import React from "react";
import styles from "@/styles/Blog.module.css";

const Comments = () => {
  return (
    <div className="container">
      <div className={styles.comments}>
        <h4>Comment</h4>
        <input type="text" placeholder="Write a comments" />
        <button type="submit">Post Now</button>
      </div>
    </div>
  );
};

export default Comments;
