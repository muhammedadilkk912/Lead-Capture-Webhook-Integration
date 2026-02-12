import { createContext, useContext, useState } from "react";
import Loader from "../Component/Loader";
 const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("Loading...");
  
  const showLoader = (msg = "Loading...") => {
    console.log(msg)
    setText(msg);
    setLoading(true);
  };

  const hideLoader = () => {
    setLoading(false);
  };

  return (
    <LoaderContext.Provider value={{ showLoader, hideLoader,loading }}>
      {loading && <Loader text={text} />}
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);
