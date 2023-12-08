import React, { useState } from "react";
import styles from "@/styles/Login.module.css";
import children from "../public/assets/images/child-login.png";
import Link from "next/link";
import Meta from "@/components/Shared/Meta";
import { useLoginMutation } from "@/features/register/registerApi";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import translations from "@/utils/translation";
import loadingGif from "@/public/assets/loading.svg";

const Login = () => {
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState("");
  const [isValid, setIsValid] = useState(false);

  const router = useRouter();

  const [login, { isError, isLoading, isSuccess, error, data }] =
    useLoginMutation();

  const { i18n } = useTranslation();

  const t =
    i18n.language === "en"
      ? function (str) {
          return translations.en[str];
        }
      : function (str) {
          return translations.de[str];
        };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    // if (agree) {
    const data = {
      email,
      password,
    };

    login(data).then((res) => {
      if (res.data?.accessTOken) {
        router.push("/profile");
      } else if (res.error) {
        setErrors(res.error.data.message);
      }
    });
    // } else {
    //   setErrors("You have to agree the privacy policy.");
    // }
  };

  return (
    <>
      <Meta>Login</Meta>
      <section className={`container mx-auto ${styles.loginMainContainer}`}>
        <div className={styles.emptyContainer}></div>
        <div className={styles.loginFormContainer}>
          <form onSubmit={handleSubmit}>
            <h2>{t("logIn")}</h2>
            <div className={`${styles.inputContainer} ${styles.emailInput}`}>
              <label>
                Email address <span>*</span>
              </label>
              <input type="email" name="email" required className="w-100" />
            </div>
            <div className={styles.inputContainer}>
              <label>
                Password <span>*</span>
              </label>
              <input
                type="password"
                name="password"
                required
                className="w-100"
              />
            </div>
            <div
              className={`d-flex align-items-center mt-2 ${styles.policy} justify-content-between`}
            >
              {/* <div className="d-flex align-items-center gap-2">
                <input
                  type="checkbox"
                  name=""
                  checked={agree}
                  onChange={() => setAgree(!agree)}
                />
                <label className={styles.policyLabel}>
                  I have read the{" "}
                  <Link href="/privacy-statement" className="m-0 p-0 d-inline">
                    Privacy Policy
                  </Link>{" "}
                  and agree to it. <span>*</span>
                </label>
              </div> */}
              <p>Forgot Password?</p>
            </div>
            <p className="text-danger">{errors}</p>
            <div className="text-center">
              {isLoading ? (
                <button
                  className={`btn ${styles.loginButton} disabledButton`}
                  disabled
                >
                  Logging <img src={loadingGif.src} width={25} />
                </button>
              ) : (
                <button
                  className={`btn ${styles.loginButton}`}
                  type="submit"
                  disabled={isLoading}
                >
                  Log In
                </button>
              )}
            </div>
          </form>
          <div className={styles.formFooter}>
            New Here? Click here to{" "}
            <Link href="/register">
              <span>Register</span>
            </Link>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={children.src} alt="" />
        </div>
      </section>
    </>
  );
};

export default Login;
