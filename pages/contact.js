import React from "react";
import styles from "@/styles/Contact.module.css";
import { useMakeContactMutation } from "@/features/common/commonApi";
import { useRouter } from "next/router";

const contact = () => {
  const [makeContact, { isLoading }] = useMakeContactMutation();

  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;

    const data = {
      firstName,
      lastName,
      email,
      phone,
      message,
    };

    makeContact(data).then((res) => {
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
      <section className={`container mx-auto ${styles.contactMainContainer}`}>
        <div className={styles.emptyContainer}></div>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <h2>Contact</h2>
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
                <input type="phone" name="phone" required />
              </div>
            </div>

            <textarea
              placeholder="Write a message...."
              name="message"
              required
            />
            <div className="text-center">
              <button className="_button" type="submit" disabled={isLoading}>
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className={styles.emptyContainer}></div>
      </section>
    </>
  );
};

export default contact;
