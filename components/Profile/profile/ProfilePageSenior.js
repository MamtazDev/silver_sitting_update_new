import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/ProfilePageSenior.module.css";
import camera from "../../../public/assets/icons/camera.png";
import profileImage from "../../../public/assets/images/pobox-profile.png";
import { useSelector } from "react-redux";
import {
  useEditUserMutation,
  useGetSingleUserQuery,
} from "@/features/register/registerApi";

const ProfilePageSenior = ({ user }) => {
  const { data: userInfo, isSuccess } = useGetSingleUserQuery(user?._id);

  console.log(userInfo, "gg");

  const [availabilities, setAvailabilities] = useState([]);
  const [offers, setOffers] = useState([]);
  const [gender, setGender] = useState();
  const [aboutMe, setAboutMe] = useState("");

  const [selectedImage, setSelectedImage] = useState(null);
  const inputRef = useRef(null);

  const [editUser, { isError, isLoading }] = useEditUserMutation();

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const imageHostKey = "7378254be2fef904c69a0c05769ced22";

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const postCode = parseInt(form.postCode.value);
    const streetOrHouseNumber = form.streetOrHouseNumber.value;
    const phoneNumber = form.phoneNumber.value;

    const residance = form.location.value;

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
              postCode,
              residance,
              gender,
              phoneNumber,
              streetOrHouseNumber,
              aboutMe,
              availability: availabilities,
              offerProvide: offers,
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
        postCode,
        residance,
        gender,
        phoneNumber,
        streetOrHouseNumber,
        aboutMe,
        availability: availabilities,
        offerProvide: offers,
      };

      editUser({ id: user?._id, editData: data }).then((res) => {
        if (res.data.status === 200) {
          alert(res.data.message);
        }
      });
    }
  };

  const handleAvailabilityValue = (value) => {
    if (availabilities.includes(value)) {
      const filter = availabilities.filter((i) => i !== value);
      setAvailabilities(filter);
    } else {
      setAvailabilities([...availabilities, value]);
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

  useEffect(() => {
    if (userInfo) {
      setAvailabilities(userInfo?.availability);
      setOffers(userInfo?.offerProvide);
      setAboutMe(userInfo?.aboutMe);
      setGender(userInfo?.gender);
    }
  }, [userInfo]);
  return isSuccess ? (
    <div className={styles.mainContainer}>
      <h4>Information About You</h4>
      <p className={styles.description}>
        In order to be able to be found by the parents as a childcare worker,
        some information about you is required. This information is the only way
        to ensure that care is provided that meets your expectations.
      </p>

      <div className={styles.informationContainer}>
        <p>
          You Are Registered On SilverSitting With This E-Mail Address:{" "}
          <span>{user?.email}</span>
        </p>
        <span>Please Always Use This Email Address When Registering.</span>
      </div>

      <div>
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
                      : userInfo.image
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

          {/* input fields */}
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
                Value={userInfo.phoneNumber}
              />
            </div>

            <div>
              <label>Street No</label>
              <input
                type="text"
                className="w-100"
                name="streetOrHouseNumber"
                Value={userInfo.streetOrHouseNumber}
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
                Value={userInfo.postCode}
                required
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
                Value={userInfo.residance}
                required
              />
            </div>
          </div>
          {/* input fields */}

          {/* checkbox input fields */}
          <div className={styles.checkboxInputContainer}>
            <h5>
              Please fill out carefully to ensure an optimal match with the
              parents
            </h5>
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
                      onChange={(e) => setGender(e.target.value)}
                      checked={userInfo?.gender === "Male" || gender === "Male"}
                    />
                    <label htmlFor="male">Masculine</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      id="female"
                      onChange={(e) => setGender(e.target.value)}
                      checked={
                        userInfo?.gender === "Female" || gender === "Female"
                      }
                    />
                    <label htmlFor="female">Feminine</label>
                  </div>
                </div>
              </label>
            </div>

            <div className="mb-4">
              <label>
                Availability <span>*</span>
              </label>
              <div className={styles.availabilityInputContainer}>
                <div>
                  <input
                    type="checkbox"
                    id="duringTheDay"
                    value="During the day"
                    onChange={(e) => handleAvailabilityValue(e.target.value)}
                    checked={availabilities.includes("During the day")}
                  />
                  <label htmlFor="duringTheDay">During the day</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="inTheMorning"
                    value="In the morning"
                    onChange={(e) => handleAvailabilityValue(e.target.value)}
                    checked={availabilities.includes("In the morning")}
                  />
                  <label htmlFor="inTheMorning">In the morning</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="inTheEvening"
                    value="In the evening"
                    onChange={(e) => handleAvailabilityValue(e.target.value)}
                    checked={availabilities.includes("In the evening")}
                  />
                  <label htmlFor="inTheEvening">In the evening</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="atTheWeekend"
                    value="At the weekend"
                    onChange={(e) => handleAvailabilityValue(e.target.value)}
                    checked={availabilities.includes("At the weekend")}
                  />
                  <label htmlFor="atTheWeekend">At the weekend</label>
                </div>
              </div>
            </div>

            <div>
              <label>
                You Offer <span>*</span>
              </label>
              <div className={styles.youOfferInputContainer}>
                <div>
                  <input
                    type="checkbox"
                    id="oneYear"
                    checked={offers.includes(
                      "Classic babysitting for children from 1 year"
                    )}
                    value="Classic babysitting for children from 1 year"
                    onChange={(e) => handleOfferProvideValue(e.target.value)}
                  />
                  <label htmlFor="oneYear">
                    Classic babysitting for children from 1 year
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="fourYear"
                    checked={offers.includes(
                      "Child care for children from 4 years"
                    )}
                    value="Child care for children from 4 years"
                    onChange={(e) => handleOfferProvideValue(e.target.value)}
                  />
                  <label htmlFor="fourYear">
                    Child care for children from 4 years
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="pickUp"
                    checked={offers.includes("Pick-up and delivery services")}
                    value="Pick-up and delivery services"
                    onChange={(e) => handleOfferProvideValue(e.target.value)}
                  />
                  <label htmlFor="pickUp">Pick-up and delivery services</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="cooking"
                    checked={offers.includes(
                      "Baking/cooking (for the child and with the child)"
                    )}
                    value="Baking/cooking (for the child and with the child)"
                    onChange={(e) => handleOfferProvideValue(e.target.value)}
                  />
                  <label htmlFor="cooking">
                    Baking/cooking (for the child and with the child)
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="oneClasses"
                    checked={offers.includes("Homework help classes 1 - 4")}
                    value="Homework help classes 1 - 4"
                    onChange={(e) => handleOfferProvideValue(e.target.value)}
                  />
                  <label htmlFor="oneClasses">
                    Homework help classes 1 - 4
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="fiveClasses"
                    checked={offers.includes("Homework help classes 5 - 7")}
                    value="Homework help classes 5 - 7"
                    onChange={(e) => handleOfferProvideValue(e.target.value)}
                  />
                  <label htmlFor="fiveClasses">
                    Homework help classes 5 - 7
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* checkbox input fields */}

          {/* short about you */}
          <div className={styles.aboutYouContainer}>
            <h5>Short About You</h5>
            <p>
              This text is displayed in the hit list for the parents. Take the
              opportunity to write a few words about yourself so that the
              parents get a good first impression of you.
            </p>
            <div>
              <span>NOTE:-</span>{" "}
              <label>
                Please Only Provide Information That is Publicly Viewable{" "}
                <label className={styles.star}>*</label>
              </label>
            </div>
            <textarea
              placeholder="Write here...."
              className={`w-100 ${styles.textArea}`}
              name="aboutMe"
              onChange={(e) => setAboutMe(e.target.value)}
              value={aboutMe}
            />

            <div>
              <button className="_button" type="submit" disabled={isLoading}>
                Save
              </button>
            </div>
          </div>
          {/* short about you */}
        </form>
      </div>
    </div>
  ) : (
    ""
  );
};

export default ProfilePageSenior;
