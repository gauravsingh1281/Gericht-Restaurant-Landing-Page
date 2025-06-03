import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Header from "./container/Header/Header";
import AboutUs from "./container/AboutUs/AboutUs";
import SpecialMenu from "./container/Menu/SpecialMenu";
export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
    </>
  );
}
