import {Typography} from "@mui/material";

function StepTitle(props) {

  return (
      <Typography variant="h6"
                  sx={{fontWeight: 'bold'}}>
        {props.title}
      </Typography>
  );
}

export default StepTitle;
