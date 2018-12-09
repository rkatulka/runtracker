import actionTypes from '../actions/ActionTypes';

function drawer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_DRAWER:
      return Object.assign({}, state, {
        open: !state.open
      })
    default:
      return state
  }
}
