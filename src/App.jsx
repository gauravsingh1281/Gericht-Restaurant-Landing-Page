import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Header from "./container/Header/Header";
import AboutUs from "./container/AboutUs/AboutUs";
import SpecialMenu from "./container/Menu/SpecialMenu";
import Chef from "./container/Chef/Chef";
export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
    </>
  );
}
