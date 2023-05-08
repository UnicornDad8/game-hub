import Cookies from "js-cookie";

const defaultState: any = Cookies.get("darkTheme")
  ? JSON.parse(Cookies.get("darkTheme") || "")
  : false;

export function themeReducer(state = defaultState, action: any) {
  switch (action.type) {
    case "DARK":
      return true;
    case "LIGHT":
      return false;

    default:
      return state;
  }
}
