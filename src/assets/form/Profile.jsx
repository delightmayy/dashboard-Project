import React from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

const Profile = () => {
  return (
    <div className="  border-b border-gray-900/10 px-2 pb-12">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <label htmlFor="username" className="block text-sm/6 font-medium ">
            Username
          </label>
          <div className="mt-2">
            <div className="flex items-center rounded-md dark:bg-gray-300 bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-green-600">
              <div className="shrink-0 select-none text-base text-gray-800 sm:text-sm/6">
                workcation.com/
              </div>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="janesmith"
                className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base dark:bg-gray-300 bg-white dark:text-gray-800  placeholder:text-gray-800 focus:outline focus:outline-0 sm:text-sm/6"
              />
            </div>
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="about" className="block text-sm/6 font-medium ">
            About
          </label>
          <div className="mt-2">
            <textarea
              id="about"
              name="about"
              rows={3}
              className="block w-full rounded-md dark:text-gray-800 dark:bg-gray-300 bg-white px-3 py-1.5 text-base  outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6"
              defaultValue={""}
            />
          </div>
          <p className="mt-3 text-sm/6">
            Write a few sentences about yourself.
          </p>
        </div>

        <div className="col-span-full">
          <label htmlFor="photo" className="block text-sm/6 font-medium ">
            Photo
          </label>
          <div className="mt-2 flex items-center gap-x-3">
            <UserCircleIcon
              aria-hidden="true"
              className="size-12 "
            />
            <button
              type="button"
              className="rounded-md  bg-gray-400 dark:bg-gray-800 px-2.5 py-1.5 text-sm font-semibold  shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-500  dark:hover:bg-gray-700"
            >
              Change
            </button>
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="cover-photo" className="block text-sm/6 font-medium ">
            Cover photo
          </label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 dark:border-gray-100 px-6 py-10">
            <div className="text-center">
              <PhotoIcon
                aria-hidden="true"
                className="mx-auto size-12 text-gray-300"
              />
              <div className="mt-4 flex text-sm/6"> 
                <label
                  htmlFor="file-upload"
                  className="relative px-1 cursor-pointer rounded-md bg-gray-300 dark:bg-gray-300 font-semibold text-green-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-green-700 focus-within:ring-offset-2 hover:text-green-800"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs/5 text-gray-600">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
