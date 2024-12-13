import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Handshake from "./components/Handshake";
import Courses from "./components/Courses";
import FacilityDiv from "./components/FacilityDiv";
import CoreLearningDiv from "./components/CoreLearningDiv";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <FacilityDiv />
      <Courses />
      <Handshake />
      <CoreLearningDiv/>
      <Footer/>
    </>
  );
}

export default App;
