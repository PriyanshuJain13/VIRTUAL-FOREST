import React from "react";
import classes from "@components/AboutUs.module.css";
import Image from "next/image";
import p1 from "@public/images/about/p1.png";
import p2 from "@public/images/about/p2.png";
import p3 from "@public/images/about/p3.png";
import p4 from "@public/images/about/p4.png";
const AboutUs = () => {
  return (
    <div className={classes.about} id = "about">
      <h1>About Us</h1>
      <div className={classes.banners}>
        <div className={classes.banner1}>
          <div className={classes.textArea}>
            <h2>Virtual Forest</h2>
            <p>
              Virtual forest is a web-based game that enables users to plant
              trees in the real world, while sitting on couch or work-desk!{" "}
            </p>
          </div>
          <Image src={p2} height={500} width={500} alt="p4" />
        </div>

        <div className={classes.banner1}>
          <Image src={p1} height={500} width={500} alt="p3" />
          <div className={classes.textArea}>
            <h2>Planters Organizations</h2>

            <p>
              Zuraverse is a novel Play-Earn-Conserve model of narrative based
              Web3 gaming. We are very passionate about nature conservation and
              thus Virtual Forest would help immensely to establish the PEC
              model .{" "}
            </p>
          </div>
        </div>

        <div className={classes.banner1}>
          <div className={classes.textArea}>
            <h2>Virtual Forest</h2>

            <p>
              Virtual forest is a web-based game that enables users to plant
              trees in the real world, while sitting on couch or work-desk!{" "}
            </p>
          </div>
          <div className={classes.collage}>
            <Image
              src={p4}
              height={300}
              width={300}
              alt="p3"
              className={classes.p4}
            />
            <Image
              src={p3}
              height={300}
              width={300}
              alt="p3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
