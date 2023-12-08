import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/ChildCare.module.css";
import children from "../../public/assets/images/child-photo.png";
import children1 from "../../public/assets/images/child-login.png";

import SearchResult from "@/components/ChildCare/SearchResult";
import Meta from "@/components/Shared/Meta";
import Link from "next/link";
import ChildCareSeachError from "@/utils/modals/ChildCareSeachError";
import { useGetSearchedChildCarerMutation } from "@/features/childCareSearch/childCareSearchApi";
import { useDispatch, useSelector } from "react-redux";
import {
  setChildCarerFilterData,
  setCity,
} from "@/features/childCareSearch/childCareSearchSlice";
import { useTranslation } from "react-i18next";
import translations from "@/utils/translation";
import { useRouter } from "next/router";
// import useGetUserLocation from "@/hooks/useGetUserLocation";

const ChildCare = () => {
  const [lookfor, setLookfor] = useState([]);
  const [warning, setWarning] = useState(false);
  const [step, setStep] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [distanceInputValue, setDistanceInputValue] = useState("");
  const [searchError, setSearchError] = useState("");

  const [offers, setOffers] = useState([]);

  const dispatch = useDispatch();
  const { city } = useSelector((state) => state.childCarerFilter);
  const { i18n } = useTranslation();

  const router = useRouter();

  const submitButtonRef = useRef();

  const t =
    i18n.language === "en"
      ? function (str) {
          return translations.en[str];
        }
      : function (str) {
          return translations.de[str];
        };

  const { user } = useSelector((state) => state.register);

  // const userGeoLocation = useGetUserLocation();

  const [getSearchedChildCarer, { isLoading, isSuccess, isError }] =
    useGetSearchedChildCarerMutation();

  const handleLookFor = (value) => {
    if (lookfor.includes(value)) {
      const newArray = lookfor.filter((i) => i !== value);
      setLookfor(newArray);
    } else {
      setLookfor([...lookfor, value]);
    }
  };

  const handleOfferProvideValue = (value) => {
    if (offers.includes(value)) {
      const filter = offers.filter((i) => i !== value);
      setOffers(filter);
    } else {
      setOffers([...offers, value]);
    }
  };

  const handleSerchFormSubmit = (e) => {
    e.preventDefault();
    setSearchError("");
    const form = e.target;

    const maxDistance =
      form.maxDistance.value > 30 ? 30 : form.maxDistance.value;
    setDistanceInputValue(maxDistance);

    // console.log(maxDistance, "kkkk");

    // const userAddress = { ...userGeoLocation, address: user?.residance };
    const userAddress = user?.residance;

    const filterCriteria = {};
    const gender = lookfor;
    let city = form.city.value;

    if (!city) {
      if (user) {
        if (window.confirm("Are you allow us to use your location?")) {
          dispatch(setCity(user?.residance));
          city = user?.residance;
        } else {
          setSearchError("Please enter the desired address above.");
          return;
        }
      } else {
        setSearchError("Please enter the desired address above or log in.");
        return;
      }
    }

    if (gender.length === 1) {
      filterCriteria.gender = gender[0];
    }
    if (city) {
      filterCriteria.city = city ? city : user?.residance;
    }
    if (maxDistance) {
      filterCriteria.maxDistance = maxDistance;
    }

    const data = {
      offerProvide: offers,
    };

    getSearchedChildCarer({ filterCriteria, data }).then((res) => {
      console.log(res);
      if (res?.data?.length > 0) {
        dispatch(setChildCarerFilterData(res.data));
        setStep((prev) => prev + 1);
      } else if (res?.data?.length === 0) {
        setStep("error");
      } else if (res?.error?.data?.message === "Distance is more than 100") {
        setWarning(true);
      } else if (res?.error?.data?.message === "No matched users") {
        setStep("error");
      } else {
        setStep("error");
      }
    });
  };

  const handleSearchAgain = () => {
    setOffers([]);
    setLookfor([]);
    dispatch(setCity(""));
    setStep(0);
    setWarning(false);
  };

  const handleChange = (e) => {
    const distance = e.target.value;
    setDistanceInputValue(distance);
    if (Number(distance) > 30) {
      setWarning(true);
    } else {
      setWarning(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  useEffect(() => {
    if (router.query?.location) {
      submitButtonRef.current.click();
    }
  }, [router.query?.location]);

  return (
    <>
      <Meta>ChildCare</Meta>
      <section className={`container mx-auto ${styles.mainContainer}`}>
        {/* banner */}
        <div className={styles.childCareBanner}>
          {step === 0 && <h3>Find childcare for your child here</h3>}
          {(step === 1 || step === 2) && <h3>Search Result</h3>}
          {step === "error" && <h3>Find childcare for your child here</h3>}
        </div>

        {/* chilcare form */}

        {step === 0 && (
          <div className={styles.contentContainer}>
            <div className={styles.emptyContainer}></div>
            <div className={styles.formContainer}>
              <form onSubmit={handleSerchFormSubmit}>
                <h6>I'm looking for</h6>
                <div className={`d-flex ${styles.grannySelction}`}>
                  <div
                    onClick={() => handleLookFor("Female")}
                    className={styles.checkBoxContainer}
                  >
                    <input
                      id="granny"
                      type="checkbox"
                      name="lookFor"
                      value="gg"
                      checked={lookfor.includes("Female")}
                      className={`me-2 ${styles.colorCheckBox}`}
                    />
                    <label htmlFor="granny">Granny</label>
                  </div>
                  <div
                    onClick={() => handleLookFor("Male")}
                    className={styles.checkBoxContainer}
                  >
                    <input
                      id="grandpa"
                      type="checkbox"
                      name="lookFor"
                      value="bb"
                      checked={lookfor.includes("Male")}
                      className={`me-2 ${styles.colorCheckBox}`}
                    />
                    <label htmlFor="grandpa">Grandpa</label>
                  </div>
                </div>

                <div className={styles.inputContainer}>
                  <label>Near</label>
                  <input
                    type="text"
                    className="w-100"
                    Value={city}
                    name="city"
                    // onChange={(e) => handleChange(e)}
                  />

                  <div className={styles.distance}>
                    <p>
                      Up to max.{" "}
                      <input
                        value={distanceInputValue}
                        type="number"
                        name="maxDistance"
                        className="mx-3 text-center"
                        placeholder="30"
                        onChange={(e) => handleChange(e)}
                      />{" "}
                      km distance
                    </p>
                  </div>
                </div>
                {warning && (
                  <>
                    <h5>
                      The search is limited to a radius of 30 km and will be
                      reset automatically.
                    </h5>
                    <h5 style={{ marginBottom: "34px" }}>
                      {" "}
                      We ask for your understanding.
                    </h5>
                  </>
                )}

                <div className={styles.typesContainer}>
                  <h6 className="text-start">
                    I need the following types of care
                  </h6>
                  <div className={styles.typesCheckboxs}>
                    <div className={styles.box1}>
                      <div className={styles.checkBoxContainer}>
                        <input
                          type="checkbox"
                          value="Classic babysitting for children from 1 year"
                          onChange={(e) =>
                            handleOfferProvideValue(e.target.value)
                          }
                        />
                        <label>
                          Classic child sitting (child age &gt; 1y.)
                        </label>
                      </div>
                      <div className={styles.checkBoxContainer}>
                        <input
                          type="checkbox"
                          value="Child care for children from 4 years"
                          onChange={(e) =>
                            handleOfferProvideValue(e.target.value)
                          }
                        />
                        <label>
                          Classic child sitting (child age &gt; 4y.)
                        </label>
                      </div>
                      <div className={styles.checkBoxContainer}>
                        <input
                          type="checkbox"
                          value="Homework help classes 1 - 4"
                          onChange={(e) =>
                            handleOfferProvideValue(e.target.value)
                          }
                        />
                        <label>Homework supervision 1. - 4. class</label>
                      </div>
                      <div className={styles.checkBoxContainer}>
                        <input
                          type="checkbox"
                          value="Homework help classes 5 - 7"
                          onChange={(e) =>
                            handleOfferProvideValue(e.target.value)
                          }
                        />
                        <label>Homework supervision 5. - 7. class</label>
                      </div>
                    </div>
                    <div className={styles.box1}>
                      <div className={styles.checkBoxContainer}>
                        <input
                          type="checkbox"
                          value="Baking/cooking (for the child and with the child)"
                          onChange={(e) =>
                            handleOfferProvideValue(e.target.value)
                          }
                        />
                        <label>Cook and bake</label>
                      </div>
                      <div className={styles.checkBoxContainer}>
                        <input
                          type="checkbox"
                          value="Pick-up and delivery services"
                          onChange={(e) =>
                            handleOfferProvideValue(e.target.value)
                          }
                        />
                        <label>Pick up and delivery services</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  {isLoading ? (
                    <div className={` ${styles.searchingContainer}`}>
                      <div className="d-flex flex-column flex-md-row align-items-center gap-2">
                        <div class="spinner-border" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>{" "}
                        <div>{t("searching")}</div>
                      </div>
                    </div>
                  ) : (
                    <button
                      ref={submitButtonRef}
                      className={`btn ${styles.formButton}`}
                      disabled={isLoading}
                    >
                      {t("startSearch")}
                    </button>
                  )}
                </div>
                {searchError && (
                  <p className="text-danger mt-2">{searchError}</p>
                )}
              </form>
            </div>
            <div className={styles.imageContainer}>
              <img src={children.src} alt="" />
            </div>
          </div>
        )}

        {/* search result */}

        {(step === 1 || step === 2) && (
          <SearchResult
            setStep={setStep}
            handleSearchAgain={handleSearchAgain}
          />
        )}

        {step === "error" && (
          <div className={styles.contentContainer}>
            <div className={styles.emptyContainer}></div>
            <div className={styles.formContainer}>
              <form>
                <p className="pt-5">
                  Unfortunately, no matching grandmas or grandpas were found for
                  your <br /> search criteria more presents.
                </p>
                <h6>Tip</h6>

                <p className="pb-5">
                  Increase the area or{" "}
                  <Link href="#" onClick={() => setModalShow(true)}>
                    click here
                  </Link>{" "}
                  to be notified as soon as a childcare <br /> worker registers
                  with your criteria
                </p>

                <div className="text-center">
                  <button
                    onClick={handleSearchAgain}
                    className={`btn ${styles.formButton}`}
                    type="submit"
                  >
                    Search Again
                  </button>
                </div>
              </form>
            </div>
            <div className={styles.imageContainer}>
              <img src={children1.src} alt="" />
            </div>
          </div>
        )}

        <ChildCareSeachError
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </section>
    </>
  );
};

export default ChildCare;
