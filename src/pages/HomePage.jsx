import {Grid} from "@mui/material";

import MyForm from "../components/organisms/form/MyForm";

function HomePage() {

  return (
      <Grid container
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{
              height: '100vh',
              minWidth: '700px'
            }}
            sx={{backgroundColor: 'primary.main'}}>
        <MyForm/>
      </Grid>
  );
}

export default HomePage;
