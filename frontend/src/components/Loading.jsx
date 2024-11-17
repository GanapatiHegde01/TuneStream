import React from "react";

export const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="w-16 h-16 border-4 border-green-500 border-solid border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};