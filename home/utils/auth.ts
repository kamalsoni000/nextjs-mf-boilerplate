//  this is for storing User Acces Token in Cookie and many more

import {
  setCookie,
  getCookies,
  getCookie,
  deleteCookie,
  hasCookie,
} from "cookies-next";
import router from "next/router";

//  storing token in cookies
export const storeCookie = (token: string) => {
  setCookie("usr_cks", token);
  router.push("/");
};

// deleting Cookies When user logout
export const removeCookie = () => {
  deleteCookie("usr_cks");
  router.push("/login");
};

// getting Cookies for user authentication
export const getjwtCookie = () => {
  const allcookies = getCookies();
  console.log('allcookies',allcookies.usr_cks)
  return allcookies?.usr_cks  || undefined;
};
