import React from "react";
import classes from "@components/Nftarea.module.css";
import treeImg from "@public/images/tree.png";
import Image from "next/image";
import seed from "@public/images/nft/seed.png"
import sap from "@public/images/nft/sap.png"
import tree from "@public/images/nft/tree.png";
import drop from "@public/images/items/item3.png"
import manure from "@public/images/items/item2.png"


const Nftarea = () => {
  return (
    <div className={classes.Nftarea}>
      <div className={classes.left}>
        <div className={classes.leftInfo}>
          <div className={classes.stages}>
            <h3>Stages</h3>
            <div className={classes.card}>
              <h5>Seed (Day 0 - 4)</h5>
                <Image src={seed} alt = "seed"/>
              </div>
            <div className={classes.card}>
              <h5>Sapling (Day 5- 14)</h5>
              <Image src={sap}
              alt = "sap"
              />
            </div>
            <div className={classes.card}>
              <h5>Tree (Day 15)</h5>
              <Image src={tree} 
              alt = "tree"
              />
              </div>
          </div>
          
          <div className={classes.tools}>
            <h3>Tools</h3>
            <div className={classes.card}>
              <Image src={drop} alt = "drop"/>
              <h5>Water: Needed everyday</h5>
            </div>
            <div className={classes.card}>
              <Image src={manure} alt = "manure"/>
              <h5>Manure: Speeds up by 2 days.</h5>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.right}>
        <h2>Upcoming Collectible</h2>
        <div className={classes.rightInfo}>
          <div className={classes.nftimg}>
            <Image 
              src={treeImg}
              width = {1000}
              height = {1000}
            />
          </div>
          <div className={classes.nftInfo}>
            <h1>Tree NFT</h1>
            <p>The virtual twin of a real world sapling planted by your efforts and contributions. This sapling would be geotagged and its updates would be stored on hashgraph, a distributed ledger to ensure transparency and authenticity, and will keep it monitorable and tamper-proof. </p>
            <h2>12 days to go! </h2>
            <button className="black_btn">Mint Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nftarea;
