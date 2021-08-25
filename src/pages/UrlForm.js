import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

import classes from "./UrlForm.module.css";
import Button from "../UI/Button";

const UrlForm = () => {
  const [fullUrl, setFullUrl] = React.useState("");
  const [shortUrl, setShortUrl] = React.useState("");
  const [showLink, setShowLink] = React.useState(false);

  const fullurlChangeHandler = (e) => {
    setFullUrl(e.target.value);
  };

  const shortUrlChangeHandler = (e) => {
    setShortUrl(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const options = {
      url: "http://127.0.0.1:3001/api/v2/shorturl",
      method: "POST",
      withCredentials: true,
      data: {
        fullUrl,
      },
    };
    if (shortUrl.trim().length !== 0) options.data.shortUrl = shortUrl;
    const res = await axios(options);
    console.log(res.data);
    if (res.data.status === "success") {
      setFullUrl(res.data.data.url.fullUrl);
      setShortUrl(res.data.data.url.shortUrl);
      setShowLink(true);
    }
  };

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={submitHandler}>
        <label htmlFor="full">Full Url</label>
        <input
          type="text"
          id="full"
          onChange={fullurlChangeHandler}
          value={fullUrl}
        />
        <label htmlFor="short">Short Url</label>
        <input
          type="text"
          id="short"
          placeholder="optional"
          onChange={shortUrlChangeHandler}
          value={shortUrl}
        />
        <Button type="submit" text="Submit"></Button>
      </form>
      {showLink && (
        <div>
          <p>Here is your short Url</p>
          <NavLink to={`${shortUrl}`} className={classes.small}>
            {`http://localhost:3000/${shortUrl}`}
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default UrlForm;
