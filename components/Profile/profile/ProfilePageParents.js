import React, { useRef, useState } from "react";
import styles from "@/styles/ProfilePageParents.module.css";
import camera from "../../../public/assets/icons/camera.png";
import profileImage from "../../../public/assets/images/pobox-profile.png";
import {
  useEditUserMutation,
  useGetSingleUserQuery,
} from "@/features/register/registerApi";

const ProfilePageParents = ({ user }) => {
  const { data: userInfo, isSuccess } = useGetSingleUserQuery(user?._id);

  const [editUser, { isError, isLoading }] = useEditUserMutation();

  console.log(userInfo);

  const [selectedImage, setSelectedImage] = useState(null);
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const phoneNumber = form.phoneNumber.value;
    const streetOrHouseNumber = form.streetOrHouseNumber.value;
    const postCode = parseInt(form.postCode.value);
    const residance = form.location.value;

    const imageHostKey = "7378254be2fef904c69a0c05769ced22";

    const fromData = new FormData();
    fromData.append("image", selectedImage);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

    if (selectedImage) {
      fetch(url, {
        method: "POST",
        body: fromData,
      })
        .then((res) => res.json())
        .then((imgData) => {
          if (imgData.success) {
            const data = {
              image: imgData.data.url,
              firstName,
              lastName,
              phoneNumber,
              streetOrHouseNumber,
              postCode,
              residance,
            };

            editUser({ id: user?._id, editData: data }).then((res) => {
              if (res.data.status === 200) {
                alert(res.data.message);
              }
            });
          }
        });
    } else {
      const data = {
        image: userInfo?.image,
        firstName,
        lastName,
        phoneNumber,
        streetOrHouseNumber,
        postCode,
        residance,
      };

      editUser({ id: user?._id, editData: data }).then((res) => {
        if (res.data.status === 200) {
          alert(res.data.message);
        }
      });
    }
  };
  return isSuccess ? (
    <div className={styles.mainContainer}>
      <h4>My Account</h4>

      <p className={styles.description}>
        Review and edit your personal information
      </p>

      <div className={styles.emailContainer}>
        <p>
          Email For Registration: <span>{user?.email}</span>
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* image input */}
        <div className={styles.imageBox}>
          <div className={styles.imageMainContainer}>
            <div className={styles.userImageContainer}>
              <img
                className="object-cover w-full h-full rounded-full"
                src={
                  selectedImage
                    ? URL.createObjectURL(selectedImage)
                    : userInfo?.image
                }
                alt=""
              />
            </div>
            <img
              className={styles.littleCamera}
              src={camera.src}
              alt=""
              onClick={handleClick}
            />
            <input
              type="file"
              className={styles.imageInputField}
              accept="image/*"
              onChange={handleFileChange}
              ref={inputRef}
            />
          </div>
        </div>
        {/* image input */}

        {/* input field */}
        <div className={styles.inputContainer}>
          <div>
            <label>
              First Name <span>*</span>
            </label>
            <input
              type="text"
              className="w-100"
              name="firstName"
              Value={userInfo?.firstName}
              required
            />
          </div>
          <div>
            <label>
              Last Name <span>*</span>
            </label>
            <input
              type="text"
              className="w-100"
              name="lastName"
              Value={userInfo?.lastName}
              required
            />
          </div>
          <div>
            <label>Phone Number</label>
            <input
              type="number"
              className="w-100"
              name="phoneNumber"
              Value={userInfo?.phoneNumber}
            />
          </div>

          <div>
            <label>Street No</label>
            <input
              type="text"
              className="w-100"
              name="streetOrHouseNumber"
              Value={userInfo?.streetOrHouseNumber}
            />
          </div>
          <div>
            <label>
              Postal Code <span>*</span>
            </label>
            <input
              type="number"
              className="w-100"
              name="postCode"
              required
              Value={userInfo?.postCode}
            />
          </div>
          <div>
            <label>
              Location<span>*</span>
            </label>
            <input
              type="text"
              className="w-100"
              name="location"
              Value={userInfo?.residance}
              required
            />
          </div>
        </div>
        {/* input field */}

        <div className={`text-center ${styles.buttonContainer}`}>
          <button className="_button" type="submit" disabled={isLoading}>
            Update
          </button>
        </div>
      </form>
    </div>
  ) : (
    ""
  );
};

export default ProfilePageParents;
