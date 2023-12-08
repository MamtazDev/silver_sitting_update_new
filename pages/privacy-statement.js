import Banner from "@/components/PrivacyPolicy/Banner";
import DataCollection from "@/components/PrivacyPolicy/DataCollection";
import General from "@/components/PrivacyPolicy/General";
import Purpose from "@/components/PrivacyPolicy/Purpose";
import React from "react";

const privacyStatement = () => {
  return (
    <div>
      <Banner />
      <General />
      <Purpose />
      <DataCollection />
    </div>
  );
};

export default privacyStatement;
