import { useEffect,useState } from "react";

const useOnResize = () => {
    const [getWidth, setWidth] = useState (document.body.clientWidth);
    useEffect(() => {
        const onChangeWidth = () => {
            let currentPosition = document.body.clientWidth; 
            setWidth( currentPosition <= 0 ? 0: currentPosition);
        }
        window.addEventListener("resize", onChangeWidth, (e) => {
            e.preventDefault();
        }, {passive:true});
        return () => window.removeEventListener("resize", onChangeWidth);
   
     }, [getWidth])

    return getWidth;
}
 
export default useOnResize;