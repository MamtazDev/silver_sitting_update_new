import React from 'react';
import styles from "@/styles/Pobox.module.css";

const NoSms = () => {
    return (
        <div className={styles.nosms}>
            <h6>No message found</h6>
        </div>
    );
};

export default NoSms;