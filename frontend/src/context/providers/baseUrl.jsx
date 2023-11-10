import { useRef } from "react";
import BaseUrlContext from "../baseUrlContext";

export function BaseUrlProvider({ children }) {
  const isUserOnline = useRef(false);

  // to change automaticaly
  const liveUrl = "https://vyumba-mkononi-backend.onrender.com";
  const localhost = "http://localhost:3001";

  window.addEventListener("offline", function (e) {
    isUserOnline.current = false;
    console.log("offline");
  });

  window.addEventListener("online", function (e) {
    isUserOnline.current = true;
    console.log("online");
  });

  return (
    <BaseUrlContext.Provider value={isUserOnline.current ? liveUrl : localhost}>
      {children}
    </BaseUrlContext.Provider>
  );
}
