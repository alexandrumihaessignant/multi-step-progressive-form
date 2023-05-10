import {useContext} from "react";
import {Step, StepLabel, Stepper} from "@mui/material";

import {AppContext} from "../../../services/AppContext";

function MyStepper() {

  const {appCtx} = useContext(AppContext);

  const getStepTitles = () => {
    return appCtx.stepsStructure.map((stepData) => stepData.title);
  }

  function buildSteps() {
    return getStepTitles().map((label) => {
      return (
          <Step key={label}>
            <StepLabel></StepLabel>
          </Step>
      );
    });
  }

  return (
      <Stepper activeStep={appCtx.activeStepNumber}
               sx={{
                 width: '50%',
               }}>
        {buildSteps()}
      </Stepper>
  );
}

export default MyStepper;
