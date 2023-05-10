import {Button, Grid} from "@mui/material";
import {useContext} from "react";

import {AppContext} from "../../../services/AppContext";

function MyFormButtons(props) {

  const {appCtx} = useContext(AppContext);

  const buildBackButton = () => {
    return appCtx.activeStepNumber > 0
        && <Button onClick={props.handleBack}
                   variant="outlined">
          Back
        </Button>;
  }

  const buildNextButton = () => {
    const buttonText = appCtx.activeStepNumber < appCtx.stepsStructure.length - 1
        ? "Next"
        : "Done";
    return <Button onClick={props.handleSubmit}
                   variant="contained">
      {buttonText}
    </Button>;
  }

  return (
      <Grid container
            gap={2}
            direction="row"
            alignItems="center"
            justifyContent={
              appCtx.activeStepNumber === 0
                  ? "right"
                  : "space-between"
            }
            sx={{
              width: '100%',
              marginTop: 2
            }}>
        {buildBackButton()}
        {buildNextButton()}
      </Grid>
  );
}

export default MyFormButtons;
