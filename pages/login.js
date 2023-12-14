import React, { useState } from "react";
import styles from "@/styles/Login.module.css";
import children from "../public/assets/images/child-login.png";
import Link from "next/link";
import Meta from "@/components/Shared/Meta";
import {
  useLoginMutation,
  useSendResendEmailMutation,
} from "@/features/register/registerApi";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import translations from "@/utils/translation";
import loadingGif from "@/public/assets/loading.svg";
import Swal from "sweetalert2";

const Login = () => {
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState("");
  const [resendErrors, setResendErrors] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [resendEmail, setResendEmail] = useState("");
  const [isResendAllowed, setIsResendAllowed] = useState(true);

  const router = useRouter();

  const [login, { isError, isLoading, isSuccess, error, data }] =
    useLoginMutation();

  const [sendResendEmail, { isLoading: sendingEmail }] =
    useSendResendEmailMutation();

  const handleResendLink = async () => {
    const response = await sendResendEmail({ email: resendEmail });

    if (response?.data?.success) {
      Swal.fire({
        title: "Sent!",
        text: "Activation Link is sent to your email successfully!.",
        icon: "success",
      });
      setIsResendAllowed(false);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

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
    setErrors("");
    setResendErrors("");

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
        if (res.error.data.message === "Please Verify your email.") {
          setResendErrors(res.error.data.message);
          setResendEmail(email);
        } else {
          setErrors(res.error.data.message);
        }
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
              <Link href="/reset-password">Forgot Password?</Link>
            </div>
            <p className="text-danger">{errors}</p>
            {isResendAllowed ? (
              <p>
                <span>{resendErrors}</span>
                {resendErrors && (
                  <button
                    type="button"
                    className="btn btn-link"
                    style={{ color: "#9b3095" }}
                    onClick={handleResendLink}
                  >
                    Resend Email
                  </button>
                )}
              </p>
            ) : (
              <p>Verification link sent!</p>
            )}
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
