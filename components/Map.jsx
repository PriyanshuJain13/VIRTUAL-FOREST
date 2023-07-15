'use client';
import React ,{useState} from "react";
import mapImage from "@public/images/map.png";
import Image from "next/image";
import classes from "@components/Map.module.css";
const Map = () => {
    const [active1,setActive1] = useState("#D9D9D9")
    const [active2,setActive2] = useState("#75D63A")
    const toggleColor1 = ()=>{
        setActive1("#75D63A")
        setActive2("#D9D9D9")
    }
    const toggleColor2 = ()=>{
        setActive2("#75D63A")
        setActive1("#D9D9D9")
    }
  return (
    <div>
      <div className={classes.map}>
        <Image src={mapImage} width={3000} height={200} alt="Map" />
        <div className={classes.toggleMap}>
          <button className={classes.toggleBtn1} onClick = {toggleColor1} style = {{background:active1}}>User Map</button>
          <button className={classes.toggleBtn} onClick = {toggleColor2} style = {{background:active2}}>World Map</button>
        </div>
      </div>
    </div>
  );
};

export default Map;
