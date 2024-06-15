import React from "react";
import { MetaData } from "../components/MetaData";

export const Contact = () => {
  return (
    <>
      <MetaData title="InsuraMart/Contact" />
      <div className="min-h-screen md:px-20 px-3  pt-14 flex   text-black bg-gray-3002">
        <div className="  w-full  flex  pt-28 flex-col justify-start  items-center gap-4 bg-gray-3002">
          <div className="flex md:flex-row flex-col items-center justify-center md:gap-10 gap-1">
            <div className="md:text-7xl text-3xl titleT">Contact</div>
          </div>

          <div className="pt-[8rem] md:px-[1rem] px-[0rem] w-full p-5 center">
            <div className="titleT pb-6 text-3xl">
              <p className="titleT flex md:flex-row flex-col items-center justify-center md:gap-10 gap-1">
                Coming Soon ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
