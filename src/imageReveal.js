/* eslint-disable */
import React, { useRef, useEffect } from "react";
import "./imageReveal.css";
import { TimelineLite } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

function imageReveal(props) {
  const image = useRef(null);
  const container = useRef(null);
  const text = useRef(null);
  const imageAfter = CSSRulePlugin.getRule(".imageReveal__container::after");
  const tl = new TimelineLite();
  useEffect(() => {
    tl.to(container.current, 0, { css: { visibility: "visible" } })
      .to(imageAfter, 1.2, {
        width: "0%",
      })
      .from(image.current, 1, { scale: "1.2", delay: -1.2 })
      .from(text.current, 1.5, { opacity: 0, x: -20, delay: -1 });
  }, []);
  return (
    <div ref={container} className="imageReveal">
      <h3 ref={text}>gsap image reveal</h3>
      <div className="imageReveal__container">
        <img
          ref={image}
          src="https://images.unsplash.com/photo-1601403193849-3a2c3319c2b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        />
      </div>
    </div>
  );
}

export default imageReveal;
