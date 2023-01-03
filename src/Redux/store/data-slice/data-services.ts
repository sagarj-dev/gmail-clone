import { AllMailType, SelectedMailType } from "../../models/redux-models";
import Api from "../../services/Api";

const DataService = {
  async loadMails(email: string, cat: string) {
    var res = await Api().get(`all/${email}/${cat}`);

    return res.data;
  },
  async loadSelectedMail(email: string, id: string) {
    var res = await Api().get(`read/${email}/${id}`);
    return res.data;
  },
};

export default DataService;
