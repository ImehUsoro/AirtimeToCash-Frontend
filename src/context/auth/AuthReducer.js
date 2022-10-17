import { toast } from "react-toastify";

import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
} from "../types";

export default function AuthReducer(state, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      toast.success(action.payload.data.message);
      window.location.href = "/user/email-sent";
      return { ...state, ...action.payload };

    case REGISTER_FAILED:
      toast.error(action.payload.data.error);
      return { ...state, ...action.payload };

    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.data.token);
      const user = {
        id: action.payload.data.User.id,
        firstName: action.payload.data.User.firstName,
        lastName: action.payload.data.User.lastName,
        username: action.payload.data.User.username,
        email: action.payload.data.User.email,
        phoneNumber: action.payload.data.User.phoneNumber,
        avatar: action.payload.data.User.avatar,
      };

      localStorage.setItem("user", JSON.stringify(user));
      toast.success(action.payload.data.message);
      window.location.href = "/user/dashboard";
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };

    case LOGIN_FAIL:
      toast.error(action.payload.data.error);
      window.location.href = "/user/login";
      return {
        ...state,
        isAuthenticated: false,
      };

    case LOGOUT:
      toast.success("successfully logged out");
      localStorage.clear();
      window.location.href = "/user/login";
      break;

    default:
      return state;
  }
}
