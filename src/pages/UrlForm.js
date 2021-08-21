import React from "react";

import classes from "./UrlForm.module.css";

const UrlForm = () => {
  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <label htmlFor="full">Full Url</label>
        <input type="text" id="full" />
        <label htmlFor="short">Short Url</label>
        <input type="text" id="short" placeholder="optional" />
        <button type="submit" className={classes.btn}>
          Submit
        </button>
      </form>
      <p>Here is your short Url</p>
    </div>
  );
};

export default UrlForm;
