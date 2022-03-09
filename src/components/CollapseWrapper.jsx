import { useState } from "react";

export default function CollapseWrapper({ children, comment_count }) {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible((currentVisibility) => {
      return !currentVisibility;
    });
  }

  return (
    <>
      <button onClick={handleClick} className="comments-button">
        {isVisible
          ? `Hide Comments: ${comment_count}`
          : `Show Comments: ${comment_count}`}
      </button>     
      {isVisible && children}     
    </>
  );
}
