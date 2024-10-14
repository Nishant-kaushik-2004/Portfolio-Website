import React from "react";
import { useFormStatus } from "react-dom";
import { BiLogoTelegram } from "react-icons/bi";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="flex items-center justify-center group bg-gray-900 text-white h-[3rem] w-[8rem] outline-none rounded-full  gap-2 hover:scale-110 focus:scale-110 active:scale-105 transition-all hover:shadow-md hover:bg-gray-950 disabled:scale-100 
      disabled:bg-opacity-75 dark:bg-white dark:bg-opacity-10 dark:hover:bg-opacity-15"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <BiLogoTelegram className="text-[15px] opacity-90  group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
        </>
      )}
    </button>
  );
}
