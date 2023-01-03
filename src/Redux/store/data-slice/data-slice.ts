import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  DataModel,
  AllMailType,
  SelectedMailType,
} from "../../models/redux-models";

let initialState: DataModel = {
  email: "jasani.sagar@gmail.com",
  currentCategory: "",
  mails: [],
  selectedMail: {
    snippet: "",
    payload: {
      headers: [
        {
          name: "",
          value: "",
        },
      ],

      parts: [
        {
          partId: "",
          body: {
            size: 0,
            data: "",
          },
        },
      ],
    },
  },
};
const DataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setCategory(state, action: PayloadAction<string>) {
      state.currentCategory = action.payload;
    },
    setMails(state, action: PayloadAction<AllMailType[]>) {
      state.mails = action.payload;
    },
    setSelectedMail(state, action: PayloadAction<SelectedMailType>) {
      state.selectedMail = action.payload;
    },
    clearSelectedMail(state) {
      state.selectedMail = initialState.selectedMail;
    },
  },
});

export default DataSlice;
