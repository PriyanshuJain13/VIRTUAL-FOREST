"use client";
import React, { useState, useRef, useEffect } from "react";
import classes from "@components/Faq.module.css";
import { FiPlus } from "react-icons/fi";

const Faq = () => {
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);
  const contentRef = useRef(null);
  const contentRef1 = useRef(null);
  const contentRef2 = useRef(null);
  const contentRef3 = useRef(null);
  const contentRef4 = useRef(null);
  const contentRef5 = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  useEffect(() => {
    contentRef1.current.style.maxHeight = active1
      ? `${contentRef1.current.scrollHeight}px`
      : "0px";
  }, [contentRef1, active1]);
  useEffect(() => {
    contentRef2.current.style.maxHeight = active2
      ? `${contentRef2.current.scrollHeight}px`
      : "0px";
  }, [contentRef2, active2]);
  useEffect(() => {
    contentRef3.current.style.maxHeight = active3
      ? `${contentRef3.current.scrollHeight}px`
      : "0px";
  }, [contentRef3, active3]);
  useEffect(() => {
    contentRef4.current.style.maxHeight = active4
      ? `${contentRef4.current.scrollHeight}px`
      : "0px";
  }, [contentRef4, active4]);
  useEffect(() => {
    contentRef5.current.style.maxHeight = active5
      ? `${contentRef5.current.scrollHeight}px`
      : "0px";
  }, [contentRef5, active5]);


  const handleClick = () => {
    setActive(!active);
  };
  const handleClick1 = () => {
    setActive1(!active1);
  };
  const handleClick2 = () => {
    setActive2(!active2);
  };
  const handleClick3 = () => {
    setActive3(!active3);
  };
  const handleClick4 = () => {
    setActive4(!active4);
  };
  const handleClick5 = () => {
    setActive5(!active5);
  };

  return (
    <div className={classes.faq} id = "faq">
      <h1 className={classes.heading}>Frequently Asked Questions</h1>
      <div className={classes.faqContainer}>

        <div className={classes.faqCard}>
          <div className={classes.topCard}>
            <h1 className={classes.faqQues}>What is the Virtual Forest?</h1>
            <button className = {active ? classes.greenBtn : classes.greyBtn} onClick={handleClick}>
              <FiPlus className={active ? classes.rotate : classes.simple}>
                +
              </FiPlus>
            </button>
          </div>

          <div className={active ? classes.faqBody : classes.none} ref={contentRef}>
            <p>
              Virtual forest is a web-based game that enables users to plant
              trees in the real world, while sitting on couch or work-desk!
            </p>
          </div>
        </div>

        <div className={classes.faqCard}>
          <div className={classes.topCard}>
            <h1 className={classes.faqQues}>What is the USP of Virtual Forest? </h1>
            <button className = {active1 ? classes.greenBtn : classes.greyBtn} onClick={handleClick1}>
              <FiPlus className={active1 ? classes.rotate : classes.simple}>
                +
              </FiPlus>
            </button>
          </div>

          <div className={active1 ? classes.faqBody1 : classes.none} ref={contentRef1}>
            <p>
              Virtual forest is a web-based game that enables users to plant
              trees in the real world, while sitting on couch or work-desk!
            </p>
          </div>
        </div>

        <div className={classes.faqCard}>
          <div className={classes.topCard}>
            <h1 className={classes.faqQues}>How does Virtual Forest plants trees in real life? </h1>
            <button className = {active2 ? classes.greenBtn : classes.greyBtn} onClick={handleClick2}>
              <FiPlus className={active2 ? classes.rotate : classes.simple}>
                +
              </FiPlus>
            </button>
          </div>

          <div className={active2 ? classes.faqBody2 : classes.none} ref={contentRef2}>
            <p>
              Virtual forest is a web-based game that enables users to plant
              trees in the real world, while sitting on couch or work-desk!
            </p>
          </div>
        </div>
        
        <div className={classes.faqCard}>
          <div className={classes.topCard}>
            <h1 className={classes.faqQues}>How much do I need to spend to plant a tree? </h1>
            <button className = {active3 ? classes.greenBtn : classes.greyBtn} onClick={handleClick3}>
              <FiPlus className={active3 ? classes.rotate : classes.simple}>
                +
              </FiPlus>
            </button>
          </div>

          <div className={active3 ? classes.faqBody3 : classes.none} ref={contentRef3}>
            <p>
              Virtual forest is a web-based game that enables users to plant
              trees in the real world, while sitting on couch or work-desk!
            </p>
          </div>
        </div>
        <div className={classes.faqCard}>
          <div className={classes.topCard}>
            <h1 className={classes.faqQues}>How many trees can a user plant in Virtual Forest?</h1>
            <button className = {active4 ? classes.greenBtn : classes.greyBtn} onClick={handleClick4}>
              <FiPlus className={active4 ? classes.rotate : classes.simple}>
                +
              </FiPlus>
            </button>
          </div>

          <div className={active4 ? classes.faqBody4 : classes.none} ref={contentRef4}>
            <p>
              Virtual forest is a web-based game that enables users to plant
              trees in the real world, while sitting on couch or work-desk!
            </p>
          </div>
        </div>

        <div className={classes.faqCard}>
          <div className={classes.topCard}>
            <h1 className={classes.faqQues}>What connection does Virtual Forest have with Zuraverse?</h1>
            <button className = {active5 ? classes.greenBtn : classes.greyBtn} onClick={handleClick5}>
              <FiPlus className={active5 ? classes.rotate : classes.simple}>
                +
              </FiPlus>
            </button>
          </div>

          <div className={active5 ? classes.faqBody5 : classes.none} ref={contentRef5}>
            <p>
              Virtual forest is a web-based game that enables users to plant
              trees in the real world, while sitting on couch or work-desk!
            </p>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Faq;
