import { UPDATE_OFFLINE } from '../actions/offline'

const INITIAL_STATE = {
  offline: false
}

const offline = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_OFFLINE:
      return {
        ...state,
        offline: action.offline
      }

    default:
      return state
  }
}

export default offline
