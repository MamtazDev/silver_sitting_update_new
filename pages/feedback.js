import Meta from "@/components/Shared/Meta";
import React, { useState } from "react";
import styles from "@/styles/Feedback.module.css";
import child from "../public/assets/images/feedbackChild.png";
import love from "../public/assets/icons/love.png";
import filledLove from "../public/assets/icons/filledLove.png";
import { useAddFeedbackMutation } from "@/features/common/commonApi";
import { useRouter } from "next/router";

const Feedback = () => {
  const [feedback, setFeedback] = useState(0);

  const [addFeedback, { isLoading }] = useAddFeedbackMutation();

  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const feedbackMessage = form.feedbackMessage.value;

    const data = {
      firstName,
      lastName,
      email,
      phone,
      feedbackMessage,
      rating: feedback,
    };

    addFeedback(data).then((res) => {
      if (res.data?.status === 200) {
        form.reset();
        alert(res.data.message);
        router.push("/");
      } else if (res.error) {
        alert("Error occured!");
      }
    });
  };
  return (
    <>
      <Meta>Feedback</Meta>
      <section className={`container mx-auto ${styles.feedbackMainContainer}`}>
        <div className={styles.emptyContainer}></div>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <h2>We would like to know what you think</h2>
            <div className={styles.inputContainer}>
              <div>
                <label>First Name</label>
                <input type="text" name="firstName" required />
              </div>
              <div>
                <label>Last Name</label>
                <input type="text" name="lastName" required />
              </div>
              <div>
                <label>Email</label>
                <input type="email" name="email" required />
              </div>
              <div>
                <label>Phone</label>
                <input type="tel" name="phone" />
              </div>
            </div>

            <div className={styles.ratingContainer}>
              <div>
                <h6>Rate us</h6>
                <div>
                  {feedback >= 1 ? (
                    <img
                      src={filledLove.src}
                      alt=""
                      onClick={() => setFeedback(1)}
                    />
                  ) : (
                    <img src={love.src} alt="" onClick={() => setFeedback(1)} />
                  )}
                  {feedback >= 2 ? (
                    <img
                      src={filledLove.src}
                      alt=""
                      onClick={() => setFeedback(2)}
                    />
                  ) : (
                    <img src={love.src} alt="" onClick={() => setFeedback(2)} />
                  )}
                  {feedback >= 3 ? (
                    <img
                      src={filledLove.src}
                      alt=""
                      onClick={() => setFeedback(3)}
                    />
                  ) : (
                    <img src={love.src} alt="" onClick={() => setFeedback(3)} />
                  )}
                  {feedback >= 4 ? (
                    <img
                      src={filledLove.src}
                      alt=""
                      onClick={() => setFeedback(4)}
                    />
                  ) : (
                    <img src={love.src} alt="" onClick={() => setFeedback(4)} />
                  )}
                  {feedback === 5 ? (
                    <img
                      src={filledLove.src}
                      alt=""
                      onClick={() => setFeedback(5)}
                    />
                  ) : (
                    <img src={love.src} alt="" onClick={() => setFeedback(5)} />
                  )}
                </div>
              </div>
            </div>

            <textarea
              placeholder="What could we improve?"
              name="feedbackMessage"
            />
            <div className={styles.buttonContainer}>
              <button className="btn" type="submit" disabled={isLoading}>
                Send Feedback
              </button>
            </div>
          </form>
        </div>
        <div className={styles.imageContainer}>
          <img src={child.src} alt="" />
        </div>
      </section>
    </>
  );
};

export default Feedback;
