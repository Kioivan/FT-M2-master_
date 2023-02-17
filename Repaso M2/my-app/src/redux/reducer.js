import { ADD_PHOTO, FINISH_TODO, FETCH_USER_INFO } from "./actions";

const initialState = {
  user: {},
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PHOTO:
      return{};
    case FINISH_TODO:
        return{};
    case FETCH_USER_INFO:
        return{};
    default:
      return state;
  }
};

export default rootReducer;