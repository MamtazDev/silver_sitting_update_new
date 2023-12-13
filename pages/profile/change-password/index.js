import ProfileLayout from "@/layouts/Profile";
import React from "react";
import styles from "@/styles/ChangePassword.module.css";
import children from "../../../public/assets/images/child_change_password.png";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { useChangePasswordMutation } from "@/features/register/registerApi";
import { useRouter } from "next/router";
import { userLoggedOut } from "@/features/register/registerSlice";
import Cookies from "js-cookie";

const ChangePassword = () => {
  const { user } = useSelector((state) => state.register);
  const dispatch = useDispatch();

  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const router = useRouter();

  const passwordRegex = /^(?=.*[a-z])(?=.*\d).{8,}$/;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    const email = user?.email;

    const data = {
      email,
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
      const response = await changePassword(data);

      if (response?.data?.success) {
        Swal.fire({
          icon: "success",
          title: "Successfull!",
          text: "Password changed successfully!",
          showConfirmButton: false,
          timer: 1500,
        });

        dispatch(userLoggedOut());
        localStorage.removeItem("silverSittingAuth");
        Cookies.remove("silverSitting");
        router.push("/login");
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
  );
};

ChangePassword.PageLayout = ProfileLayout;
export default ChangePassword;
