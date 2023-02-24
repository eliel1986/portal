import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Faturamento } from "./pages/Faturamento/Faturamento";
import { Imc } from "./pages/IMC/Imc";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Main } from "./components/layout/styles";

export function App() {
  return (
    <Router>
      <Navbar />
      <Main>
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
      </Main>
      <Footer />
    </Router>    
  );
}