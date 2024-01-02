import React, { useState } from "react";
import styles from "@/styles/ResetPassword.module.css";
import children from "@/public/assets/images/child_change_password.png";
import { useResetPasswordMutation } from "@/features/register/registerApi";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const Reset = () => {
  //   const [isLoading, setIsLoading] = useState(false);

  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const [step, setStep] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const { push } = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    const email = e.target.email.value;

    try {
      const response = await resetPassword({ email: email });
      console.log(response);

      if (response?.data?.success) {
        setStep(1);
      } else if (response?.error?.data) {
        setErrorMessage(response?.error?.data?.message);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  const handleClick = () => {
    push("/login");
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {step === 0 && (
        <div style={{ margin: "0" }} className={styles.mainContainer}>
          <div
            style={{ width: "100%", padding: "30px" }}
            className={styles.formContainer}
          >
            <form onSubmit={handleSubmit}>
              <h3>Reset password</h3>

              <div>
                <label>Enter your e-mail address</label>
                <input
                  type="email"
                  style={{ marginBottom: "10px" }}
                  name="email"
                  required
                />
              </div>
              {/* <div>
            <label>Reset password</label>
            <input type="password" name="confirmPassword" />
          </div> */}
              <div className="text-center mt-4">
                {isLoading ? (
                  <button type="button" disabled>
                    Sending email...
                  </button>
                ) : (
                  <button type="submit">Reset</button>
                )}
              </div>
              <p className="text-danger mt-2">{errorMessage}</p>
            </form>
          </div>
        </div>
      )}
      {step === 1 && (
        <div style={{ margin: "0" }} className={styles.mainContainer}>
          <div style={{ width: "100%" }} className={styles.formContainer}>
            <form onSubmit={handleSubmit}>
              <h3>Check your inbox</h3>

              <div>
                <label>
                  We sent an email with the link to set up the new password.
                </label>
                {/* <input
                  type="email"
                  style={{ marginBottom: "10px" }}
                  name="email"
                  required
                /> */}
              </div>
              {/* <div>
            <label>Reset password</label>
            <input type="password" name="confirmPassword" />
          </div> */}
              <div className="text-center mt-4">
                <button type="button" onClick={handleClick}>
                  Understood
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reset;
