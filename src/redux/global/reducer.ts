import { 
  CHANGE_SCREEN,
  REQUEST_ROLES_START, 
  REQUEST_ROLES_SUCCESS, 
  TOGGLE_MODAL
} from "./constants";

export const initialState = {
  mode: 'light',
  screenSize: 689,
  showModal: false,
  currentScreen: 'Login'
};

export type InGlobalState = typeof initialState;

const global = (state = initialState, action: Action) => {
  switch (action.type) {
    case REQUEST_ROLES_START: {
      return { ...state, ...action.payload };
    }
    case REQUEST_ROLES_SUCCESS: {
      return { ...state, ...action.payload };
    }
    case TOGGLE_MODAL: {
      return { ...state, showModal: action.payload };
    }
    case CHANGE_SCREEN: {
      let res = state;

      if(state.currentScreen != action.payload)
        res = { ...state, currentScreen: action.payload };

      return res;
    }
    default:
      return state;
  }
};

export default global;
