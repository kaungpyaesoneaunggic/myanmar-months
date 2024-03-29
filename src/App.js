import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SplashPage from "./pages/SplashPage";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import DetailPage from "./pages/DetailPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  Aos.init();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div
          data-aos="fade-zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <SplashPage />
        </div>
      ) : (
        //No animation was present with the div below

        <Router>
          <div
            data-aos="fade-zoom-out"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <NavBar />
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/:id">
                <DetailPage />
              </Route>
            </Switch>
            <Footer />
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;
