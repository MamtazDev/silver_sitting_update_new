import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ChildCareSeachError = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="searchErrorContainer">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="text-center">
          <h6>
            If you leave us your e-mail address, we will save your search and
            inform you free of charge as soon as a loan grandma or grandpa
            registers with your search criteria. Only one search query can be
            saved per email .
          </h6>
          <p>
            Your e-mail address is safe with us and will not be used for
            advertising purposes or newsletters or similar!
          </p>
          <input type="email" placeholder="Enter your email address" />
          <div onClick={props.onHide}>
            <button className="active_button">Active notification</button>
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default ChildCareSeachError;
