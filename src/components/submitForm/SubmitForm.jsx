import React from "react";
import classes from "./SubmitForm.module.css";

const SubmitForm = () => {
  return (
    <div className={classes.cartContainer}>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder=""
          className={classes.formInput}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder=""
          className={classes.formInput}
        />

        <label htmlFor="tel">Telephone</label>
        <input
          type="tel"
          id="tel"
          name="tel"
          placeholder=""
          className={classes.formInput}
        />

        <label htmlFor="adress">Adress</label>
        <input
          type="text"
          id="adress"
          name="adress"
          placeholder=""
          className={classes.formInput}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SubmitForm;
