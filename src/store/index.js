import { legacy_createStore as createStore } from "redux";

const INITIAL_STATE = {
  counter: 0,
  showCounter: true,
};

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
        showCounter: state.showCounter,
      };
    case "INCREASE": {
      return {
        counter: state.counter + action.amount,
        showCounter: state.showCounter,
      };
    }
    case "DECREMENT":
      return {
        counter: state.counter - 1,
        showCounter: state.showCounter,
      };

    case "TOGGLE": {
      return {
        showCounter: !state.showCounter,
        counter: state.counter,
      };
    }
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
