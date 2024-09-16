import React from "react";
import OtherUser from "./OtherUser";
import { useSelector } from "react-redux";
import UseGetOtherUsers from "../hooks/UseGetOtherUsers";

export default function OtherUsers() {
  // Custom Hook Called
  UseGetOtherUsers();
  const { otherUsers } = useSelector((store) => store.user);
  if(!otherUsers) return;

  return (
    <div className="overflow-auto">
      {otherUsers?.map((user)=> {
        return <OtherUser user={user} key={user._id}/>
      })}
    </div>
  );
}
