import "./App.css";
import { Home, About, Contact, Reports, SignUp } from "./pages";
import { Navigation, Footer } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/reports" component={Reports} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/signup" component={SignUp} />
          </Switch>
          <Footer />
        </Router>
    </>
  );
}

export default App;
