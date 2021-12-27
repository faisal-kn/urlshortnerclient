import React from "react";
import { Redirect, useParams } from "react-router-dom";
import axios from "axios";

const Direct = () => {
  const { shortenedURL } = useParams();

  React.useEffect(() => {
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
    getURL().then((res) => window.open(res, "_blank"));
  }, [shortenedURL]);

  return (
    <>
      <Redirect to="/home"></Redirect>
    </>
  );
};

export default Direct;
