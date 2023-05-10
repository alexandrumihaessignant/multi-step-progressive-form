import {useContext} from "react";

import MyStepper from "./MyStepper";
import MyStep from "./MyStep";
import MyFormButtons from "./MyFormButtons";
import SuccessfulPrompt from "./SuccessfulPrompt";

import {AppContext} from "../../../services/AppContext";
import {GridBorderRadius} from "../../atoms/Grid.style";

function MyForm() {

  const {appCtx, setAppCtx} = useContext(AppContext);

  const conditionalMyStepComponent = () => {
    return <MyStep stepMetadata={appCtx.stepsStructure[appCtx.activeStepNumber]}/>;
  };

  const handleBack = () => {
    let tempContext = {...appCtx};
    tempContext['activeStepNumber'] = appCtx.activeStepNumber - 1;
    setAppCtx(tempContext);
  }

  const handleSubmit = () => {
    let tempContext = {...appCtx};
    tempContext['activeStepNumber'] = appCtx.activeStepNumber + 1;
    setAppCtx(tempContext);
  }

  const isFormCompleted = () => {
    const isFormCompleted = appCtx.activeStepNumber === appCtx.stepsStructure.length;
    if (isFormCompleted) {
      console.log(appCtx.formData);
    }
    return isFormCompleted;
  };

  return (
      <GridBorderRadius container
                        gap={2}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                          backgroundColor: 'background.default',
                          paddingTop: 6,
                          paddingBottom: 6,
                          paddingRight: 12,
                          paddingLeft: 12,
                          width: '90%',
                          minWidth: '610px',
                          maxWidth: '700px'
                        }}>
        {
          isFormCompleted()
              ? <SuccessfulPrompt/>
              : <>
                <MyStepper/>

                {conditionalMyStepComponent()}

                <MyFormButtons handleBack={handleBack}
                               handleSubmit={handleSubmit}/>
              </>
        }
      </GridBorderRadius>
  )
}

export default MyForm;
