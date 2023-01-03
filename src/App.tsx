import { useState, useEffect } from "react";
import Layout from "./Components/Layout/Layout";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useAppDispatch, useAppSelector } from "./Redux/hooks/redux-hooks";
import { setMails } from "./Redux/store/data-slice/data-actions";
function App() {
  const data = useAppSelector((state) => state.data.mails);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (data.length == 0) {
      dispatch(setMails("inbox"));
    }
  }, []);

  return (
    <div>
      <Layout />
    </div>
  );
}

export default App;
