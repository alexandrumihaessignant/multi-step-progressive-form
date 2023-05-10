import {createContext} from 'react';

export const AppContext = createContext({
  activeStepNumber: 0,
  stepsMetadata: [],
  formData: []
});
