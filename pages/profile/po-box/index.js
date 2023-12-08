import NoSms from "@/components/Pobox/NoSms";
import PoBox from "@/components/Pobox/PoBox";
import { useGetConversationByUserQuery } from "@/features/chat/chatApi";
import ProfileLayout from "@/layouts/Profile";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const POBOX = () => {
  const [step, setStep] = useState(1);
  const { user } = useSelector((state) => state.register);

  const { data, isLoading, isSuccess, isError } = useGetConversationByUserQuery(
    user?._id
  );

  return (
    <div className="w-100">
      {data?.length > 0 && isSuccess ? <PoBox data={data} /> : <NoSms />}
    </div>
  );
};

POBOX.PageLayout = ProfileLayout;

export default POBOX;
