import React from "react";
import styles from "@/styles/Faq.module.css";
import Banner from "@/components/ChildrenProviderFaq/Banner";
import Faq from "@/components/ChildrenProviderFaq/Faq";

const ChildrenProviderFaq = () => {
  return (
    <div className={`container mx-auto ${styles.faqMainContainer}`}>
      <Banner />
      <Faq />
    </div>
  );
};

export default ChildrenProviderFaq;
