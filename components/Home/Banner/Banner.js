import React, { useState } from "react";
import banner from "../../../public/assets/banner.png";
import banner1 from "../../../public/assets/banner1.png";
import children from "../../../public/assets/children.png";
import caregiver from "../../../public/assets/caregiver.png";
import arrow from "../../../public/assets/icons/arrow.png";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setStepControll } from "@/features/register/registerSlice";
import { setCity } from "@/features/childCareSearch/childCareSearchSlice";
import { useRouter } from "next/router";

const Banner = ({ t }) => {
  const dispatch = useDispatch();
  const [backgroundImage, setBackgroundImage] = useState(`url(${banner1.src})`);
  const [tab, setTab] = useState("caregiver");
  const handleButtonClick = () => {
    setBackgroundImage(`url(${banner1.src})`);
    setTab("caregiver");
  };
  const handleButtonClicknext = () => {
    setBackgroundImage(`url(${banner.src})`);
    setTab("children");
  };

  const router = useRouter();

  const handleFind = (event) => {
    event.preventDefault();
    const city = event.target.residance.value;
    dispatch(setCity(city));
    router.push(`/child-care?location=${city}`);
  };
  return (
    <div
      style={{ backgroundImage: backgroundImage }}
      className="banner  sec_gap"
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6"></div>
          <div className="col-12 col-lg-6">
            <div className="care_form">
              <h3>
                Seniors take care of <br /> children
              </h3>
              <div className="tabs">
                <div
                  className={`${tab === "caregiver" ? "active" : "deactivate"}`}
                  onClick={handleButtonClick}
                >
                  <img
                    style={{ marginBottom: "20Px" }}
                    src={caregiver.src}
                    alt=""
                  />
                  <p>Find Caregiver</p>
                </div>
                <div
                  className={`${tab === "children" ? "active" : "deactivate"}`}
                  onClick={handleButtonClicknext}
                >
                  <img
                    style={{ marginBottom: "20Px" }}
                    src={children.src}
                    alt="tab"
                  />
                  <p>Care Children</p>
                </div>
              </div>
              {tab === "children" && (
                <div>
                  <h6 className="mb-4 ">
                    Take care of children and get compensation from parents if
                    you want.
                  </h6>
                  <div className="text-center">
                    <Link
                      href="/register"
                      onClick={() => dispatch(setStepControll("childcarer"))}
                    >
                      <button>Register as a child carer</button>
                    </Link>
                  </div>
                  <div className="text-center">
                    <Link href="/guidance">
                      Learn more{" "}
                      <img
                        style={{ marginLeft: "11px" }}
                        src={arrow.src}
                        alt="arrow"
                      />
                    </Link>
                  </div>
                </div>
              )}
              {tab === "caregiver" && (
                <form onSubmit={handleFind}>
                  <input
                    type="text"
                    placeholder="Enter care address"
                    name="residance"
                    required
                  />
                  <div className="text-center">
                    <button id="login_btn" className="mb-4" type="">
                      {t("findNow")}
                    </button>{" "}
                  </div>
                  <br />
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
