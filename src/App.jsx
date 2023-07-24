import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Css/page.css";
import "./Css/banner.css";
import "./Css/loading.css";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import Rice from "./Component/Page/Rice";
import Herb from "./Component/Page/Herb";
import Silk from "./Component/Page/Silk";
import Product from "./Component/Page/Product";
import Tradition from "./Component/Page/Tradition";
import Travel from "./Component/Page/Travel";
import Philosopher from "./Component/Coresearcher/Philosopher";
import Community from "./Component/Coresearcher/Community";
import Government from "./Component/Coresearcher/Government";
import Business from "./Component/Coresearcher/Business";
import { FaArrowUp } from "react-icons/fa";
function App() {
  const [loading, setloading] = useState(true);
  const [isShow, setisShow] = useState("none");
  const location = useLocation();
  const path = location?.pathname;
  console.log(loading);
  useEffect(() => {
    window.scrollTo(0, 0);
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 700);
  }, [path]);

  const listenScrollEvent = () => {
    window.scrollY > 200 ? setisShow("block") : setisShow("none");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const toUp = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      {loading ? (
        <div className="bg-white w-[100vw] h-[100vh] flex items-center justify-center">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <>
          <Header />
          <Routes basename={"/"}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Rice" element={<Rice />} />
            <Route exact path="/Herb" element={<Herb />} />
            <Route exact path="/Silk" element={<Silk />} />
            <Route exact path="/Product" element={<Product />} />
            <Route exact path="/Tradition" element={<Tradition />} />
            <Route exact path="/Travel" element={<Travel />} />
            <Route exact path="/Philosopher" element={<Philosopher />} />
            <Route exact path="/Community" element={<Community />} />
            <Route exact path="/Government" element={<Government />} />
            <Route exact path="/Business" element={<Business />} />
          </Routes>
          <Footer />

          <div
            className="fixed bottom-[30px] right-[30px] p-[0.8rem] rounded bg-[#faebd7] cursor-pointer"
            style={{ display: isShow }}
            onClick={() => toUp()}
          >
            <FaArrowUp className="text-xl text-[#815308]" />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
