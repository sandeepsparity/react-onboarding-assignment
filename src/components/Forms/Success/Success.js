import React, { useContext } from 'react';
import { FormContext } from "../../../App";
import completedGif from "./../../../completed.gif";

function Success() {
  const { formData } = useContext(FormContext);
  const { displayName } = formData;

  
  const congratsMessage = displayName 
  ? `Congratulations, ${displayName}!` 
  : "Congratulations!";
  
  const onBoardingMessage = displayName
  ? `You have completed onboarding, you can start using ${displayName}!`
  : "You have completed onboarding, you can start using now!";

  const launchMessage = displayName? `Launch ${displayName}`: "Launch";

  return (
    <div className="flex flex-col justify-center items-center">
    <img src={completedGif} alt='completed' width="35px" height="35px"/>
    <div className="form-wrapper">
    <div className="text-2xl font-medium self-center mb-2 tracking-wide pt-4 text-center">
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
  </div>
  );
}

export default Success;