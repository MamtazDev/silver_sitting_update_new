import React from "react";
import styles from "@/styles/About.module.css";
import about from "../../public/assets/icons/about.png";
import news from "../../public/assets/icons/news.png";
import security from "../../public/assets/icons/security.png";
import Link from "next/link";

const About = () => {
  const details = [
    {
      pic: about,
      title: "About Us",
      content:
        "Find out where the idea for Silver Sitting came from and what drives us.",
      link: "Learn more about the idea and the <br /> founders of SilverSitting",
      bg: "about",
      route: "/whoWeAre",
    },
    {
      pic: news,
      title: "News",
      content: "Check out our childcare news and articles",
      link: "To the news",
      bg: "news",
      route: "/blogs",
    },
    {
      pic: security,
      title: "Security",
      content: "Your safety is important to us!",
      link: "Take care of children safely",
      bg: "security",
      route: "/ChildrenProviderFaq",
    },
  ];

  return (
    <div className={styles.about_us}>
      <div className="container">
        <div
          style={{ gap: "29px" }}
          className="row justify-content-center gy-5"
        >
          {details.map((detail, index) => (
            <div
              key={index}
              className={`${styles[detail.bg]} col-12 col-md-6 col-lg-4`}
            >
              <div className={styles.icon}>
                <img src={detail.pic.src} alt="" />
              </div>
              <div>
                <h6>{detail.title}</h6>
                <p>{detail.content}</p>
              </div>
              <Link
                href={detail?.route}
                dangerouslySetInnerHTML={{ __html: detail.link }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
