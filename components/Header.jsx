import React from "react";
import classes from "@components/Header.module.css";
import Image from "next/image";
import myLogo from "@public/images/Logo.png";
import userPic from "@public/images/user.png";
import Link from "next/link";
const Header = () => {
  return (
    <div className={classes.header}>
      <Link href="/">
        <Image src={myLogo} width={200} height={20} alt="logo" />
      </Link>
      <div className={classes.rightHeader}>
        <ul className={classes.ul}>
          <li className={classes.li}>
            <a href="#nft">Blog</a>
          </li>
          <li className={classes.li}>
            <a href="#about">About</a>
          </li>
          <li className={classes.li}>
            <a href="#faq">FAQ</a>
          </li>
          <li className={classes.li}>
            <a href="#contact">Contact</a>
          </li>

          <li className={classes.li}>
            <a className={classes.connect}>Connect Wallet</a>
          </li>
        </ul>
        <Link href="/profile">
          <Image
            src={userPic}
            width={50}
            height={10}
            alt="user"
            className={classes.user}
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
