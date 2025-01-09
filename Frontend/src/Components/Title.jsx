import React from "react";

function Title({ title1, title2, titleStyles, title1Styles, paragraphStyles }) {
  return (
    <div className={`${titleStyles} pb-1`}>
      <h2 className={`${title1Styles}`}>
        {title1}
        <span className="text-secondary !font-light">{title2}</span>
      </h2>
      <p className={`${paragraphStyles} hidden`}>
        Our food is made with the freshest ingredients and cooked with love.{" "}
        <br />
        It's the perfect place to enjoy a delicious meal with your loved ones.
      </p>
    </div>
  );
}

export default Title;
