import React from "react";
import classes from "@components/Purchase.module.css";
import item1 from "@public/images/items/item2.png";
import item2 from "@public/images/items/item3.png";
import item3 from "@public/images/items/item1.png";
import Image from "next/image";
import seedPack from "@public/images/seedPack.png"
const Purchase = () => {
  return (
    <div className={classes.purchaseSection} id = "nft">
      <div className={classes.items}>
        <div className={classes.card}>
          <div className={classes.cardTop}>
            <h4>Seed Bag</h4>
          </div>
          <div className={classes.cardBottom}>
            <div className={classes.cardImg}>
              <Image src={item1} alt = "item"/>
            </div>
            <h5>Total : 1</h5>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.cardTop}>
            <h4>Water</h4>
          </div>
          <div className={classes.cardBottom}>
            <div className={classes.cardImg}>
              <Image src={item2} alt = "item"/>
            </div>
            <h5>Needed Everyday</h5>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.cardTop}>
            <h4>Manure</h4>
          </div>
          <div className={classes.cardBottom}>
            <div className={classes.cardImg}>
              <Image src={item3} alt = "item"/>
            </div>
            <h5>Total : 0</h5>
          </div>
        </div>

        <div className={classes.buysell}>
          <button className={classes.buyBtn}>Buy</button>
          <button className={classes.adBtn}>Watch Ad</button>
        </div>
      </div>

      <div className={classes.buySection}>
        <Image src={seedPack}  alt = "seed"/>
        <div className={classes.buyText}>
          <h4>Get Extra and Rare Seeds</h4>
          <p>Proceeds go to Planters Organization</p>
        </div>
        <button className={classes.adBtn}>Buy Now</button>
      </div>
    </div>
  );
};

export default Purchase;
