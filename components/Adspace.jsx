import React from 'react'
import classes from '@components/Adspace.module.css'
import Image from 'next/image'
import adimage from '@public/images/adspace.png'
const Adspace = () => {
  return (
    <div className={classes.adspace}>
      <Image src = {adimage}
        width={3000}
        height={3000}
        alt = "adspace"
        className={classes.adpic}
      />
      <div className={classes.subscribe}>
        <p>Ads Support the Planters Organization. Subscribe to remove.</p>
        <button className={classes.subBtn}>Subscribe</button>
      </div>
    </div>
  )
}

export default Adspace