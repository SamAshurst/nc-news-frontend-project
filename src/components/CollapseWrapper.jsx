import { useState, useRef } from "react";

export default function CollapseWrapper({ children, comment_count }) {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible((currentVisibility) => {
      return !currentVisibility;
    });
  }

  const myRef = useRef(null)
 
  function executeScroll  () {
    myRef.current.scrollIntoView(true)  
  }

  function onClickInvokeFunctions () {
    handleClick()
    executeScroll()
  }

  return (
    <>
    <div ref={myRef}></div>
      <button onClick={onClickInvokeFunctions} className="comments-button">
        {isVisible
          ? `Hide Comments: ${comment_count}`
          : `Show Comments: ${comment_count}`}
      </button>     
      {isVisible && children}
    </>
  );
}
