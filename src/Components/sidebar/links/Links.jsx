import React from "react";

const Links = () => {
  const items = ["Home", "Skills", "Projects", "Contact"];

  return (
    <div className="links">
      {items.map((item) => (
        <a href={`#${item}`} key={item} className="link">
          {item}
        </a>
      ))}
    </div>
  );
};

export default Links;
