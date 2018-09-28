import { TEST } from '../types';

export const testAction = (data) => ({
  type: TEST,
  payload: data
});

export const thunkExample = (data) => {
  return function(dispatch) {
    //something with data
  };
};
