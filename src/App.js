import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Faturamento } from "./pages/Faturamento";
import { Imc } from "./pages/Imc";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

export function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/faturamento">
          <Faturamento />
        </Route>
        <Route path="/imc">
          <Imc />
        </Route>
      </Switch>
      <Footer />
    </Router>    
  );
}