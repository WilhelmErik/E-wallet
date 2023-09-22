import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "../Redux/userSlice";
import { setNames } from "../Redux/cardsSlice";

export default function Root() {
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);

  useEffect(() => {
    //i used short circuiting here to check if there is a name prop and then set the names for all of cards
    userState.name &&
      dispatch(setNames(`${userState.name.first} ${userState.name.last}`));
  }, [userState]);

  return (
    <div>
      <h1>E-Wallet</h1>
      <Outlet />
    </div>
  );
}
