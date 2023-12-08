import React, { useState } from "react";
import styles from "@/styles/Register.module.css";
import parents from "../public/assets/icons/register-parent.png";
import grandma from "../public/assets/icons/register-grandma.png";
import child from "../public/assets/images/register-child.png";
import light from "../public/assets/icons/register-light.png";
import info from "../public/assets/icons/info.png";
import Meta from "@/components/Shared/Meta";
import Link from "next/link";
import sms from "../public/assets/success-sms.png";
import { useDispatch, useSelector } from "react-redux";
import { setRole, setStepControll } from "@/features/register/registerSlice";
import { useRegisterMutation } from "@/features/register/registerApi";
import loadingGif from "../public/assets/loading.svg";
import { useTranslation } from "react-i18next";
import translations from "@/utils/translation";

const Register = () => {
  const { i18n } = useTranslation();
  const t =
    i18n.language === "en"
      ? function (str) {
          return translations.en[str];
        }
      : function (str) {
          return translations.de[str];
        };

  const { registerPage, role } = useSelector((state) => state.register);
  const dispatch = useDispatch();

  const [warningShow, setWarningShow] = useState(false);
  const [older, setOlder] = useState(false);
  const [terms, setTerms] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [errors, setError] = useState("");
  const [gender, setGender] = useState();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const validatePassword = (value) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*\d).{8,}$/;
    return passwordRegex.test(value);
  };

  const handlePasswordCheck = (e) => {
    const isValid = validatePassword(e.target.value);
    if (isValid) {
      setError("");
    } else {
      setError(
        "Password should be 8 characters and include at least one lowercase letter and one digit."
      );
    }
  };

  const checkMatchedPassword = (password, rePassword) => {
    return password === rePassword;
  };

  const [register, { isLoading, isSuccess, isError, error, data }] =
    useRegisterMutation();

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    const form = event.target;

    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const postCode = form.postCode.value;
    const residence = form.residence.value;
    const password = form.password.value;
    const rePassword = form.rePassword.value;
    const streetOrHouseNumber = form.streetOrHouseNumber.value;

    if (role === "childcarer" && older) {
      const passwordTesting = validatePassword(password);

      if (passwordTesting) {
        const matchedPassword = checkMatchedPassword(password, rePassword);

        if (matchedPassword) {
          if (terms && privacy && gender) {
            const data = {
              role,
              firstName,
              lastName,
              email,
              postCode: parseInt(postCode),
              residance: residence,
              password,
              streetOrHouseNumber,
              gender,
            };
            register(data).then((res) => {
              if (res.data?.status === 200) {
                setError("");
                dispatch(setStepControll());
                scrollToTop();
              } else if (res.error) {
                setError(res.error.data.message);
              }
            });
          } else {
            setError("Please accept the terms and privacy.");
          }
        } else {
          setError("Password doesn't matched!");
        }
      } else {
        setError(
          "Password at least 8 characters and include at least one lowercase letter and one digit."
        );
      }
    } else if (role === "parents") {
      const passwordTesting = validatePassword(password);
      if (passwordTesting) {
        const matchedPassword = checkMatchedPassword(password, rePassword);

        if (matchedPassword) {
          if (terms && privacy) {
            const data = {
              role,
              firstName,
              lastName,
              email,
              postCode: parseInt(postCode),
              residance: residence,
              password,
              streetOrHouseNumber,
            };
            register(data).then((res) => {
              if (res.data?.status === 200) {
                setError("");
                dispatch(setStepControll());
                scrollToTop();
              } else if (res.error) {
                setError(res.error.data.message);
              }
            });
          } else {
            setError("Please accept the terms and privacy.");
          }
        } else {
          setError("Password doesn't matched!");
        }
      } else {
        setError(
          "Password should be 8 characters and include at least one lowercase letter and one digit."
        );
      }
    } else {
      setError("Please confirm that you are at least 55 years old.");
    }
  };

  return (
    <>
      <Meta>Register</Meta>
      <section className={`container mx-auto ${styles.signInMainContainer}`}>
        <div className={styles.emptyContainer}></div>
        <div className={styles.mainRegisterContainer}>
          {/* 1st section */}
          {registerPage.step === 1 && (
            <div className={styles.register1stSection}>
              <h3>Register</h3>
              <h6>I am...</h6>

              {/* choose person */}
              <div className={styles.choosePersonContainer}>
                <div onClick={() => dispatch(setRole("childcarer"))}>
                  <label className={styles.person} htmlFor="grandma">
                    <img src={grandma.src} alt="" />
                    <p>Child care provider</p>
                  </label>
                  <input type="radio" name="person" value="" id="grandma" />
                </div>
                <div onClick={() => dispatch(setRole("parents"))}>
                  <label className={styles.person} htmlFor="parents">
                    <img src={parents.src} alt="" />
                    <p>Parents</p>
                  </label>
                  <input type="radio" name="person" value="" id="parents" />
                </div>
              </div>
              <div className={styles.loginButtonContainer}>
                <button
                  className={`btn`}
                  onClick={() => dispatch(setStepControll(role))}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* 2nd section */}
          {registerPage.step === 2 && (
            <form onSubmit={handleSubmit}>
              <h3>Register</h3>
              {registerPage.heading && (
                <div
                  style={{ height: "100px", marginBottom: "5px" }}
                  className="row align-items-center"
                >
                  <div className="col-12 col-lg-6">
                    <div className={styles.checkboxs}>
                      <input
                        className="mb-0"
                        type="checkbox"
                        checked={older}
                        onChange={() => setOlder(!older)}
                      />
                      <label className="mb-0">
                        I am at least 55 years old <span>*</span>{" "}
                      </label>
                      <img
                        style={{ cursor: "pointer" }}
                        onClick={() => setWarningShow(!warningShow)}
                        src={info.src}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    {warningShow && (
                      <p className="mb-0" id={styles.warning}>
                        Childminders at SilverSitting must be at least 55 years
                        of age. For example, if you are an early retiree and
                        just under 55 years old, you are welcome to email us at
                        info@silversitting.com. In such special cases, an
                        exception can be made if necessary.
                      </p>
                    )}
                  </div>
                </div>
              )}
              {/* 1st row */}

              <div className={styles.twoInputContainer}>
                <div className="w-50">
                  <label>
                    First Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="w-100"
                    required
                  />
                </div>
                <div className="w-50">
                  <label>
                    Last Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="w-100"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label>
                  Gender <span>*</span>
                  <div className={styles.genderInputContainer}>
                    <div>
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        id="male"
                        style={{ marginBottom: "0" }}
                        onChange={(e) => setGender(e.target.value)}
                        checked={gender === "Male"}
                      />
                      <label htmlFor="male" style={{ marginBottom: "0" }}>
                        Masculine
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        id="female"
                        style={{ marginBottom: "0" }}
                        onChange={(e) => setGender(e.target.value)}
                        checked={gender === "Female"}
                      />
                      <label htmlFor="female" style={{ marginBottom: "0" }}>
                        Feminine
                      </label>
                    </div>
                  </div>
                </label>
              </div>
              {/* 2nd row */}
              <div>
                <label>
                  Email address <span>*</span>
                </label>
                <input type="email" name="email" className="w-100" required />
              </div>
              {/* 3rd row */}
              <div className={styles.twoInputContainer}>
                <div className="w-50">
                  <label>
                    Post Code <span>*</span>
                  </label>
                  <input
                    type="number"
                    name="postCode"
                    className="w-100"
                    required
                  />
                </div>
                <div className="w-50">
                  <label>
                    Residence <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="residence"
                    className="w-100"
                    required
                  />
                </div>
              </div>
              {/* 4th row */}
              <div>
                <label>Street/House number</label>
                <input
                  type="text"
                  name="streetOrHouseNumber"
                  className="w-100"
                />
              </div>
              {/* 5th row */}
              <div className={styles.twoInputContainer}>
                <div className="w-50">
                  <label>
                    Password <span>*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="w-100"
                    required
                    onBlur={handlePasswordCheck}
                  />
                </div>
                <div className="w-50">
                  <label>
                    Re-enter Password <span>*</span>
                  </label>
                  <input
                    type="password"
                    name="rePassword"
                    className="w-100"
                    required
                  />
                </div>
              </div>

              <div className={styles.checkboxContainer}>
                <div className={styles.checkboxs}>
                  <input
                    type="checkbox"
                    checked={terms}
                    onChange={() => setTerms(!terms)}
                  />
                  <label>
                    I have read the SilverSitting{" "}
                    <Link href="#!">terms and conditions</Link> and agree to
                    them.
                  </label>
                </div>
                <div className={styles.checkboxs}>
                  <input
                    type="checkbox"
                    checked={privacy}
                    onChange={() => setPrivacy(!privacy)}
                  />
                  <label>
                    I have read SilverSitting's{" "}
                    <Link href="!#">privacy policy</Link> and agree to it
                  </label>
                </div>
              </div>
              <p className="text-danger w-75">{errors}</p>
              {isLoading ? (
                <div className={`text-center ${styles.loginButtonContainer}`}>
                  <button
                    className={`btn disabledButton`}
                    type="button"
                    disabled
                  >
                    Registering <img src={loadingGif.src} width={25} />
                  </button>
                </div>
              ) : (
                <div className={`text-center ${styles.loginButtonContainer}`}>
                  <button className={`btn`} type="submit">
                    Register
                  </button>
                </div>
              )}
              <div className={styles.quoteText}>
                If you need assistance with registration then contact us at
                <a href="mailto:info@silversitting.com">
                  info@silversitting.com
                </a>{" "}
                . We're happy to help!
              </div>

              <div className={styles.lightImage}>
                <img src={light.src} alt="" />
              </div>
            </form>
          )}
          {registerPage.step === 3 && (
            <div className={styles.success}>
              <img src={sms.src} alt="" />
              <h6>Nice that you have registered with SilverSitting!</h6>
              <p>
                To complete your registration, please click on the{" "}
                <Link
                  href="https://mail.google.com/mail/u/0/#inbox"
                  target="_blank"
                >
                  link
                </Link>{" "}
                in the <br /> email we just sent you.
              </p>
              <p>
                <span>For information :</span> a{" "}
                <Link
                  href="https://mail.google.com/mail/u/0/#inbox"
                  target="_blank"
                >
                  link
                </Link>{" "}
                can be a word with a blue background that can be clicked on.
              </p>
            </div>
          )}
        </div>
        <div
          className={
            registerPage.step === 1 || registerPage.step === 3
              ? styles.emptyContainer
              : styles.imageContainer
          }
        >
          {registerPage.step === 2 && (
            <img src={child.src} alt="" className="h-100" />
          )}
        </div>
      </section>
    </>
  );
};

export default Register;
