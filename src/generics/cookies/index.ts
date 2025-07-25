import Cookies from "js-cookie";

export const cookieInfo = () => {
  const getCookie = (key: string) => {
    return Cookies.get(key) ? JSON.parse(Cookies.get(key) as string) : null;
  };
  const setCookie = (key: string, data: string) => {
    return Cookies.set(key, JSON.stringify(data));
  };
  const removeCookie = (name: string) => {
    Cookies.remove(name, { path: "/" });
  };

  const isAuthorization = getCookie("user") ? true : false;

  return { getCookie, setCookie, removeCookie, isAuthorization };
};
