import { useEffect, useState } from "react";

const Top = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    <>
		{showButton && (<i onClick={scrollToTop} className="icon top">&#xf178;</i>)}
    </>
  );
};

export default Top;