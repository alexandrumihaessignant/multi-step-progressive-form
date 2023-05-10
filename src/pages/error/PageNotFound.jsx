import React from "react";
import {Grid, Link, Typography} from "@mui/material";

import {GridBorderRadius} from "../../components/atoms/Grid.style";

function PageNotFound() {

  return (
      <Grid container
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{
              height: '100vh',
            }}
            sx={{
              backgroundColor: 'primary.main'
            }}>
        <GridBorderRadius container
                          gap={2}
                          direction="column"
                          alignItems="center"
                          justifyContent="center"
                          sx={{
                            backgroundColor: 'background.default',
                            padding: 6,
                            width: 'fit-content'
                          }}>
          <Typography variant="h3"
                      sx={{fontWeight: 'bold'}}>
            404
          </Typography>
          <Typography variant="body1">
            Page Not Found
          </Typography>
          <Typography variant="body1">
            Seems like you have lost your way. Let's bring you back to <Link href="/" variant="body1">home</Link>.
          </Typography>
        </GridBorderRadius>
      </Grid>
  );
}

export default PageNotFound;
