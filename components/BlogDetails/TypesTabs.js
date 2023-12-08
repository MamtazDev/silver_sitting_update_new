import React from "react";
import styles from "@/styles/Blog.module.css";
import Link from "next/link";

const TypesTabs = () => {
  const tabs = [
    {
      name: "Corona",
    },
    {
      name: "Corona tips",
    },
    {
      name: "Childcare despite corona",
    },
    {
      name: "Seniors and corona",
    },
    {
      name: "Be careful with corona",
    },
  ];
  return (
    <div className="container">
      <div className={styles.tabs}>
        {tabs.map((tab, index) => (
          <Link  key={index} href="/Corona">
            {tab.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TypesTabs;
