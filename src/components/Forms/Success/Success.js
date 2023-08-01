import React, { useContext } from 'react';
import { FormContext } from "../../../App";
import completedGif from "./../../../completed.gif";

function Success() {
  const { formData } = useContext(FormContext);
  const { displayName } = formData;
  let name = `${displayName?.charAt(0)?.toUpperCase()} ${displayName?.slice(1)}}`;
  
  const congratsMessage = !name 
  ? `Congratulations, ${name}!` 
  : "Congratulations!";
  
  const onBoardingMessage = !name
  ? `You have completed onboarding, you can start using ${name}!`
  : "You have completed onboarding, you can start using now!";

  const launchMessage = !name? `Launch ${name}`: "Launch";

  return (
    <div className="flex flex-col justify-center items-center">
    <img src={completedGif} alt='completed' width="35px" height="35px"/>
    <div className="text-2xl font-medium self-center mb-2 tracking-wide pt-4">
        {congratsMessage}
    </div>
        <div className="font-light self-center mb-2 text-gray-500 mb-2 tracking-normal pb-2 grayscale text-base">
        {onBoardingMessage}
        </div>
    <button
      className="text-xs rounded-md w-full btn-bg-color font-light text-white my-2 p-2"
      type="submit"
    >
      {launchMessage}
    </button>
  </div>
  );
}

export default Success;