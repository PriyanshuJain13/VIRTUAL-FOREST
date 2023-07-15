"use client";
import React from "react";
import classes from "@components/Contact.module.css";
import ReactDropdown from "react-dropdown";
import Link from "next/link";

const Contact = () => {
  const handleSubmit = () => {
    event.preventDefault();
    alert('Thanks for contacting')
  };

  const options = ["NFT", "METAVERSE", "BLOCKCHAIN"];

  return (
    <div className={classes.contact} id = "contact">
      <div className={classes.info}>
        <h1>Let's Talk</h1>
        <h3>
          Have an interesting idea for conservation, sustainability or gaming?
          Let's get in touch and build a better future.
        </h3>
        <h2>Email</h2>
        <h3>priyanshu@zuraverse.xyz</h3>
        <h2>Socials</h2>
        <div className={classes.links}>
          <Link href="https://instagram.com" passHref={true}>Instagram</Link>
          <Link href="https://twitter.com" passHref={true}>Twitter</Link>
          <Link href="https://facebook.com" passHref={true}>Facebook</Link>
        </div>
      </div>

      <div className={classes.form}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <label htmlFor="name">Name</label>
          <input type="text" />
          <label htmlFor="email">Email</label>
          <input type="email" />
          <label htmlFor="topic">What topic are you interested in</label>
          <ReactDropdown
            className={classes.dropdown}
            options={options}
            placeholder="Select project type"
          />
          <label htmlFor="message">Message</label>
          <textarea name="message" rows={4} cols={40} />
          <button className="black_btn" >Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
