import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure({ position: "top-center" });

const initialState = {
  isLogged: false,
};
const SUCCESS_LOGIN = 'SUCCESS_LOGIN';
const SUCCESS_LOGOUT = 'SUCCESS_LOGOUT';
const FAILED_LOGIN = 'LOGIN_FAILED';

export default function auth(state = initialState, action) {
  switch (action.type) {
  case SUCCESS_LOGIN:
    return {...state, isLogged: true};
  case SUCCESS_LOGOUT:
    return {...state, isLogged: false};
  default:
    return state
  }
}

export function performLogin(account) {

  return dispatch =>
    axios
      .post('/login', {
        email: account.email,
        password: account.password
      })
      .then( () =>  {
        toast.info("Welcome to Rexa");
        return dispatch({type: SUCCESS_LOGIN});
      })
      .catch(error => {
        toast.error("Failed to authentificate");
        return dispatch({type: FAILED_LOGIN})
      });
}

export function performLogout(){
  return dispatch =>
    axios
      .post("/logout")
      .finally( () =>  {
        return dispatch({type: SUCCESS_LOGOUT});
      });
}


export function getCurrentUser(){
  return dispatch =>
      axios
          .get("/user/current")
          .then( () =>  {
            return dispatch({type: SUCCESS_LOGIN});
          });
}
