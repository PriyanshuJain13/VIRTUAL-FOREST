"use client";

import React from "react";
import Forest from "@public/images/forest.jpg";
import Image from "next/image";
import classes from "@app/profile/Profile.module.css";
import dpImage from "@public/images/dp.png";
import leafs from "@public/images/leafs.png";

const page = () => {
  return (
    <main>
      <Image src={Forest} className={classes.forestImg} alt = "background"/>
      <div className={classes.profile}>
        <div className={classes.left}>
          <div className={classes.profileBox}>
            <div className={classes.dp}>
              <Image src={dpImage}  alt = "dp" className={classes.dpImage}/>
              <h3>Melissa peters</h3>
              <h2>Interior designer</h2>
              <h2>📍Lagos, Nigeria</h2>
              <div className={classes.stats}>
                <div className={classes.level}>
                  <h3>5</h3>
                  <h2>Level</h2>
                </div>
                <div className={classes.level}>
                  <h3>137</h3>
                  <h2>Trees</h2>
                </div>
                <div className={classes.level}>
                  <h3>26</h3>
                  <h2>Friends</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.right}>
          <div className={classes.headings}>
            <h1 className={classes.active}><button>My Forest</button></h1>
            <h1 className={classes.inactive}><button>Badges</button></h1>
            <h1 className={classes.inactive}><button>Friends</button></h1>
          </div>
          <div className={classes.cards}>
            <div className={classes.card1}>
              <div className={classes.cardText}>
                <h4>Total Trees</h4>
                <h2>137</h2>
              </div>
              <Image src={leafs} className={classes.leaf} alt = "leaf"/>
            </div>
            <div className={classes.card2}>
              <div className={classes.cardText}>
                <h4>Current Stage</h4>
                <h2>Garden</h2>
              </div>
              <Image src={leafs} className={classes.leaf} alt = "leaf"/>
            </div>
            <div className={classes.card3}>
              <div className={classes.cardText}>
                <h4>Next Stage</h4>
                <h2>Orchard</h2>
              </div>
              <Image src={leafs} className={classes.leaf} alt = "leaf"/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
