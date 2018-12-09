import { TOGGLER_DRAWER } from '../actions/ActionTypes';

/**
 * Initial state for the side menu
 * Should be closed when the application first loads
 */
const initialState = {
  open: false
};

/**
 * Reducer for the side menu
 *
 * @param {*} state - the previous state of the side menu
 * @param {*} action - an action from {@link ActionTypes}
 */
function drawer(state = initialState, action) {
  switch (action.type) {
    case TOGGLER_DRAWER:
      return Object.assign({}, state, {
        open: !state.open
      });
    default:
      return state;
  }
}

export default drawer
