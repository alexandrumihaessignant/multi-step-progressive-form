import './styles/index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React, {useState} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material";

import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/error/PageNotFound";

import {AppRoutes} from "./constants/AppRoutes";
import {StepsStructure} from "./constants/FormStructure";
import {AppContext} from "./services/AppContext";

const router = createBrowserRouter([
  {
    path: AppRoutes.home,
    element: <Root/>,
    errorElement: <PageNotFound/>,
    children: [
      {
        index: true,
        path: AppRoutes.home,
        element: <HomePage/>
      }
    ]
  }
]);

const theme = createTheme({
  palette: {
    primary: {
      main: "#6b59d3"
    }
  }
});

const createInitialFormData = () => {
  return StepsStructure.map(step => step.fields.map(field => {
    return {
      label: field.label,
      value: ''
    };
  })).flatMap(element => element);
}

function App() {

  const [appCtx, setAppCtx] = useState({
    activeStepNumber: 0,
    stepsStructure: StepsStructure,
    formData: createInitialFormData()
  });

  return (
      <ThemeProvider theme={theme}>
        <AppContext.Provider value={{appCtx, setAppCtx}}>
          <RouterProvider router={router}/>
        </AppContext.Provider>
      </ThemeProvider>
  );
}

export default App;
