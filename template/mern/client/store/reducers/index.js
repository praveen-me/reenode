import { LOG_IN, VERIFY_USER } from "../types";

const initState = {
  token: localStorage.getItem("token"),
  user: null
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case LOG_IN: {
      const { payload } = action;

      if (payload.token) {
        localStorage.setItem("token", payload.token);
      }

      return {
        ...state,
        token: payload.token,
        user: payload.user
      };
    }

    case VERIFY_USER: {
      const { payload } = action;

      return {
        ...state,
        user: payload
      };
    }

    default: {
      return state;
    }
  }
};

export default rootReducer;
