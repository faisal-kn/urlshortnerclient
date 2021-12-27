import { useContext, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

import AuthContext from "../context/auth-context";
import classes from "./UrlForm.module.css";
import Button from "../UI/Button";
import { usePromiseTracker } from "react-promise-tracker";
import { trackPromise } from "react-promise-tracker";
import Spinner from "../components/Spinner";

const UrlForm = () => {
  const [fullUrl, setFullUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [showLink, setShowLink] = useState(false);
  const { promiseInProgress } = usePromiseTracker();

  const ctx = useContext(AuthContext);
  const fullurlChangeHandler = (e) => {
    setFullUrl(e.target.value);
  };

  const shortUrlChangeHandler = (e) => {
    setShortUrl(e.target.value);
  };

  const submitHandler = async () => {
    const options = {
      url: "https://urlshortdev.herokuapp.com/api/v2/shorturl",
      method: "POST",
      withCredentials: true,
      data: {
        fullUrl,
        author: ctx.id,
      },
    };
    if (shortUrl.trim().length !== 0) options.data.shortUrl = shortUrl;
    return await axios(options);
  };

  const promiseHandler = async (e) => {
    e.preventDefault();
    const res = await trackPromise(submitHandler());
    if (res.data.status === "success") {
      setFullUrl(res.data.data.url.fullUrl);
      setShortUrl(res.data.data.url.shortUrl);
      setShowLink(true);
    }
  };

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={promiseHandler}>
        <label htmlFor="full" className={classes.full}>
          Full Url
        </label>
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
        {promiseInProgress === true && <Spinner />}
        {showLink && (
          <div>
            <p>Here is your short Url</p>
            <NavLink to={`${shortUrl}`} className={classes.small}>
              {`http://localhost:3000/${shortUrl}`}
            </NavLink>
          </div>
        )}
      </form>
    </div>
  );
};

export default UrlForm;
