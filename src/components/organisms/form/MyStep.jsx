import {useContext} from "react";
import {Grid, TextField} from "@mui/material";

import StepTitle from "../../atoms/StepTitle";

import {AppContext} from "../../../services/AppContext";

function MyStep(props) {

  const {appCtx, setAppCtx} = useContext(AppContext);

  function getFormDataElementValue(field) {
    return appCtx.formData
                 .filter(element => element.label === field.label)
                 .map(element => element.value)[0];
  }

  const buildTextFields = () => {
    return props.stepMetadata
                .fields
                .map((field) => (
                    <TextField key={field.label}
                               label={field.label}
                               type={field.type}
                               sx={{
                                 width: '100%',
                                 marginTop: 4
                               }}
                               onChange={(event) => handleFormDataChange(event)}
                               value={getFormDataElementValue(field)}/>
                ));
  }

  function handleFormDataChange(event) {
    const textFieldLabel = event.target.labels[0].innerText;
    const textFieldValue = event.target.value;
    let tempCtx = {...appCtx};
    tempCtx.formData.forEach(element => {
      if (element.label === textFieldLabel) {
        element.value = textFieldValue;
      }
    });
    setAppCtx(tempCtx);
  }

  return (
      <Grid container
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{
              width: '100%',
              marginTop: 2
            }}>
        <StepTitle title={props.stepMetadata.title.toUpperCase()}/>
        <Grid container
              direction="column"
              alignItems="center"
              justifyContent="center"
              sx={{
                width: '100%',
              }}>
          {buildTextFields()}
        </Grid>
      </Grid>
  );
}

export default MyStep;
