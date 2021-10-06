import { 
  CHANGE_COLOR_START,
  CHANGE_LOCALE_START,
  CHANGE_THEME_START 
} from "./constants";

export const changeTheme = (payload: 'light' | 'dark') => ({
  type: CHANGE_COLOR_START,
  payload,
});

export const changeLocale = (payload: 'ES' | 'EN') => ({
  type: CHANGE_LOCALE_START,
  payload,
});

export const changeColor = (payload: string) => ({
  type: CHANGE_THEME_START,
  payload,
});