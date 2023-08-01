import React, { useContext } from "react";
import { FormContext } from "../../App";
import { Basic, Success, Workspace, Planning } from "../Forms";

function Step() {
  const { activeStepIndex } = useContext(FormContext);
  let stepContent;
  switch (activeStepIndex) {
    case 0:
      stepContent = <Basic />;
      break;
    case 1:
      stepContent = <Workspace />;
      break;
    case 2:
      stepContent = <Planning />;
      break;
    case 3:
        stepContent = <Success />;
        break;
    default:
      break;
  }

  return stepContent;
}

export default Step;
