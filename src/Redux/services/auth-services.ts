// import Api from "./Api";
// import { authModel } from "../models/redux-models";
import constants from "../constant";
const AuthService = {
  async login(username: string) {
    return constants.api_key;
  },
  async logout() {
    return "";
  },
};

export default AuthService;
