import React from "react";
import axios from "axios";
import classes from "./UrlForm.module.css";

const UrlForm = () => {
  const [fullUrl, setFullUrl] = React.useState("");
  const [shortUrl, setShortUrl] = React.useState("");

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
      data: {
        fullUrl,
      },
    };
    if (shortUrl.trim().length !== 0) options.data.shortUrl = shortUrl;
    const res = await axios(options);
    console.log(res.data);
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
        <button type="submit" className={classes.btn}>
          Submit
        </button>
      </form>
      <p>Here is your short Url</p>
    </div>
  );
};

export default UrlForm;
