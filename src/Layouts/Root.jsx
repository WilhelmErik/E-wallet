import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "../Redux/userSlice";
export default function Root() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getUser());
  //   // console.log(userState, " this is kinda weird");
  // }, []);
  return (
    <div>
      <h1>Hello</h1>
      <Outlet />
    </div>
  );
}
