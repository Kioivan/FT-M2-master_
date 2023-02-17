const initialState = {
  name: '',
  count: 0,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case 'SAVE_NAME':
        return {
          name: action.payload
        }
    default:
      return state;
  }
};

export default reducer;