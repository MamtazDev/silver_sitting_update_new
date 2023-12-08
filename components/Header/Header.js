"use client";

import React, { useEffect } from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import logo from "../../public/assets/logo.png";
import profile from "../../public/assets/icons/loggedInProfile.png";
import poBox from "../../public/assets/icons/pobox.png";
import profileColor from "../../public/assets/icons/profileActive.png";
import ideas from "../../public/assets/icons/ideas.png";
import logOut from "../../public/assets/icons/logout.png";
import Link from "next/link";
import "../../styles/Header.module.css";
import { useSelector } from "react-redux";
import { IoIosArrowDown } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const Header = () => {
  const { user } = useSelector((state) => state.register);

  const { i18n } = useTranslation();

  // const t =
  //   i18n.language === "en"
  //     ? function (str) {
  //         return translations.en[str];
  //       }
  //     : function (str) {
  //         return translations.de[str];
  //       };

  // useEffect(() => {
  //   const script = document.createElement("script");

  //   script.src =
  //     "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  //   script.async = true;
  //   document.body.appendChild(script);
  //   window.googleTranslateElementInit = () => {
  //     new window.google.translate.TranslateElement(
  //       {
  //         pageLanguage: "en",
  //         includedLanguages: "en,de",
  //         layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
  //       },
  //       "google_translate_element"
  //     );
  //   };
  //   return () => {
  //     document.body.removeChild(script);
  //     delete window.googleTranslateElementInit;
  //   };
  // }, []);

  const { push } = useRouter();

  const handleChange = (e) => {
    const lang = `${e.target.value}`;
    i18n.changeLanguage(lang);
  };

  const handleAddBlog = () => {
    push("/blogs/add");
  };
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Link href="/">
            <Navbar.Brand>
              <img src={logo.src} alt="logo" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <div className="parent">
                <button>Pursue</button>
                <div className="child">
                  <Link href="/whoWeAre">Who we are</Link>
                  <Link href="/blogs">Blog</Link>
                  <Link href="/feedback">Feedback</Link>
                </div>
              </div>
              <div className="parent">
                <button>For Nannies</button>
                <div className="child">
                  <Link href="/guidance"> Guidance child caregiver</Link>
                  <Link href="/ChildrenProviderFaq">FAQ</Link>
                </div>
              </div>
              <div className="parent">
                <button>For Parents</button>
                <div className="child">
                  <Link href="/instructions"> Instructions</Link>
                  <Link href="/faq">FAQ</Link>
                  <Link href="/child-care"> Search for child care</Link>
                </div>
              </div>
            </Nav>
            <Nav className="button-navbar align-items-center">
              <Form.Select
                aria-label="Default select example"
                className="language-dropdown"
                onChange={handleChange}
              >
                <option value="en" selected={i18n.language === "en"}>
                  ENG
                </option>
                <option value="de" selected={i18n.language === "de"}>
                  GER
                </option>
              </Form.Select>
              {/* <div className="d-flex align-items-center">
                <div id="google_translate_element"></div>
                <IoIosArrowDown />
              </div> */}
              {user ? (
                // <>
                <div className="parent">
                  <Link
                    href="/profile"
                    className="login-btn d-flex justify-content-center align-items-center"
                    style={{ maxWidth: "56px" }}
                  >
                    <img src={profile.src} alt="" />
                  </Link>
                  <div className="child">
                    <Link
                      href="/profile/po-box"
                      style={{
                        display: "flex",
                        gap: "18px",
                        alignItems: "center",
                      }}
                    >
                      <img src={poBox.src} alt="" /> P.O. Box
                    </Link>
                    <Link
                      href="/profile"
                      style={{
                        display: "flex",
                        gap: "18px",
                        alignItems: "center",
                      }}
                    >
                      {" "}
                      <img src={profileColor.src} alt="" /> Profile
                    </Link>
                    <Link
                      href="/profile/ideas"
                      style={{
                        display: "flex",
                        gap: "18px",
                        alignItems: "center",
                      }}
                    >
                      <img src={ideas.src} alt="" /> Ideas
                    </Link>
                    <Link
                      href="/logout"
                      style={{
                        display: "flex",
                        gap: "18px",
                        alignItems: "center",
                      }}
                    >
                      {" "}
                      <img src={logOut.src} alt="" /> Logout
                    </Link>
                  </div>
                </div>
              ) : (
                //    {user?.role === "admin" && (
                //       <button
                //         style={{
                //           backgroundColor: "#8B3888",
                //           color: "#FFF",
                //           padding: "16px",
                //           borderRadius: "7px",
                //         }}
                //         onClick={handleAddBlog}
                //       >
                //         Add Blog
                //       </button>
                //     )}
                //  </>
                <Link className="login-btn" href="/login">
                  Login
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
