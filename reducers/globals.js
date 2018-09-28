import { TEST } from '../types';

const globals = (state = {}, action) => {
  switch (action.type) {
    case TEST: {
      console.log(action);
      return {
        ...state,
        test: action.payload
      };
    }
    default:
      return state;
  }
};

export default globals;
