import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  DataModel,
  AllMailType,
  SelectedMailType,
} from "../../models/redux-models";

let initialState: DataModel = {
  email: "jasani.sagar@gmail.com",
  page: 1,
  currentCategory: "",
  mails: [],
  selectedMail: {
    snippet: "",
    payload: {
      body: {
        data: "",
        size: 0,
      },
      headers: [
        {
          name: "",
          value: "",
        },
      ],
      parts: [
        {
          partId: "",
          mimeType: "",
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
      state.page = 1;
      state.mails = action.payload;
    },
    setSelectedMail(state, action: PayloadAction<SelectedMailType>) {
      state.selectedMail = action.payload;
    },
    clearSelectedMail(state) {
      state.selectedMail = initialState.selectedMail;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
});

export default DataSlice;
