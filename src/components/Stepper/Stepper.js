import React, { useContext, useEffect } from "react";
import { FormContext } from "../../App";

function Stepper() {
  const { activeStepIndex } = useContext(FormContext);
  
  useEffect(() => {
    const stepperItems = document.querySelectorAll(".stepper-item");
    stepperItems.forEach((step, i) => {
      if (i <= activeStepIndex) {
        step.classList.add("btn-bg-color", "text-white");
      } else {
        step.classList.remove("btn-bg-color", "text-white");
      }
    });
  }, [activeStepIndex]);
  return (
    <div className="w-2/3 flex flex-row items-center justify-center py-16 stepper">
      <div className="stepper-item w-8 h-8 text-center px-1 py-1 text-sm border-2 rounded-full">
        1
      </div>
      <div className="flex-auto border-t-2"></div>
      <div className="stepper-item w-8 h-8 text-center text-sm py-1 border-2 rounded-full">
        2
      </div>
      <div className="flex-auto border-t-2"></div>
      <div className="stepper-item w-8 h-8 text-center text-sm py-1 border-2 rounded-full">
        3
      </div>
      <div className="flex-auto border-t-2"></div>
      <div className="stepper-item w-8 h-8 text-center text-sm py-1 border-2 rounded-full">
        4
      </div>
    </div>
  );
}

export default Stepper;
