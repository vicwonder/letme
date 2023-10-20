import AboutMe from "./AboutMe";
import "./App.css";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Hire from "./Hire";
import ImageProfile from "./ImageProfile";
import PortFolio from "./PortFolio";
import ProgressBar from "./ProgressBar";
import Service from "./Service";

function App() {
  return (
    <div className="App">
      <Header />
      <ImageProfile />
      <AboutMe />
      <ProgressBar />
      <Service />
      <PortFolio />
      <Hire />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
