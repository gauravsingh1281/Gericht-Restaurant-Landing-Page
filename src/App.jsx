import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Header from "./container/Header/Header";
import AboutUs from "./container/AboutUs/AboutUs";
import SpecialMenu from "./container/Menu/SpecialMenu";
import Chef from "./container/Chef/Chef";
import Intro from "./container/Intro/Intro";
import Laurels from "./container/Laurels/Laurels";
import Gallery from "./container/Gallery/Gallery";
export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
    </>
  );
}
