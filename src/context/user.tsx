import { createContext, useEffect, useState } from "react";
import { parseCookies } from "nookies";

export default function ContextCookieUser() {
  const cookies = parseCookies();
  const [userCookie, setUserCookie] = useState();

  useEffect(() => {
    setUserCookie(JSON.parse(cookies?.Next_User));
  }, [cookies?.Next_User]);

  const ContextCookieUser = createContext(userCookie);

  return ContextCookieUser;
}