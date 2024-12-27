import React from "react";
import HeadTitle from "../assets/HeadTitle";
import Profile from "../assets/form/Profile";
import Notification from "../assets/form/Notification";
import { useNavigate } from "react-router-dom";

const ProfileForm = () => {
  const navigate=useNavigate()
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className=" flex-grow space-y-8  text-zinc-800 dark:text-white overflow-y-auto  scrollbar-thin dark:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-800 scrollbar-track-gray-500 scrollbar-thumb-gray-600 p-1  lg:px-12 lg:py-8 bg-gray-100  dark:bg-gray-500"
    >
      <HeadTitle
        Title={"Profile setting"}
        subTitle={
          "This information will be displayed publicly so be careful what you share."
        }
      />
      <Profile />
      <Notification />

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="text-sm/6 font-semibold "
        >
          Cancel
        </button>
        <button
          type="submit"
          className=" bg-gray-400 dark:bg-gray-800 hover:bg-gray-500  dark:hover:bg-gray-700 rounded-md px-3 py-2 text-sm font-semibold  shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500 dark:focus-visible:outline-gray-700 "
        >
          Save
        </button>
      </div>
    </form>
  );
};
export default ProfileForm;
