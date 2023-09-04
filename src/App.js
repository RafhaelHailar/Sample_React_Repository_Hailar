import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar.js";
import BannerImage from "./components/BannerImage.js";
import GridAitoms from "./components/GridAitoms.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <>  
      <NavigationBar></NavigationBar>
      <BannerImage></BannerImage>
      <div className="bg-primary p-5">
        <div className="container">
            <h1 className="text-white">Top 5 Washing Machine</h1>
            <div className="row g-2">
                <GridAitoms name="SuperWashyWashy300"></GridAitoms>
                <GridAitoms name="WashywepWashyNeney"></GridAitoms>
                <GridAitoms name="MachinyWashy"></GridAitoms>
                <GridAitoms name="WashywepWashyNeney"></GridAitoms>
                <GridAitoms name="MachinyWashy"></GridAitoms>
            </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
