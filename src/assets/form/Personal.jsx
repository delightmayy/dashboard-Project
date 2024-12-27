import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import HeadTitle from "../HeadTitle";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
useForm;

const Personal = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border-b border-gray-900/25 dark:border-gray-100  pb-12 px-2  flex-grow space-y-6  text-zinc-800 dark:text-white overflow-y-auto  scrollbar-thin dark:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-800 scrollbar-track-gray-500 scrollbar-thumb-gray-600 p-1  lg:px-12 lg:py-8 bg-gray-100  dark:bg-gray-500"
    >
      <HeadTitle
        Title={"Personal Information"}
        subTitle={"Use a permanent address where you can receive mail."}
      />
      <div className="px-2">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-2 sm:gap-y-4 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label htmlFor="firstname" className="block text-sm/6 font-medium ">
              First name
            </label>
            <div className="mt-1">
              <input
                {...register("firstname", {
                  required: "firstname is required",
                })}
                id="firstname"
                name="firstname"
                type="text"
                autoComplete="given-name"
                className={`block w-full rounded-md dark:bg-gray-300 bg-white px-3 py-1.5 text-base text-gray-800  outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 ${
                  errors.firstname
                    ? "focus:outline-red-400 "
                    : "focus:outline-green-500"
                }`}
              />
              {errors.firstname && (
                <span className="text-red-500 italic ps-4 text-sm">
                  {errors.lastname.message}
                </span>
              )}
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="lastname" className="block text-sm/6 font-medium ">
              Last name
            </label>
            <div className="mt-1">
              <input
                {...register("lastname", { required: "lastname is required" })}
                id="lastname"
                name="lastname"
                type="text"
                autoComplete="family-name"
                className={`block w-full rounded-md dark:bg-gray-300 bg-white  px-3 py-1.5 text-base text-gray-800  outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-green-500 sm:text-sm/6  ${
                  errors.lastname
                    ? "focus:outline-red-400 "
                    : "focus:outline-green-500"
                }`}
              />
              {errors.lastname && (
                <span className="text-red-500 italic ps-4 text-sm">
                  {errors.lastname.message}
                </span>
              )}
            </div>
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="email" className="block text-sm/6 font-medium ">
              Email address
            </label>
            <div className="mt-1">
              <input
                {...register("email", {
                  validate: true,
                  required: "invalid email",
                })}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className={`block w-full rounded-md dark:bg-gray-300 bg-white px-3 py-1.5 text-base text-gray-800  outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-green-500 sm:text-sm/6  ${
                  errors.email
                    ? "focus:outline-red-400 "
                    : "focus:outline-green-500"
                }`}
              />
              {errors.email && (
                <span className="text-red-500 italic ps-4 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="country" className="block text-sm/6 font-medium ">
              Country
            </label>
            <div className="mt-1 grid grid-cols-1">
              <select
                {...register("country")}
                id="country"
                name="country"
                autoComplete="country-name"
                className="col-start-1 row-start-1 w-full appearance-none rounded-md dark:bg-gray-300 bg-white  py-1.5 pl-3 pr-8 text-base text-gray-800  outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-green-500 sm:text-sm/6"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
              <ChevronDownIcon
                aria-hidden="true"
                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="street-address"
              className="block text-sm/6 font-medium "
            >
              Street address
            </label>
            <div className="mt-1">
              <input
                {...register("street-address")}
                id="street-address"
                name="street-address"
                type="text"
                autoComplete="street-address"
                className="block w-full rounded-md dark:bg-gray-300 bg-white  px-3 py-1.5 text-base text-gray-800  outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-green-500 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="sm:col-span-2 sm:col-start-1">
            <label htmlFor="city" className="block text-sm/6 font-medium ">
              City
            </label>
            <div className="mt-1">
              <input
                {...register("city")}
                id="city"
                name="city"
                type="text"
                autoComplete="address-level2"
                className="block w-full rounded-md dark:bg-gray-300 bg-white px-3 py-1.5 text-base text-gray-800  outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-green-500 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="region" className="block text-sm/6 font-medium ">
              State / Province
            </label>
            <div className="mt-1">
              <input
                {...register("region")}
                id="region"
                name="region"
                type="text"
                autoComplete="address-level1"
                className="block w-full rounded-md dark:bg-gray-300 bg-white px-3 py-1.5 text-base text-gray-800 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-green-500 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="postalcode"
              className="block text-sm/6 font-medium "
            >
              ZIP / Postal code
            </label>
            <div className="mt-1">
              <input
                {...register("postal-code")}
                id="postal-code"
                name="postal-code"
                type="text"
                autoComplete="postal-code"
                className="block w-full rounded-md dark:bg-gray-300 bg-white  px-3 py-1.5 text-base text-gray-800 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-green-500 sm:text-sm/6"
              />
            </div>
          </div>
        </div>
      </div>
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
          className=" bg-gray-400 dark:bg-gray-800  hover:bg-gray-500  dark:hover:bg-gray-700 rounded-md px-3 py-2 text-sm font-semibold  shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500 dark:focus-visible:outline-gray-700 "
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default Personal;
