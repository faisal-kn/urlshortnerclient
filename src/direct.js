import { useEffect, useContext } from "react";
import { Redirect, useParams } from "react-router-dom";
import axios from "axios";
import AuthContext from "./context/auth-context";

const Direct = () => {
  const { shortenedURL } = useParams();
  const ctx = useContext(AuthContext);

  useEffect(() => {
    const getURL = async () => {
      const options = {
        url: `https://urlshortdev.herokuapp.com/api/v2/shorturl/${shortenedURL}`,
        method: "GET",
        withCredentials: true,
      };
      const res = await axios(options);
      console.log(res);
      return res.data.data.url.fullUrl;
    };
    if (ctx.isLoggedIn) getURL().then((res) => window.open(res, "_blank"));
    if (!ctx.isLoggedIn) getURL().then((res) => (window.location.href = res));
  }, [ctx, shortenedURL]);

  return (
    <>
      {ctx.isLoggedIn && <Redirect to="/home"></Redirect>}
      {!ctx.isLoggedIn && <div></div>}
    </>
  );
};

export default Direct;
