import React from "react";
import OtherUser from "./OtherUser";
import { useSelector } from "react-redux";
import useGetOtherUsers from "../hooks/useGetOtherUsers";

export default function OtherUsers() {
  useGetOtherUsers();
  const { otherUsers } = useSelector((store) => store.user);

  return (
    <div className="overflow-auto">
      {otherUsers?.map((user)=> {
        return <OtherUser user={user} key={user._id}/>
      })}
    </div>
  );
}
