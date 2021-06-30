import { useEffect, useState } from "react";

const useOnScroll = () => {
    // const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);
    
  //   Credit: https://stackoverflow.com/questions/57453141/using-react-hooks-to-update-w-scroll
    useEffect(() => {
      function onScroll() {
          //get current height
        let currentPosition = window.pageYOffset; 
        setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
      }
      //by adding the event listener, we are allow to update on each scrol
      window.addEventListener("scroll", onScroll, (e) => {
          e.preventDefault();
      }, {passive:true});
      return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);  

    return scrollTop;
}
 
export default useOnScroll;