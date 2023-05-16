import { BURL } from "../components/contants";
import { getjwtCookie } from "../utils/auth";

const Request = {

  // This is POST Request which takes an argument url and value and return a object of resolve data and response 
  post: async (url: string, Value: any) => {
    try {
      const res = await fetch(`${BURL}${url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": getjwtCookie() || ""
        },
        body: JSON.stringify(Value),
      });
      const data = await res.json();
      return Promise.resolve({ data, res })
    } catch (error) {
      return Promise.reject("something went wrong")
    }

  },

   // This is PATCH Request which takes an argument url and value and return a object of resolve data and response 
   patch: async (url: string, Value: any) => {
    try {
      const res = await fetch(`${BURL}${url}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": getjwtCookie() || ""
        },
        body: JSON.stringify(Value),
      });
      const data = await res.json();
      return Promise.resolve({ data, res })
    } catch (error) {
      return Promise.reject("something went wrong")
    }

  },

  get: async (url: string, Value?: any) => {
    try {
      const res = await fetch(`${BURL}${url}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": getjwtCookie() || ""
        },
        body: JSON.stringify(Value),
      });
      const data = await res.json();
      return Promise.resolve({ data, res });
    } catch (error) {
      return Promise.reject("something went wrong")
    }

  },
  // This is DELETE Request which takes an argument url and value and return a object of resolve data and response 
  delete: async (url: string, Value: any) => {
    try {
      const res = await fetch(`${BURL}${url}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": getjwtCookie() || ""
        },
        body: JSON.stringify(Value),
      });
      const data = await res.json();
      return Promise.resolve({ data, res })
    } catch (error) {
      return Promise.reject("something went wrong")
    }

  },
};

export default Request;
