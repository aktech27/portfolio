import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Portfolio from "./routes/Portfolio";
import Project1 from "./routes/Project1";
import ErrorPage from "./routes/Error404";
function App() {
  window.onscroll = () => {
    var scroll = document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollPercent = (scroll / height) * 100;
    console.log(scrollPercent);
    if (scrollPercent > 5.0) {
      document.getElementsByClassName("header-area")[0].style.height = "60px";
      document.getElementsByClassName("header-logo")[0].style.width = "40px";
      document.getElementsByClassName("header-logo")[0].style.height = "40px";
      document.getElementsByClassName("header-tagline")[0].style.fontSize = "10px";
    } else {
      document.getElementsByClassName("header-area")[0].style.height = "80px";
      document.getElementsByClassName("header-logo")[0].style.width = "80px";
      document.getElementsByClassName("header-logo")[0].style.height = "80px";
      document.getElementsByClassName("header-tagline")[0].style.fontSize = "20px";
    }
  };
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Portfolio} />
          <Route path="/project1" component={Project1} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
