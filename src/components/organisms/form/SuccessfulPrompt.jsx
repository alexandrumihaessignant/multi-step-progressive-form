import React from "react";
import {Grid, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function SuccessfulPrompt() {

  return (
      <Grid container
            gap={2}
            direction="row"
            alignItems="center"
            sx={{
              minWidth: '510px',
            }}>
        <CheckCircleIcon
            style={{
              width: '40px',
              height: '40px'
            }}
            sx={{
              color: 'primary.main'
            }}/>
        <Typography variant="body1"
                    sx={{
                      color: grey[600],
                      fontSize: '21px'
                    }}>
          You have successfully completed the process.
        </Typography>
      </Grid>
  );
}

export default SuccessfulPrompt;
