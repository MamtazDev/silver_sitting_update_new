import React from "react";
import styles from "@/styles/ForgotPassword.module.css";
import children from "@/public/assets/images/child_change_password.png";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { useForgotPasswordMutation } from "@/features/register/registerApi";

const ForgotPasswordPage = () => {
  //   const { user } = useSelector((state) => state.register);
  //   const dispatch = useDispatch();

  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

  const router = useRouter();

  console.log(router?.query?.user, "dd");

  const passwordRegex = /^(?=.*[a-z])(?=.*\d).{8,}$/;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    const userId = router?.query?.user;
    const data = {
      userId,
      password,
    };
    const isValid = passwordRegex.test(password);
    if (!isValid) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password should be 8 characters and include at least one lowercase letter and one digit.",
      });
      return;
    }
    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password doesn't matched!",
      });
      return;
    }
    try {
      const response = await forgotPassword(data);
      if (response?.data?.success) {
        Swal.fire({
          icon: "success",
          title: "Successfull!",
          text: "Password changed successfully!",
          showConfirmButton: false,
          timer: 1500,
        });

        router.push("/login");
      } else if (response?.error?.data) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `User Not Found`,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${response?.data?.message}`,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Somethings went wrong...",
      });
    }
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className={styles.mainContainer}>
        <div className={styles.emptyContainer}></div>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <h3>Change password</h3>

            <div>
              <label>Enter your new password</label>
              <input
                type="password"
                style={{ marginBottom: "10px" }}
                name="password"
              />
            </div>
            <div>
              <label>Re-enter password</label>
              <input type="password" name="confirmPassword" />
            </div>
            <div className="text-center">
              {isLoading ? (
                <button type="button" disabled>
                  Changing...
                </button>
              ) : (
                <button type="submit">Change</button>
              )}
            </div>
          </form>
        </div>
        <div className={styles.imageContainer}>
          <img src={children.src} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
