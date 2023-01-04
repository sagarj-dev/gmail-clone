import DataSlice from "./data-slice";
import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../index";

import DataService from "./data-services";
import { AllMailType } from "../../models/redux-models";

export const DataActions = DataSlice.actions;

export const setEmail = (
  email: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    dispatch(DataActions.setEmail(email));
  };
};

export const setCategory = (
  cat: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    dispatch(DataActions.setCategory(cat));
  };
};

export const setMails = (
  cat: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    setCategory(cat);
    let allmails = await DataService.loadMails(getState().data.email, cat);

    dispatch(DataActions.setMails(allmails));
  };
};

export const setSelectedMail = (
  id: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    let selectmail = await DataService.loadSelectedMail(
      getState().data.email,
      id
    );

    dispatch(DataActions.setSelectedMail(selectmail));
  };
};

export const setPage = (
  count: number
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    const currentPage = getState().data.page;
    let newPageNumber = currentPage + count;

    if (!newPageNumber) {
      dispatch(DataActions.setPage(1));
    } else {
      dispatch(DataActions.setPage(newPageNumber));
    }
  };
};

export const clearSelectedMail = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    dispatch(DataActions.clearSelectedMail());
  };
};
