import { useEffect } from "react";
import Home from "../components/Home";

const HomePage = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   return (
      <>
         <Home />
      </>
   );
};

export default HomePage;
