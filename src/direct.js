import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Direct = () => {
  const { shortenedURL } = useParams();

  const getURL = async () => {
    const options = {
      url: `http://127.0.0.1:3001/api/v2/shorturl/${shortenedURL}`,
      method: "GET",
      withCredentials: true,
    };
    const res = await axios(options);
    console.log(res.data);
    return res.data.data.url.fullUrl;
  };

  React.useEffect(() => {
    getURL();
    getURL().then((res) => (window.location.href = res));
  }, [shortenedURL]);
  return <div>Redirecting</div>;
};

export default Direct;
