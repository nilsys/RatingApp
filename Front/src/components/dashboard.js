import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUser } from "../reducers/user";
import { logOut } from "../reducers/login";

const DashBoard = () => {
  // Dispatch
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.logged);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch, logged]);

  // useHistory hook for redirections
  const history = useHistory();
  // The User
  const user = useSelector((state) => state.user);
  console.log("Dashboard user: ", user);
  if (!user) {
    return null;
  }

  // Form to add New Items for review
  const addItemForm = (event) => {
    event.preventDefault();
    history.push("/addItem");
  };

  // EditUserForm
  const editUser = (event) => {
    event.preventDefault();
    history.push("/editUser");
  };

  // Remove the account
  const removeUser = (event) => {
    event.preventDefault();
    dispatch(deleteUser(user));
    dispatch(logOut());
    history.push("/");
  };

  return (
    <>
      <h5>{user.name}'s DashBoard</h5>
      <button onClick={addItemForm}>Add an Item</button>
      <button onClick={editUser}>Settings</button>
      <button onClick={removeUser}>Remove Your Account</button>
    </>
  );
};

export default DashBoard;
