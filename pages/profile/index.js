import ProfilePageAdmin from "@/components/Profile/profile/ProfilePageAdmin";
import ProfilePageParents from "@/components/Profile/profile/ProfilePageParents";
import ProfilePageSenior from "@/components/Profile/profile/ProfilePageSenior";
import ProfileLayout from "@/layouts/Profile";
import React from "react";
import { useSelector } from "react-redux";

const MainProfile = () => {
  const { user } = useSelector((state) => state.register);
  return (
    <section>
      {user?.role === "parents" && <ProfilePageParents user={user} />}
      {user?.role === "childcarer" && <ProfilePageSenior user={user} />}
      {user?.role === "admin" && <ProfilePageAdmin user={user} />}
    </section>
  );
};

MainProfile.PageLayout = ProfileLayout;

export default MainProfile;
